<script lang="ts">
	import Generator from './lib/Generator.svelte';
</script>

<main>
	<header>
		<h1 class="title">Digital Fortune Cookie</h1>
	</header>

	<Generator />
</main>

<style>
	main {
		text-align: center;
	}
	.title {
		margin-top: 10px;
		font-weight: var(--bold-ft-wght);
		font-size: 4rem;
		color: var(--accent-color);
	}
</style>
