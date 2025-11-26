<script lang="ts">
    import { goto } from "$app/navigation";

    let fileList: FileList | null = null;
    let user: string = "";

    async function upload(event: Event) {
        event.preventDefault();

        const file = fileList?.item(0);
        if (!file) {
            console.log("No file!");
            return;
        }

        if (!user) {
            console.log("No user!");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("user", user);

        console.log("appended formdata");

        const res = await fetch("/api/upload", {
            method: "POST",
            body: formData
        });

        console.log("fetch complete!");

        goto("/images/" + user);
    }
</script>

<div class="bg-black text-white gap-1.5 flex flex-col items-center justify-center min-h-screen max-w-screen">
    <form class="gap-1.5 flex flex-col items-center justify-center" on:submit={upload}>
        
        <label for="file" class="text-xl font-bold bg-neutral-950 py-2 px-4 rounded-xl m-3">
            Bild hochladen:
        </label>

        <input
            id="file"
            name="file"
            class="bg-neutral-900 rounded-2xl py-2 px-4"
            type="file"
            bind:files={fileList}
        />

        <label for="user" class="text-xl font-bold bg-neutral-950 py-2 px-4 rounded-xl m-3">
            Name:
        </label>

        <input
            id="user"
            name="user"
            class="bg-neutral-900 rounded-2xl py-2 px-4"
            type="text"
            bind:value={user}
        />

        <button class="bg-green-500 hover:opacity-105 active:opacity-50 transition-all py-2 px-4 rounded-xl" type="submit">
            Upload
        </button>
    </form>
</div>
