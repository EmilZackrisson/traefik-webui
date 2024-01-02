import { AbortChanges } from '$lib/traefikApi';
import type { RequestHandler } from '@sveltejs/kit';

export const DELETE = (async ({ cookies }) => {
	await AbortChanges();
	cookies.delete('traefik-objects-unsaved', {
		path: '/'
	});
	return new Response(JSON.stringify({ success: true }));
}) satisfies RequestHandler;
