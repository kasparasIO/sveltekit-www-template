<script lang="ts">
    let className: string = "";
    export {className as class}
</script>
<section class="w-full {className}">
 <slot/>
</section>