import type { RequestHandler } from './$types';
import { Save } from '$lib/traefikApi';

export const POST: RequestHandler = async ({ cookies }) => {
	await Save();
	cookies.delete('traefik-objects-unsaved', {
		path: '/'
	});
	return new Response('success');
};
