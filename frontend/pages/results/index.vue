<template>
	<div>
		<h2>Results page</h2>
		<ResultComponent
			v-for="(result, index) in this.$route.params.results"
			:key="index"
			:result="result"
		></ResultComponent>
	</div>
</template>
<script>
import ResultComponent from '../../components/ResultComponent.vue'
export default {
	components: { ResultComponent },
	name: 'resultsPage',
}
</script>
<style>
</style>