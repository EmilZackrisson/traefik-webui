<script lang="ts">
    export let unsavedObjects: string[] = [];
</script>

{#if unsavedObjects.length > 0}
    <div class="fixed bottom-0 left-0 right-0 bg-red-500 text-white p-2 flex flex-row justify-between">
        <p>You have {unsavedObjects.length} unsaved changes.</p>
        <a href="/unsaved-changes">See changes</a>
    </div>
{/if}