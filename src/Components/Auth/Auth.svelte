<script>
	import { setContext, getContext, onMount } from "svelte";
	import { writable } from "svelte/store";
	import { options } from "@Data";

	const { getCookie, setCookie } = getContext("cookie");

	let isAuth = writable(false);
	let isAdmin = writable(false);
	let userData = writable(false);

	const access_token = writable(getCookie("access_token", false));

	const jwtParse = (token) => {
		if (!token) return false;
		let base64Url = token.split(".")[1];
		let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
		let jsonPayload = decodeURIComponent(
			atob(base64)
				.split("")
				.map(function (c) {
					return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
				})
				.join(""),
		);
		return JSON.parse(jsonPayload);
	};

	const access_decode = derived(access_token, ($access_token, set) => {
		if ($access_token) {
			set(jwtParse($access_token));
		} else {
			set(false);
		}
	});

	$: if ($access_token) {
		setCookie("access_token", $access_token, access_decode.access_token_expiration);
	}

	const checkAuth = async () => {
		try {
			// if (!$access_token) return false;
			// const headers = new Headers();
			// headers.append("Authorization", `Bearer ${$access_token}`);
			// const request = await fetch(`${options.apiURL}/auth/isAuth`, {
			// 	method: `POST`,
			// 	headers: headers,
			// });
			// const response = await request.json();
			// $userData.user_id = jwtParse($access_token).user_id;
			// return !!response.success;
			return true;
		} catch (e) {
			return false;
		}
	};

	const auth = () => {};

	const unAuth = () => {
		try {
			document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
			document.cookie = "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
			window.location.reload();
		} catch (e) {}
	};

	onMount(() => {
		checkAuth();
	});

	setContext("isAuth", isAuth);
	setContext("isAdmin", isAdmin);
	setContext("userData", userData);
</script>

<slot />

<style lang="scss">
</style>
