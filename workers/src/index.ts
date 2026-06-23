import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

export default {
	async fetch(request, env, ctx): Promise<Response> {
		// Handle CORS preflight requests
		if (request.method === "OPTIONS") {
			return new Response(null, {
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "POST, OPTIONS",
					"Access-Control-Allow-Headers": "Content-Type",
				},
			});
		}

		if (request.method !== "POST") {
			return new Response("Method Not Allowed", { status: 405 });
		}

		try {
			const { name, email, linkedinUrl } = await request.json() as { name: string; email: string; linkedinUrl: string };

			if (!name || !email || !linkedinUrl) {
				return new Response(JSON.stringify({ success: false, error: "Missing required fields" }), {
					status: 400,
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
					},
				});
			}

			const msg = createMimeMessage();
			msg.setSender({ name: "Hirenum Worker", addr: "hello@hirenum.com" });
			msg.setRecipient("hello@hirenum.com");
			msg.setHeader("Reply-To", email);
			msg.setSubject(`New LinkedIn Audit Request from ${name}`);
			msg.addMessage({
				contentType: "text/plain",
				data: `Name: ${name}\nEmail: ${email}\nLinkedIn URL: ${linkedinUrl}`,
			});

			const message = new EmailMessage(
				"hello@hirenum.com",
				"hello@hirenum.com",
				msg.asRaw()
			);

			await env.SEND_EMAIL.send(message);

			return new Response(JSON.stringify({ success: true }), {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
			});
		} catch (e) {
			return new Response(JSON.stringify({ success: false, error: (e as Error).message }), {
				status: 500,
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
			});
		}
	},
} satisfies ExportedHandler<Env>;
