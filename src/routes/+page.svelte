<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

</script>

<h1>Traefik WebUI</h1>
<p>Edit the Traefik configuration from your browser.</p>

<h2>Routers</h2>
{#each data.routers as router}
    <p>{router}</p>
{/each}

<h2>Services</h2>
{#each data.services as service}
    <p>{service}</p>
{/each}