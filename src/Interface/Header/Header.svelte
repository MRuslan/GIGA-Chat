<script>
	import { getContext } from "svelte";
	
	const changePage = getContext('changePage');

	const goPage = (value) => {
        if(value) changePage(value)
    };
</script>

<div class="header-box">
	<div class="btn" on:click={()=>{goPage('/home')}}>
		Home
	</div>
</div>

<style lang="scss">
	.header-box {
		position: absolute;
		left: 50%;
		top: 20px;
		transform: translateX(-50%);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 20px 30px;
		border-radius: 8px;
		border: 1px solid grey;
		background-color: #000000;
	}
	.btn {
        padding: 10px 16px;
        border: 1px solid #000000;
        border-radius: 8px;
        background-color: #4b4b4b;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background-color: #585858;
        }
    }
</style>
