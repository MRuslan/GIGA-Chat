<script>
</script>

<div class="preloader">
	<div class="box">
		<div class="dot" />
		<div class="dot" />
		<div class="dot" />
		<div class="dot" />
		<div class="dot" />
	</div>
</div>

<style lang="scss">
	.preloader {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		background-color: #000000b9;
		z-index: 9999;

		& .box {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			display: flex;
            flex-direction: row;
            align-items: flex-end;
			gap: 10px;
            min-width: 50px;
            min-height: 50px;

			& .dot {
				width: 12px;
				height: 12px;
				border-radius: 12px;
				background-color: #ffffff;
                animation-name: example;
                animation-iteration-count: infinite;

                &:nth-child(1) {
                    animation-delay: 0s;
                    animation-duration: 1s;
                }
                &:nth-child(2) {
                    animation-delay: 0.11s;
                    animation-duration: 1.2s;
                }
                &:nth-child(3) {
                    animation-delay: 0.20s;
                    animation-duration: 0.8s;
                }
                &:nth-child(4) {
                    animation-delay: 0.26s;
                    animation-duration: 1.5s;
                }
                &:nth-child(5) {
                    animation-delay: 0.37s;
                    animation-duration: 1.1s;
                }
			}
		}
	}

	@keyframes example {
		0% {
			margin-bottom: 0px;
		}
        50% {
			margin-bottom: 40px;
		}
		100% {
			margin-bottom: 0px;
		}
	}
</style>
