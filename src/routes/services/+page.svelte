<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h2 class="text-xl font-semibold">Services</h2>
{#each data.services as service}
    <a href="/services/{service}">{service}</a>
{/each}
