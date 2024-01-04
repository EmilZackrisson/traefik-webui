import type { Actions, PageServerLoad } from './$types';
import { GetService, UpdateService } from '$lib/traefikApi';
import { error } from '@sveltejs/kit';
import { saveUnsavedChangesToCookie } from '$lib/saveToCookie';

export const load = (async ({ params }) => {
	const service = await GetService(params.id);

	if (service == null) {
		error(404, 'Router not found.');
	}

	return {
		service,
		id: params.id
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, cookies, params }) => {
		const data = await request.formData();
		const jsonData = JSON.stringify(Object.fromEntries(data));
		const json = JSON.parse(jsonData);
		console.log('🚀 ~ file: +page.server.ts:24 ~ default: ~ json:', json);

		json.Servers = json.Servers.replaceAll(' ', '');

		if (json.Servers.endsWith('\r')) {
			json.Servers = json.Servers.slice(0, -1);
		}

		if (json.Servers.endsWith('\n')) {
			json.Servers = json.Servers.slice(0, -1);
		}

		if (json.Servers === '') {
			error(400, 'No servers specified.');
		}

		const servers: Server[] = [];

		json.Servers.split('\n').forEach((url: string) => {
			servers.push({ Url: url });
		});

		if (servers.length === 0) {
			error(400, 'No servers specified.');
		}

		const newObj: Service = {
			LoadBalancer: {
				PassHostHeader: json.PassHostHeader === 'on',
				Servers: servers
			}
		};
		console.log('🚀 ~ file: +page.server.ts:42 ~ default: ~ newObj:', newObj);

		saveUnsavedChangesToCookie(cookies, params);
		const updatedService = await UpdateService(params.id, newObj);

		console.log(updatedService);
		if (updatedService.status !== 200) {
			return { success: false };
		}

		return { success: true };
	}
} satisfies Actions;
