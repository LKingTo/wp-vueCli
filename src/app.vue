<template>
	<div class="box trans">
		{{text}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				text: 'CHELSEA FC'
			}
		}
	}
</script>

<style scoped>
	.box {
		margin: 50px auto;
		width: 150px;
		height: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: aquamarine;
		color: coral;
	}

	.trans {
		transform: scale(1.5);
	}
</style>