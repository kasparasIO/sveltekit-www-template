<script lang="ts">
 import { page } from "$app/stores";
 import { i18n } from "$lib/i18n";
 import * as m from "$paraglide/messages"
 import { availableLanguageTags, languageTag } from "$paraglide/runtime";
 let checkbox: HTMLInputElement;
</script>

<div class="relative flex items-center">
<input type="checkbox" bind:this={checkbox} role="button" class="w-7 h-5 absolute z-20 opacity-0">
    <div id="burger" class="flex flex-col gap-1 items-end">
        <div/>
        <div/>
        <div/>
    </div>
    <nav class="flex flex-col justify-evenly absolute top-10 -right-1.5 z-30 w-[70vw] h-[50vh]
                 bg-background items-center py-4 px-2 shadow-lg rounded
                 transition ease-in-out duration-200 scale-x-0 origin-right">
        <a href="/services" on:click={()=> {checkbox.checked = false}}>{m.nav_services()}</a>
        <a href="/about" on:click={()=> {checkbox.checked = false}}>{m.nav_about()}</a>
        <a href="/contact" on:click={()=> {checkbox.checked = false}}>{m.nav_contact()}</a>
        <div class="flex flex-row w-full justify-center gap-8">
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
    #burger div {
        @apply bg-foreground h-1 w-6 transition-all ease-in-out duration-150;
    }
    #burger div:nth-child(2) {
        @apply w-7;
    }
    input:checked ~ #burger div:nth-child(2) {
        @apply -translate-x-2/4 opacity-0;
    }

    input:checked ~ #burger div:nth-child(1) {
        @apply rotate-45 translate-x-0 translate-y-[7px];
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
        @apply w-fit;
    }
    .lang-tag:first-child {
        @apply relative;
    }
    .lang-tag:first-child::after {
        content: "";
        @apply block h-full w-px bg-foreground absolute top-0 -right-4; 
    }
</style>
