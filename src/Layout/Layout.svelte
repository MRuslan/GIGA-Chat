<script>
	import Header from "@Interface/Header/Header.svelte";
	import Footer from "@Interface/Footer/Footer.svelte";
</script>

<div class="main">
	<Header />
	<slot />
	<Footer />
</div>

<style lang="scss">
	.main {
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		background-color: #10141f;
		width: 100%;
		height: 100%;
		color: #ffffff;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
	.wrapper {
		position: relative;
	}
</style>
