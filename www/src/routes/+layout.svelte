<script lang="ts">
	import '../app.pcss';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import {setLanguageTag } from '$paraglide/runtime';
	import { i18n } from '$lib/i18n/index';
	export let data;
	$: setLanguageTag(data.lang);
</script>

<ParaglideJS {i18n}>
	<slot />
</ParaglideJS>
