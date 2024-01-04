<script lang="ts">
    import type { ActionData, PageData } from './$types';
    import { enhance } from '$app/forms';

    export let data: PageData;

	export let form: ActionData;

</script>

<h1 class="text-3xl font-semibold">Service: {data.id}</h1>

{#if form?.success}
    <div class="alert alert-success">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM18.58 32.58L11.4 25.4C10.62 24.62 10.62 23.36 11.4 22.58C12.18 21.8 13.44 21.8 14.22 22.58L20 28.34L33.76 14.58C34.54 13.8 35.8 13.8 36.58 14.58C37.36 15.36 37.36 16.62 36.58 17.4L21.4 32.58C20.64 33.36 19.36 33.36 18.58 32.58Z" fill="#00BA34" />
        </svg>
        <div class="flex flex-col">
            <span>Service submitted</span>
            <span class="text-content2">{data.id} was submitted successfully.</span>
        </div>
    </div>
{/if}

<form use:enhance method="post" class="container max-w-xl flex flex-col form-group">
    <div class="form-field flex ">
        <label class="flex cursor-pointer gap-2">
            <input type="checkbox" class="checkbox" name="PassHostHeader" id="PassHostHeader" />
            <span>PassHostHeader</span>
        </label>
    </div>
    
    <div class="form-field">
        <label for="Servers">Servers (One per line)</label>
        <textarea class="textarea input max-w-full" name="Servers" id="Servers" cols="30" rows="10" placeholder="http://10.10.0.123:8080
http://10.10.0.124:8080
        "></textarea>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
</form>