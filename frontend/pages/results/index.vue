<template>

	<div>
		<h2>Results page</h2>
		<ResultComponent
			v-for="(result, index) in apiResultsArray"
			:key="index"
			:result="result"
			:id="'cardResult-0' + index"
		></ResultComponent>
	</div>
</template>
<script>
import ResultComponent from '../../components/ResultComponent.vue'
export default {
	components: { ResultComponent },
	name: 'resultsPage',
	data() {
		return {
			apiResultsArray: localStorage.getItem('apiResultsArray')
				? JSON.parse(localStorage.getItem('apiResultsArray'))
				: [],
		}
	},
}

</script>
<style>
</style>