<script>
	import Window from "./Window.svelte";
	import Breakpoints from "./Breakpoints.svelte";
	import Cookie from "./Cookie.svelte";
	export let options = false;
</script>

<!-- <Window> -->
	<Cookie>
		<Breakpoints>
			<slot />
		</Breakpoints>
	</Cookie>
<!-- </Window> -->
