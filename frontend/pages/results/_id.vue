<template>
	<div>
		<h2>This is a detailed result</h2>
		<h3>{{ result.city }}</h3>
		{{ result.country }}
		{{ result.price }}
	</div>
</template>
<script>
export default {
	name: 'detailedPage',
	data() {
		return {
			result: this.$route.params.result,
		}
	},
}
</script>
<style>
</style>