<script lang="ts">
import * as Page from "$components/shells/page"
import { Header } from "$components/header";
import {Footer} from "$components/footer"
</script>
<Page.Header class="py-[3.15rem]">
    <Header />
</Page.Header>
<Page.Main class="min-h-[29.5rem]">
    <slot />
</Page.Main>
<Page.Footer>
    <Footer />
</Page.Footer>