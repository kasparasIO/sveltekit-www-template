<script>
	import {Logo} from "$components/ui/logo";
	import { Github } from "lucide-svelte";
    import * as m from "$paraglide/messages"

</script>
<footer class="sm:!px-4 sm:!flex-row sm:!gap-12 sm:items-center">
    <div class="w-fit mr-auto flex flex-col gap-3">
        <div class="w-fit flex flex-col gap-1.5">
        <Logo class="w-[4.5rem] h-fit"/>
        <p>{m.footer_slogan()}</p>
        </div>
        <a href="https://github.com" 
        class="rounded-full w-fit p-0.5 border-2 border-foreground flex justify-center transition
        hover:border-foreground/70 hover:text-foreground/70" 
        target="_blank" rel="noopener noreferrer">
            <Github size={22}/>
        </a>
        <div class="w-full h-px bg-background-secondary"/>
    </div>
    <nav class="flex-y gap-4 sm:!flex-row sm:w-full sm:gap-8">
        <div class="flex-y gap-4">
        <p class="font-bold">{m.template()}</p>
        <div class="flex-y gap-2 w-fit">
            <a href="/docs" class="link w-fit text-sm">{m.nav_docs()}</a>
            <a href="/features" class="link w-fit text-sm">{m.nav_features()}</a>
            <a href="/examples" class="link w-fit text-sm">{m.nav_examples()}</a>
        </div>
        </div>
        <div>
        <div class="flex-y gap-4">
        <p class="font-bold">{m.footer_contact()}</p>
        <div class="flex-y gap-2 w-fit">
            <a href="mailto:git@kasparas.io" class="link w-fit text-sm">{m.footer_email()}</a>
            <a href="https://kasparas.io" target="_blank" class="link w-fit text-sm">{m.footer_live()}</a>
        </div>
    </div>
    </nav>
</footer>

<style lang="postcss">
footer {
    @apply border-t border-background-secondary py-5 px-1.5 flex flex-col gap-6;
}
</style>