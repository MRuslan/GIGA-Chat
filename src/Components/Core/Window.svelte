<script>
    import { getContext } from "svelte";

    const { onPopState } = getContext('url');
    const changePage = getContext('changePage');
</script>

<svelte:window
  on:popstate={(e) => {onPopState(changePage)}}
/>

<slot/>