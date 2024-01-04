<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h2 class="text-xl font-semibold">Routers</h2>
{#each data.routers as router}
    <a href="/routers/{router}">{router}</a>
{/each}
