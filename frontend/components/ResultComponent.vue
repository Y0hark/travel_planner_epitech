<template>
	<div v-if="noImgFlag == false">
		<!-- <v-card elevation="2" outlined @click="displayResult">
			<v-card-text>
				<h3 class="Pcolor">{{ result.city }}</h3>
				<h4 class="Scolor">{{ result.country }}</h4>
				<v-btn small class="btn">Voir plus
				 </v-btn>
				<p class="Price">{{ result.price }}</p>
			</v-card-text>
		</v-card> -->
		<v-card elevation="2" @click="displayResult">
			<v-img
				:src="image"
				class="white--text align-end"
				gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
				height="200px"
			>
				<v-card-title v-text="result.name"></v-card-title>
			</v-img>

			<v-card-actions>
				{{ isClosed }}
				<v-spacer></v-spacer>

				<v-rating
					readonly
					half-increments
					length="5"
					size="32"
					:value="Number(result.rating)"
				></v-rating>
			</v-card-actions>
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
				path: 'results/detailedTravel' + this.result.name,
			})
		},
	},
	data() {
		return {
			image: '',
			noImgFlag: false,
			isClosed: this.result.is_closed ? 'Fermé' : 'Ouvert',
		}
	},
	mounted() {
		try {
			this.image = this.result.photo.images.original.url
		} catch (error) {
			this.noImgFlag = true
		}
	},
}
</script>
<style>
.Pcolor {
	color: #00bbad;
}

.Scolor {
	color: #4a8179;
}

.Price {
	text-align: right;
	border-top: 10px;
}

.btn {
	float: right;
}
</style>