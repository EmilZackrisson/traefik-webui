<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	async function saveChanges() {
		const response = await fetch('/api/save-changes', {
			method: 'POST',
		});

		if (response.ok) {
			window.location.href = '/';
		}
	}

	async function abortChanges() {
		const response = await fetch('/api/abort-changes', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			window.location.href = '/';
		}
	}
</script>


{#if data.unsavedChanges.length > 0}
	{#each data.unsavedChanges as unsavedObject}
		<p>{unsavedObject}</p>
	{/each}

	<button on:click={abortChanges}>
		Abort changes
	</button>

	<button on:click={saveChanges}>
		Save changes
	</button>
	
	{:else}
		<p>No unsaved changes.</p>
{/if}
