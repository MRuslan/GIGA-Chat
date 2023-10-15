<script>
	/**
	 * Svelte
	 */
	import { setContext } from "svelte";
	import { writable } from "svelte/store";

	export let options = false;
	let baseUrl = false;
	let currentPage = writable(options?.defaultPage || false);

    $: if(window) {
        baseUrl = window?.location?.origin || false;
		if(window?.location?.pathname && window?.location?.pathname != '/'){
			$currentPage = window?.location?.pathname;
		}
    }

	$: if(document && options?.title) {
		document.title = options?.title;
	}
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

	const getPath = () => {
		if(window?.location?.pathname && window?.location?.pathname != '/'){
			return window?.location?.pathname;
		}else{
			return '/';
		}
	};

	const onPopState = (changePage) => {
        changePage(getPath());
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

<slot />
