import type { PageServerLoad } from './$types';
import { GetRouters, GetServices } from '$lib/traefikApi';

export const load = (async () => {
	const routers = await GetRouters();
	const services = await GetServices();
	return {
		routers: routers,
		services: services
	};
}) satisfies PageServerLoad;
