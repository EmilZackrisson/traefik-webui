import type { PageServerLoad } from './$types';
import { GetRouters } from '$lib/traefikApi';

export const load = (async () => {
	const routers = await GetRouters();
	return {
		routers: routers
	};
}) satisfies PageServerLoad;
