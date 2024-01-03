import { env } from '$env/dynamic/private';

export async function GetRouter(routerName: string) {
	const res = await fetch(env.TRAEFIK_API_ENDPOINT + '/api/router?routerName=' + routerName);
	const router = (await res.json()) as Router;
	return router;
}

export async function GetRouters() {
	const res = await fetch(env.TRAEFIK_API_ENDPOINT + '/api/router');
	const routers = (await res.json()) as string[];
	return routers;
}

export async function GetService(serviceName: string) {
	const res = await fetch(env.TRAEFIK_API_ENDPOINT + '/api/service?serviceName=' + serviceName);
	const service = (await res.json()) as Service;
	return service;
}

export async function GetServices() {
	const res = await fetch(env.TRAEFIK_API_ENDPOINT + '/api/service');
	const services = (await res.json()) as string[];
	return services;
}

export async function GetMiddlewares() {
	const res = await fetch(env.TRAEFIK_API_ENDPOINT + '/api/middleware');
	const middlewares = (await res.json()) as string[];
	return middlewares;
}

export async function GetEntryPoints() {
	const res = await fetch(env.TRAEFIK_API_ENDPOINT + '/api/entrypoints');
	const entrypoints = (await res.json()) as string[];
	return entrypoints;
}

export async function CreateRouter(routerName: string, router: Router) {
	return fetch(env.TRAEFIK_API_ENDPOINT + '/api/router?routerName=' + routerName, {
		method: 'POST',
		body: JSON.stringify(router),
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

export async function UpdateRouter(routerName: string, router: Router) {
	return fetch(env.TRAEFIK_API_ENDPOINT + '/api/router?routerName=' + routerName, {
		method: 'PUT',
		body: JSON.stringify(router),
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

export async function CreateService(serviceName: string, service: Service) {
	return fetch(env.TRAEFIK_API_ENDPOINT + '/api/service?serviceName=' + serviceName, {
		method: 'POST',
		body: JSON.stringify(service),
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

export async function UpdateService(serviceName: string, service: Service) {
	return fetch(env.TRAEFIK_API_ENDPOINT + '/api/service?serviceName=' + serviceName, {
		method: 'PUT',
		body: JSON.stringify(service),
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

export async function Save() {
	const res = await fetch(env.TRAEFIK_API_ENDPOINT + '/api/save', {
		method: 'POST'
	});

	if (res.status != 204) {
		throw new Error('Failed to save.');
	}
}

export async function AbortChanges() {
	const res = await fetch(env.TRAEFIK_API_ENDPOINT + '/api/abort-changes', {
		method: 'POST'
	});

	console.log(res.status);

	if (res.status != 204) {
		throw new Error('Failed to abort changes.');
	}
}
