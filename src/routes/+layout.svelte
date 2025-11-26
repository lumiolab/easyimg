<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>MysteryImage (EasyImage) | By Lumio</title>
	<meta property="description" content="A plattform to share photos! And guess what! No Limits!" />
	<meta property="og:image" content="">
	<meta property="og:site_name" content="MysteryImage (EasyImage) | By Lumio">
	<meta property="og:title" content="MysteryImage (EasyImage) | By Lumio">
	<meta property="og:description" content="A plattform to share photos! And guess what! No Limits!" />
</svelte:head>

{@render children()}
<footer class="min-w-screen bg-neutral-950 py-3 text-sky-300 flex flex-col items-center jusitfy-center">

	<p>Made by <a target="_blank" href="https://guns.lol/lumiodev" class="font-bold hover:scale-105 transition-all animate-pulse text-sky-500 hover:underline cursor-pointer">Lumio</a>.</p>

</footer>
