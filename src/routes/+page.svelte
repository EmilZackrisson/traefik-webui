<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

</script>

<div>
    <h1 class="text-3xl font-semibold">Traefik WebUI</h1>
    <p>Edit the Traefik configuration from your browser.</p>
    
    <h2 class="text-2xl font-semibold mt-5">Navigation</h2>
    <section class="flex flex-row gap-5 mt-1">
        <a href="/routers">
            <div class="card">
                <div class="card-body">
                    Routers
                </div>
            </div>
        </a>
    
        <a href="/services">
            <div class="card">
                <div class="card-body">
                    Services
                </div>
            </div>
        </a>
    </section>
    

</div>
