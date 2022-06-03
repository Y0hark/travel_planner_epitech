<template>
	<div>
		<v-card
			elevation="2"
			outlined
			:to="'results/' + result.city"
			@click="displayResult"
		>
			<v-card-text>
				<h3>{{ result.city }}</h3>
				<h4>{{ result.country }}</h4>
				{{ result.price }}
			</v-card-text>
		</v-card>
	</div>
</template>
<script>
export default {
	name: 'ResultComponent',
	props: {
		result: {
			type: Object,
			required: true,
		},
	},
	methods: {
		displayResult() {
			this.$router.push({
				name: '/results/' + this.result.city + '/',
				params: {
					result: this.result,
				},
			})
		},
	},
}
</script>
<style>
</style>