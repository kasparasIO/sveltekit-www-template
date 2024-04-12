<script>
	import { Logo } from "$components/ui/logo";
	import Navigation from "./Navigation.svelte";
</script>

<header class="w-full fixed top-0 py-5 px-1.5 flex flex-row justify-between bg-background border-b border-background-secondary">
    <a href="/">
        <Logo class="h-6 w-fit"/>
    </a>
    <Navigation/>
</header>