import type { PageServerLoad } from './$types';
import { GetRouters, GetServices, GetEntryPoints } from '$lib/traefikApi';

export const load = (async () => {
	const routers = await GetRouters();
	const services = await GetServices();
	const entrypoints = await GetEntryPoints();
	return {
		routers: routers,
		services: services,
		entrypoints: entrypoints
	};
}) satisfies PageServerLoad;
