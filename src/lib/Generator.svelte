<script lang="ts">
	import { OpenRouter } from '@openrouter/sdk';
	import scroll from '../assets/cookie.png';


</script>

<div class="generator">
	<button class="generate-btn"> Generate your fortune</button>
	<div class="scroll-container">
		<span class="scroll-content">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
			culpa qui officia deserunt mollit anim id est laborum. Curabitur
			pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
			turpis et commodo pharetra, est eros bibendum elit, nec luctus magna
			felis sollicitudin mauris. Integer in mauris eu nibh euismod
			gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
			nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
			culpa qui officia deserunt mollit anim id est laborum. Curabitur
			pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
			turpis et commodo pharetra, est eros bibendum elit, nec luctus magna
			felis sollicitudin mauris. Integer in mauris eu nibh euismod
			gravida.
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
