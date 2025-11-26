<script lang="ts">
    import { onMount } from "svelte";

    let {data} = $props()
    let slug = data.params.slug
    console.log("slug frontend: ", slug)
    let images: string[] = $state([]);
    console.log("fetching data...")
    images = data.imgdata;
    console.log("Data: ", {images})
</script>

<div class="bg-black text-white gap-1.5 flex flex-col items-center justify-center min-h-screen max-w-screen">
        <p class="text-xl font-bold bg-neutral-950 py-2 px-4 rounded-xl m-3">
        {slug}'s Bilder
        </p>
    <div class={"grid grid-cols-3 items-center justify-center gap-2"}>
        {#each images as img}
            <!-- svelte-ignore a11y_missing_attribute -->
            <img src={img} class="border border-neutral-800 rounded-3xl"/>
        {/each}
    </div>
</div>
