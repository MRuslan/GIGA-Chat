<script>
	import { Core } from "@Components/Core/";
	import { Auth } from "@Components/Auth/"
	import Router from "@Components/Router/Router.svelte";
	import Middleware from "./Middleware/Middleware.svelte";
	import Interface from "@Interface/Interface.svelte";
	import { options, pages } from "@Data";
</script>

<Core {options}>
	<Auth>
		<Middleware>
			<Router configRouter={pages} options={options}>
				<slot />
			</Router>
		</Middleware>
	</Auth>
</Core>
