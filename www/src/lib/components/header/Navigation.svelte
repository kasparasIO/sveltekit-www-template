<script lang="ts">
 import { page } from "$app/stores";
 import { i18n } from "$lib/i18n";
 import * as m from "$paraglide/messages"
 import { availableLanguageTags, languageTag } from "$paraglide/runtime";
 let checkbox: HTMLInputElement;
</script>

<div class="relative flex items-center sm:ml-auto">
<input type="checkbox" bind:this={checkbox} role="button" class="sm:hidden">
    <div id="burger" class="flex flex-col gap-1 items-end sm:hidden">
        <div/>
        <div/>
        <div/>
    </div>
    <nav class="sm:!scale-100 sm:!w-fit sm:!static sm:!flex-row sm:!shadow-none sm:border-none sm:!h-fit sm:gap-4 md:gap-8">
        <a href="/examples" on:click={()=> {checkbox.checked = false}}>{m.nav_examples()}</a>
        <a href="/features" on:click={()=> {checkbox.checked = false}}>{m.nav_features()}</a>
        <a href="/docs" on:click={()=> {checkbox.checked = false}}>{m.nav_docs()}</a>
        <div class="flex flex-x w-full justify-center gap-8">
            {#each availableLanguageTags as lang}
            <a 
                href={i18n.route($page.url.pathname)}
                class="lang-tag"
                hreflang={lang}
                aria-current={lang === languageTag() ? "page" : undefined}
            >
                {lang}
            </a>
            {/each}
        </div>
    </nav>
</div>

<style lang="postcss">
    input {
        @apply w-7 h-5 absolute z-20 opacity-0 block;
    }
    nav {
        @apply flex flex-col justify-evenly absolute top-14 -right-1.5 z-30 w-[70vw] h-[50vh]
         bg-background items-center py-4 px-2 shadow-xl border-b border-x border-background-secondary
         rounded transition ease-in-out duration-200 scale-x-0 origin-right;
    }
    #burger div {
        @apply bg-foreground h-[2.5px] w-6 transition-all ease-in-out duration-150;
    }
    #burger div:nth-child(2) {
        @apply w-7;
    }
    input:checked ~ #burger div:nth-child(2) {
        @apply -translate-x-2/4 opacity-0;
    }

    input:checked ~ #burger div:nth-child(1) {
        @apply rotate-45 translate-x-0 translate-y-[5px];
    }
    input:checked ~ #burger div:nth-child(3) {
        @apply -rotate-45 translate-x-0 -translate-y-[9px];
    }
    input:checked ~ nav {
        @apply scale-x-100;
    }
    nav a {
        @apply w-full text-center capitalize text-lg font-medium;
    } 
    nav a:hover {
        @apply underline;
    }
    .lang-tag {
        @apply w-fit border-none;
    }
    .lang-tag:first-child {
        @apply relative;
    }
    .lang-tag:first-child::after {
        content: "";
        @apply block h-full w-px bg-foreground absolute top-0 -right-4; 
    }
</style>
