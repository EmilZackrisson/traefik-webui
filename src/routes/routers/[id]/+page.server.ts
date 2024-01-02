import type { Actions, PageServerLoad } from './$types';
import {
	GetRouter,
	GetMiddlewares,
	GetServices,
	GetEntryPoints,
	UpdateRouter
} from '$lib/traefikApi';
import { error } from '@sveltejs/kit';
import { saveUnsavedChangesToCookie } from '$lib/saveToCookie';

export const load = (async ({ params }) => {
	const router = await GetRouter(params.id);

	if (router == null) {
		error(404, 'Router not found.');
	}

	const middlewares = await GetMiddlewares();
	const services = await GetServices();
	const entrypoints = await GetEntryPoints();

	return {
		router,
		id: params.id,
		middlewares,
		services,
		entrypoints
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, cookies, params }) => {
		const data = await request.formData();
		const jsonData = JSON.stringify(Object.fromEntries(data));
		const json = JSON.parse(jsonData);

		const newObj: Router = {
			EntryPoints: [] as string[],
			Rule: '',
			Service: ''
		};

		for (const [key, value] of Object.entries(json)) {
			console.log(key + value);
			if (key === 'Middlewares') {
				const middlewares: string[] = (value as string).split(',');
				newObj.Middlewares = middlewares;
			} else if (key === 'EntryPoints') {
				const EntryPoints: string[] = (value as string).split(',');
				newObj.EntryPoints = EntryPoints;
			} else {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				newObj[key as keyof Router] = value as any; // Add 'as any' to bypass the type error
			}
		}

		saveUnsavedChangesToCookie(cookies, params);
		const updatedRouter = await UpdateRouter(params.id, newObj);
		console.log(updatedRouter);
		console.log(jsonData);
		console.log(newObj);
		return { success: true };
	}
} satisfies Actions;
