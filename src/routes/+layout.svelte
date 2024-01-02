<script lang="ts">
	import UnsavedChangesBanner from './../components/unsavedChangesBanner.svelte';
    import "../app.css";
    import type { LayoutData } from './$types';

    export let data: LayoutData;

    
    
</script>

<slot />

<UnsavedChangesBanner unsavedObjects={data.unsavedChanges}/>