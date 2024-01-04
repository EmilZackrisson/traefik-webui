<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

</script>

<h1 class="text-3xl font-semibold">Traefik WebUI</h1>
<p>Edit the Traefik configuration from your browser.</p>

<section class="flex flex-col my-5">
    <h2 class="text-xl font-semibold">Routers</h2>
    {#each data.routers as router}
        <a href="/routers/{router}">{router}</a>
    {/each}
</section>

<section class="flex flex-col my-5">
    <h2 class="text-xl font-semibold">Services</h2>
{#each data.services as service}
    <a href="/service/{service}">{service}</a>
{/each}
</section>


<section class="flex flex-col my-5">
    <h2 class="text-xl font-semibold">EntryPoints</h2>
{#each data.entrypoints as entrypoint}
    <p>{entrypoint}</p>
{/each}
</section>
