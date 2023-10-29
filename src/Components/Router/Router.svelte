<script>
	import { setContext, getContext } from "svelte";
	import { writable } from "svelte/store";
	import Preloader from "./Preloader.svelte";
	import Layout from "/src/Layout/Layout.svelte";
	import ErrorPage from "./ErrorPage.svelte";

	export let options = false;
	export let configRouter = false;

	let baseUrl = false;
	let currentPage = writable(options?.defaultPage || false);
	let folderPath = false;
	let pageTitle = "";

	/**
	 * Присвоение базового адреса "https://test.com".
	 * Присвоение пути после базового адреса "/page/file".
	*/
    $: if(window) {
        baseUrl = window?.location?.origin || false;
		if(window?.location?.pathname && window?.location?.pathname != '/'){
			$currentPage = window?.location?.pathname;
		}
    }

	/**
	 * Если документ отрисован и есть базовый заголовок сайта,
	 * то он будет отрисован первоначально.
	*/
	$: if(document && options?.title) {
		document.title = options?.title;
	}

	/**
	 * Переключение страниц
	 * @param {string} value
	 */
    const changePage = (value) => {
        if(!value) return false;
		let valueSplited = value.trim().replace(/(<([^>]+)>)/gi, "").split('/');
		let clearValue = '';
		
		valueSplited.forEach(element => {
			if(element && element.length > 0){
				if(clearValue == '') { 
					clearValue = element;
				}else{
					clearValue = clearValue + '/' + element;
				}
			}
		});
		if(clearValue){
			history.pushState(null, null, baseUrl + "/" + clearValue);
			$currentPage = '/'+clearValue;
		}else{
			$currentPage = options?.defaultPage;
		}
		
		
    };

	/**
	 * Получение адреса страницы, без базового адреса (без домена)
	 */
	const getPath = () => {
		if(window?.location?.pathname && window?.location?.pathname != '/'){
			return window?.location?.pathname;
		}else{
			return '/';
		}
	};

	/**
	 * Смена страницы при переключении через кнопки браузера (назад/вперёд).
	 * @param {function} changePage
	 */
	const onPopState = (changePage) => {
        changePage(getPath());
    }

	/**
	 * Назначение папки с компонентом страницы, а так же присвоение титула страницы.
	*/
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

	/**
	 * Переназначение title страницы если он сменился
	*/
	$: if (pageTitle && pageTitle != "") {
		document.title = pageTitle;
	}

	/**
	 * Set Context
	 */
	setContext("url", {
		currentPage,
		onPopState,
	});
	setContext('changePage', changePage)

</script>
<svelte:window
  on:popstate={(e) => {onPopState(changePage)}}
/>
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
