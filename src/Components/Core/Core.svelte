<script>
	import Window from "./Window.svelte";
	import Breakpoints from "./Breakpoints.svelte";
	export let options = false;
</script>

<!-- <Window> -->
	<Breakpoints>
		<slot />
	</Breakpoints>
<!-- </Window> -->
