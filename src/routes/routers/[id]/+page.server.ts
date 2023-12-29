import type { PageServerLoad } from './routers/[id]/$types';
import { GetRouter } from '$lib/traefikApi';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	const router = await GetRouter(params.id);
	if (router == null) {
		error(404, 'Router not found.');
	}
	return {
		...router,
		id: params.id
	};
}) satisfies PageServerLoad;

import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
		return { success: true };
	}
} satisfies Actions;
