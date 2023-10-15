<script>
	import URL from "./URL.svelte";
	import Window from "./Window.svelte";
	import Breakpoints from "./Breakpoints.svelte";
	export let options = false;
</script>

<URL options={options || false}>
	<Window>
		<Breakpoints>
			<slot />
		</Breakpoints>
	</Window>
</URL>
