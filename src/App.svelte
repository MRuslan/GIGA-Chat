<script>
	import { Core } from "@Components/Core/";
	import Router from "@Components/Router/Router.svelte";
	import Middleware from "./Middleware/Middleware.svelte";
	import Interface from "@Interface/Interface.svelte";
	import { options, pages } from "@Data";
</script>

<Core {options}>
	<Middleware>
		<Router configRouter={pages} options={options}>
			<slot />
		</Router>
	</Middleware>
</Core>
