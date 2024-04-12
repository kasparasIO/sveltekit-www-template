<script lang="ts">
	import '../app.pcss';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { ModeWatcher } from 'mode-watcher';
	import {setLanguageTag } from '$paraglide/runtime';
	import { i18n } from '$lib/i18n/index';
	export let data;
	$: setLanguageTag(data.lang);
</script>
<ModeWatcher />
<ParaglideJS {i18n}>
	<slot />
</ParaglideJS>
