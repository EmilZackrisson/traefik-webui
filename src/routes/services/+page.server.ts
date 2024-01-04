import type { PageServerLoad } from './$types';
import { GetServices } from '$lib/traefikApi';

export const load = (async () => {
	const services = await GetServices();
	return {
		services: services
	};
}) satisfies PageServerLoad;
