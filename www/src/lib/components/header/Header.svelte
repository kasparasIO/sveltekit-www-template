<script>
	import Navigation from "./Navigation.svelte";
    import {Button} from "$components/ui/button"
	import { Moon, Sun } from "lucide-svelte";
	import { Logo } from "$components/ui/logo";
    import {toggleMode} from "mode-watcher";
</script>

<header class="sm:gap-6 sm:!px-4">
    <a href="/">
        <Logo class="h-6 w-fit"/>
    </a>
        <div class="ml-auto sm:order-3 sm:ml-0">
            <Button on:click={toggleMode} 
            variant="outline" size="icon" class="hidden dark:flex justify-center">
                <Moon/>
            </Button>
            <Button on:click={toggleMode} 
            variant="outline" size="icon" class="dark:hidden flex justify-center">
                <Sun/>
            </Button>
        </div>
    <Navigation/>
</header>

<style lang="postcss">
 header {
    @apply w-full fixed top-0 py-5 px-1.5 flex flex-row justify-between items-center bg-background border-b
     border-background-secondary gap-8 z-10;
 }
</style>