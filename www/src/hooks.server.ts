import { i18n, getHeaderLang } from '$lib/i18n';
import {
	sourceLanguageTag,
	availableLanguageTags,
	type AvailableLanguageTag
} from '$paraglide/runtime';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const i18nHandle = i18n.handle();

export const forceLanguagePathHandle: Handle = async ({ event, resolve }) => {
	const { pathname, search } = new URL(event.request.url);

	let pathLang = pathname.match(/[^/]+?(?=\/|$)/);
	let matchedLang = pathLang ? (pathLang[0].toLowerCase() as AvailableLanguageTag) : null;
	let lang = matchedLang && availableLanguageTags.find((l) => l.toLowerCase() === matchedLang);

	if (!lang) {
		let possibleSupportedLocale = getHeaderLang(event);
		lang =
			possibleSupportedLocale && availableLanguageTags.includes(possibleSupportedLocale)
				? possibleSupportedLocale
				: sourceLanguageTag;

		let pathnameWithoutLang;
		if (!matchedLang) {
			pathnameWithoutLang = '/'; // Case A: Root URL -> /
		} else if (matchedLang.length === 2 && !availableLanguageTags.includes(matchedLang)) {
			pathnameWithoutLang = pathname.replace(`/${matchedLang}`, '').replace('//', '/'); // Case B: Unsupported language in URL
		} else {
			pathnameWithoutLang = pathname.substring(pathname.indexOf(matchedLang) + matchedLang.length); // Case C: Valid subpath or matchedLang is not at start
		}

		// Redirect to the corrected URL with the language tag
		return new Response(undefined, {
			headers: {
				Location: `/${lang}${pathnameWithoutLang}${search}`
			},
			status: 301
		});
	}

	// Continue with the original request if a valid language tag is already in the URL
	return resolve(event);
};

export const handle = sequence(i18nHandle, forceLanguagePathHandle);
