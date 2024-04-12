<script lang="ts">
    let className: string = "";
    export {className as class}
</script>

<main class={className}>
    <slot />
</main>