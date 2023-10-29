<script>
import { getContext } from "svelte";

const isAuth = getContext('isAuth')

$: console.log('isAuth: ', $isAuth);
</script>

Auth
<slot/>