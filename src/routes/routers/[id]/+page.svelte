<script lang="ts">
    import type { ActionData, PageData } from './$types';
    import { enhance } from '$app/forms';

    export let data: PageData;

	export let form: ActionData;

</script>

<h1>{data.id}</h1>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
	<!-- <p>Successfully logged in! Welcome back, {data.user.name}</p> -->
    <h1>Success</h1>
{/if}

<form method="post" use:enhance>
    <label for="Rule">Rule</label>
    <input type="text" name="Rule" id="Rule" value="{data.Rule}" />
    <label for="Service">Service</label>
    <input type="text" name="Service" id="Service" value="{data.Service}" />
    <label for="EntryPoints">EntryPoints</label>
    <input type="text" name="EntryPoints" id="EntryPoints" value="{data.EntryPoints}" />
    <label for="Middlewares">Middlewares</label>
    <input type="text" name="Middlewares" id="Middlewares" value="{data.Middlewares}" />
    <label for="Tls">TLS</label>
    <input type="text" name="Tls" id="Tls" value="{data.Tls}" />
    <input type="submit" value="Submit" />
</form>