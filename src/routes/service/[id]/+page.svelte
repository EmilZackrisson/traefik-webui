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
	<!-- <p>Successfully logged in! Welcome back, {data.router.user.name}</p> -->
    <h1>Success</h1>
{/if}

<form use:enhance method="post" class="container max-w-xl flex flex-col">
    <label for="PassHostHeader">PassHostHeader</label>
    <input type="checkbox" name="PassHostHeader" id="PassHostHeader">
    <label for="Servers">Servers (One per line)</label>
    <textarea name="Servers" id="Servers" cols="30" rows="10" placeholder="http://10.10.0.123:8080
http://10.10.0.124:8080
    "></textarea>
    <button type="submit">Submit</button>
</form>