import { createI18n } from '@inlang/paraglide-js-adapter-sveltekit';
import * as runtime from '$paraglide/runtime.js';
import type { RequestEvent } from '@sveltejs/kit';
export const i18n = createI18n(runtime, {
	prefixDefaultLanguage: 'always',
	defaultLanguageTag: 'en'
});
export const getHeaderLang = (event: RequestEvent) => {
	const acceptLanguage = event.request.headers.get('accept-language');
	const locales = acceptLanguage?.split(',')?.map((lang) => lang.split(';')[0].trim()) ?? [];

	for (const locale of locales) {
		if (runtime.availableLanguageTags.includes(locale as runtime.AvailableLanguageTag)) {
			return locale as runtime.AvailableLanguageTag;
		}
	}
	return null;
};
