import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();
app.use('/fortune', cors());
app.get('/', (c) => {
	return c.text('Hello Hono!');
});

app.get('/fortune', async (c) => {
	try {
		const response = await fetch(
			'https://ai.hackclub.com/proxy/v1/responses',
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${process.env.apiKey}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					model: 'google/gemini-2.5-flash',
					input: 'Generate a random fortune like the ones that are given at panda express. Keep it under 100 words',
					max_output_tokens: 400,
				}),
			},
		);

		const result = await response.json();
		return c.json({ response: result.output[0].content[0].text });
	} catch (error) {
		return c.json({ error: 'Request timed out', detail: String(error) });
	}
});

export default app;
