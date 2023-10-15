<script>
    import { setContext, getContext } from "svelte";
    import { writable } from "svelte/store";

    
    setContext('language', writable('ru'));
</script>

<slot/>