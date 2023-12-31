<script lang="ts">
    import type { ActionData, PageData } from './$types';
    import { enhance } from '$app/forms';

    export let data: PageData;

	export let form: ActionData;

    console.log(data);
</script>

<h1>{data.id}</h1>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
	<!-- <p>Successfully logged in! Welcome back, {data.router.user.name}</p> -->
    <h1>Success</h1>
{/if}

<form method="post" use:enhance class="container max-w-xl flex flex-col">
    <label for="Rule">Rule</label>
    <input type="text" name="Rule" id="Rule" value="{data.router.Rule}" />
    <label for="Service">Service</label>
    <select name="Service" id="Service">
        {#each data.services as service}
            <option value={service} selected={service === data.router.Service}>{service}</option>       
        {/each}
    </select>
    <label for="EntryPoints">EntryPoints</label>
    <select name="EntryPoints" id="EntryPoints">
        {#each data.entrypoints as entrypoint}
            <option value={entrypoint} selected={entrypoint === data.router.EntryPoint}>{entrypoint}</option>       
        {/each}
    </select>
    <label for="Middlewares">Middlewares</label>
    <select name="Middlewares" id="Middlewares">
        <option value="" selected>None</option>
        {#each data.middlewares as middleware}
            <option value="{middleware}" selected={middleware === data.router.Middleware}>{middleware}</option>
        {/each}
    </select>
    {#if data.router.Tls}
        <label for="Tls">TLS</label>
        <input type="text" name="Tls" id="Tls" value="{data.router.Tls}" />
    {/if}
    <input type="submit" value="Submit" />
</form>