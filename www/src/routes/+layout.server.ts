import type { AvailableLanguageTag } from '$paraglide/runtime';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
	return {
		lang: locals.paraglide.lang as AvailableLanguageTag
	};
};
