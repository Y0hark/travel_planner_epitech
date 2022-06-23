<template>
	<div>
		<v-card elevation="2" outlined @click="displayResult">
			<v-card-text>
				<h3 class="Pcolor">{{ result.city }}</h3>
				<h4 class="Scolor">{{ result.country }}</h4>
				<v-btn small class="btn">Voir plus
				 </v-btn>
				<p class="Price">{{ result.price }}</p>
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
			localStorage.setItem('detailedResult', JSON.stringify(this.result))
			this.$router.push({
				path: 'results/detailedTravel' + this.result.city,
			})
		},
	},
}
</script>
<style>

.Pcolor {
	color: #00BBAD;
}

.Scolor {
	color: #4A8179;
}

.Price {
	text-align: right;
	border-top: 10px;
}

.btn {
	float: right;
	
}

</style>