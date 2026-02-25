<script lang="ts">
	import { OpenRouter } from '@openrouter/sdk';
	import scroll from '../assets/cookie.png';
	const content = "lorem ipsum, hi, lorem upsum"
	const generate = async () => {
		const result = await fetch("https://digital-fortune-cookie-server.vercel.app/fortune").then(r => r.text());

	};

</script>

<div class="generator">
	<button class="generate-btn"> Generate your fortune</button>
	<div class="scroll-container">
		<span class="scroll-content">
			{content}
		</span>
		<img src={scroll} alt="A cookie" class="scroll" />
	</div>
</div>

<style>
	.scroll-container {
		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;
	}
	.scroll-content {
		position: absolute;
		text-align: center;
		max-width: 400px;
		max-height: 30%;
		font-size: 1rem;
		overflow: auto;
	}
	.scroll {
		z-index: -1;
		margin: 0;
		width: 400px;
		height: auto;
	}
	.generate-btn {
		border: none;
		padding: 5px;
		font-family: inherit;
	}
	@media screen and (max-width: 400px) {
		.scroll {
			width: 60vw;
		}
		.scroll-content {
			max-width: 60vw;
		}
	}
</style>
