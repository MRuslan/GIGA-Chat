<script>
    import { getContext } from 'svelte';

    import translate from '@Data/translate/index.js'

    const language = getContext('language');
    const changePage = getContext('changePage');
    
    const goPage = (value) => {
        if(value) changePage(value)
    };
</script>

<div class="home">
    <div class="buttons">
        <div class="btn" on:click={()=>{goPage('auth')}}>
            {translate?.home?.authorize?.[$language]}
        </div>
        <div class="btn" on:click={()=>{goPage('registration')}}>
            {translate?.home?.register?.[$language]}
        </div>
    </div>
</div>

<style lang="scss">
	.home {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 20px;
		border-radius: 8px;
		border: 1px solid grey;
		background-color: #000000;
	}

    .buttons {
        display: flex;
        gap: 10px;
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
