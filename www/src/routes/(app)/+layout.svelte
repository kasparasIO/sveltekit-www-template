<script lang="ts">
import * as Page from "$components/shells/page"
import { Header } from "$components/header";
</script>
<Page.Header>
    <Header />
</Page.Header>
<Page.Main>
    <slot />
</Page.Main>
<Page.Footer>
</Page.Footer>