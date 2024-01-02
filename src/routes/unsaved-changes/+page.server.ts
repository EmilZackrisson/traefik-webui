import type { PageServerLoad } from './$types';
import { getUnsavedChangesFromCookie } from '$lib/saveToCookie';

export const load = (async ({ cookies }) => {
	const unsavedChanges = getUnsavedChangesFromCookie(cookies);
	console.log('🚀 ~ file: +page.server.ts:6 ~ load ~ unsavedChanges:', unsavedChanges);
	return {
		unsavedChanges
	};
}) satisfies PageServerLoad;
