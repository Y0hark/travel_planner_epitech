<template>
	<div>
		<v-card elevation="2" outlined>
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
}
</script>
<style>
</style>