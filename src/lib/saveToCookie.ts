import type { Cookies } from '@sveltejs/kit';

export function saveUnsavedChangesToCookie(cookies: Cookies, params: { id: string }) {
	const unsavedObjects = cookies.get('traefik-objects-unsaved');

	console.log(unsavedObjects);
	if (unsavedObjects) {
		const unsavedObjectsJson = JSON.parse(unsavedObjects) as string[];
		const newUnsavedObjects = [...unsavedObjectsJson];
		newUnsavedObjects.push(params.id);
		cookies.set('traefik-objects-unsaved', JSON.stringify(newUnsavedObjects), {
			path: '/'
		});
	} else {
		const newUnsavedObjects = [params.id];
		cookies.set('traefik-objects-unsaved', JSON.stringify(newUnsavedObjects), {
			path: '/'
		});
	}
}

export function removeUnsavedChangesFromCookie(cookies: Cookies) {
	const unsavedObjects = cookies.get('traefik-objects-unsaved');
	if (unsavedObjects) {
		cookies.delete('traefik-objects-unsaved', {
			path: '/'
		});
	}
}
