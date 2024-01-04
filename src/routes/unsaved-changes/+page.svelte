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

<section class="container">
	<h1 class="text-3xl font-semibold">Unsaved changes</h1>
	{#if data.unsavedChanges.length > 0}
	{#each data.unsavedChanges as unsavedObject}
		<p>{unsavedObject}</p>
	{/each}

	<div class="mt-3">
		<button class="btn btn-error" on:click={abortChanges}>
			Abort changes
		</button>
	
		<button class="btn btn-primary" on:click={saveChanges}>
			Save changes
		</button>
	</div>
	
	
	{:else}
		<p>No unsaved changes.</p>
{/if}
</section>

