<script>
	import { getContext } from "svelte";
	import Preloader from "./Preloader.svelte";
	import Layout from "/src/Layout/Layout.svelte";
	import ErrorPage from "./ErrorPage.svelte";
	const { currentPage } = getContext("url");

	export let configRouter = false;

	let folderPath = false;
	let pageTitle = "";

	$: if ($currentPage) {
		if (configRouter?.[$currentPage]) {
			let splitPath = $currentPage.split("/");
			let newPath = "";
			splitPath.forEach((element) => {
				if (element && element != "") {
					let p = element.charAt(0).toUpperCase() + element.slice(1);
					newPath = newPath + "/" + p;
				}
			});
			let selectedPageFolder = newPath;
			folderPath = selectedPageFolder + "/Index.svelte";
			pageTitle = configRouter?.[$currentPage]?.title || "";
		} else {
			folderPath = "/Error/index.svelte";
			pageTitle = "Error 404";
		}
	}

	$: if (pageTitle && pageTitle != "") {
		document.title = pageTitle;
	}
</script>

<Layout>
	{#if configRouter && Object.keys(configRouter)?.length > 0 && folderPath}
		{#await import(/* @vite-ignore */ `/src/Pages${folderPath}`)}
			<Preloader/>
		{:then Module}
			<Module.default />
		{:catch}
			<ErrorPage />
		{/await}
	{:else}
		Empty config
	{/if}

	<slot />
</Layout>
