<script lang="ts">
    import type { ActionData, PageData } from './$types';
    import { enhance } from '$app/forms';

    export let data: PageData;

	export let form: ActionData;

</script>

<h1 class="text-3xl font-semibold">Router: {data.id}</h1>

{#if form?.success}
    <div class="alert alert-success">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM18.58 32.58L11.4 25.4C10.62 24.62 10.62 23.36 11.4 22.58C12.18 21.8 13.44 21.8 14.22 22.58L20 28.34L33.76 14.58C34.54 13.8 35.8 13.8 36.58 14.58C37.36 15.36 37.36 16.62 36.58 17.4L21.4 32.58C20.64 33.36 19.36 33.36 18.58 32.58Z" fill="#00BA34" />
        </svg>
        <div class="flex flex-col">
            <span>Router submitted</span>
            <span class="text-content2">{data.id} was submitted successfully.</span>
        </div>
    </div>
{/if}

<form method="post" use:enhance class="container max-w-xl flex flex-col form-group">
    <div class="form-field">
        <label for="Rule" class="form-label">Rule</label>
        <input type="text" name="Rule" id="Rule" value="{data.router.Rule}" class="input max-w-full" placeholder="Host(`test.example.com`)"/>
    </div>

    <div class="form-field">
        <label for="Service" class="form-label">Service</label>
        <select name="Service" id="Service" class="input max-w-full">
            {#each data.services as service}
                <option value={service}  selected={service === data.router.Service}>{service}</option>       
            {/each}
        </select>
    </div>
    
    <div class="form-field">
        <label for="EntryPoints" class="form-label">EntryPoints</label>
        <select name="EntryPoints" id="EntryPoints" class="input max-w-full">
            {#each data.entrypoints as entrypoint}
                <!-- <option value={entrypoint} selected={entrypoint === data.router.EntryPoints}>{entrypoint}</option>    -->
                <option value={entrypoint} selected={data.router.EntryPoints.includes(entrypoint)}>{entrypoint}</option>       
    
            {/each}
        </select>
    </div>

    <div class="form-field">
        <label for="Middlewares" class="form-label">Middlewares</label>
        <select name="Middlewares" id="Middlewares" class="input max-w-full">
            <option value="" selected>None</option>
            {#each data.middlewares as middleware}
                <!-- <option value="{middleware}" selected={middleware === data.router.Middlewares}>{middleware}</option> -->
                <option value="{middleware}" selected={data.router.Middlewares?.includes(middleware)}>{middleware}</option>
            {/each}
        </select>
    </div>

    {#if data.router.Tls}
        <div class="form-field">
            <label for="Tls" class="form-label">TLS</label>
            <input type="text" name="Tls" id="Tls" value="{data.router.Tls}" class="input max-w-full"/>
        </div>
    {/if}

    <div class="form-field pt-5">
        <div class="form-control justify-between">
            <button type="submit" class="btn btn-primary w-full">Submit</button>
        </div>
    </div>
</form>