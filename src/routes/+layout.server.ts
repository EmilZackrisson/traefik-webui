import type { LayoutServerLoad } from './$types';
import { getUnsavedChangesFromCookie } from '$lib/saveToCookie';

export const load = (async ({ cookies }) => {
	const unsavedChanges = getUnsavedChangesFromCookie(cookies);
	return { unsavedChanges };
}) satisfies LayoutServerLoad;
