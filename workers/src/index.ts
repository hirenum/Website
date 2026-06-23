export default {
	async fetch(request: Request, env: any): Promise<Response> {
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
			const { name, email, linkedinUrl } = await request.json() as {
				name: string;
				email: string;
				linkedinUrl: string;
			};

			if (!name || !email || !linkedinUrl) {
				return new Response(JSON.stringify({ success: false, error: "Missing required fields" }), {
					status: 400,
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
					},
				});
			}

			const response = await fetch("https://api.resend.com/emails", {
				method: "POST",
				headers: {
					"Authorization": `Bearer ${env.RESEND_API_KEY}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					from: "Hirenum Form <hello@hirenum.com>",
					to: "hello@hirenum.com",
					reply_to: email,
					subject: `New LinkedIn Audit Request from ${name}`,
					text: `Name: ${name}\nEmail: ${email}\nLinkedIn URL: ${linkedinUrl}`,
				}),
			});

			if (!response.ok) {
				const error = await response.text();
				throw new Error(`Resend API error: ${error}`);
			}

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
};