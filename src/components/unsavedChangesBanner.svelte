<script lang="ts">
	import { onMount } from 'svelte';
    import { getCookie } from 'svelte-cookie';
    
    let cookie: any;
    
    onMount(() => {
        cookie = getCookie("traefik-objects-unsaved");
        console.log(cookie);
    });


</script>

{#if cookie !== ""}
    <div class="fixed bottom-0 left-0 right-0 bg-red-500 text-white p-2">
        <p>You have unsaved changes.</p>
    </div>
{/if}