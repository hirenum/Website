import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src/index';

const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

const validBody = JSON.stringify({ name: 'Test User', email: 'test@example.com', linkedinUrl: 'https://linkedin.com/in/test' });

describe('Form handler worker', () => {
	it('rejects non-POST requests with 405', async () => {
		const request = new IncomingRequest('http://example.com');
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		expect(response.status).toBe(405);
		expect(await response.text()).toMatchInlineSnapshot(`"Method Not Allowed"`);
	});

	it('returns 200 for OPTIONS preflight', async () => {
		const request = new IncomingRequest('http://example.com', { method: 'OPTIONS' });
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		expect(response.status).toBe(200);
		expect(response.headers.get('Access-Control-Allow-Methods')).toBe('POST, OPTIONS');
	});

	it('returns 400 when required fields are missing', async () => {
		const request = new IncomingRequest('http://example.com', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: 'Test' }),
		});
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		expect(response.status).toBe(400);
		const body = await response.json() as { success: boolean; error: string };
		expect(body.success).toBe(false);
	});
});
