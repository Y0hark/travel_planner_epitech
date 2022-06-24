<template>
	<div>
		<ResultComponent
			class="my-3"
			v-for="(result, index) in apiResultsArray"
			:key="index"
			:result="result"
			:id="'cardResult-0' + index"
		></ResultComponent>
	</div>
</template>
<script>
import ResultComponent from '../../components/ResultComponent.vue'
import { data } from '../../data/sample/enjoy.json'

export default {
	components: { ResultComponent },
	name: 'resultsPage',
	data() {
		return {
			apiResultsArray: data,
		}
	},
}
</script>
<style>
</style>