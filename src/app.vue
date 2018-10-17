<template>
	<div>
		<div class="box logo trans"></div>
		<div class="title">{{text}}</div>
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
	}

	.logo {
		background: url("assets/images/logo.jpeg") no-repeat;
		background-size: 150px 150px;
	}

	.title {
		margin: auto;
		width: 150px;
		background: aquamarine;
		text-align: center;
		color: coral;
	}

	.trans {
		transform: scale(1.5);
	}
</style>