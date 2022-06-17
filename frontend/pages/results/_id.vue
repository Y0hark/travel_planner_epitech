<template>
	<div>
		<h2>This is a detailed result</h2>
		<h3>{{ result.city }}</h3>
		{{ result.country }}
		{{ result.price }}
	</div>
</template>
<script>

import ResultComponent from '../../components/ResultComponent.vue'

export default {
	name: 'detailedPage',
	data() {
		return {
			result: localStorage.getItem('detailedResult')
				? JSON.parse(localStorage.getItem('detailedResult'))
				: {},
		}
	},
}
</script>
<style>
</style>