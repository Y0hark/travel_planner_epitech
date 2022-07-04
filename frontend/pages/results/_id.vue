<template>
	<div>
		<v-card>
			<v-card-title primary-title class="text-h3">
				<span>{{ result.name }}</span>
				<v-spacer></v-spacer>
				<v-rating
					readonly
					half-increments
					length="5"
					size="32"
					:value="Number(result.rating)"
				></v-rating>
				<v-spacer></v-spacer>
				<v-tooltip left>
					<template v-slot:activator="{ on, attrs }">
						<v-btn
							id="toggleFavorite"
							color="primary"
							icon
							alt
							v-bind="attrs"
							v-on="on"
							@click="toggleFavorite"
						>
							<v-icon>mdi-cards-heart</v-icon>
						</v-btn>
					</template>
					<span>Ajouter un favori</span>
				</v-tooltip>
			</v-card-title>
			<v-card-text>
				<span class="text-h6">Localisation :</span>
				{{ result.location_string }}
			</v-card-text>
			<v-card-text>
				<span class="text-h6">Description :</span>
				{{ result.description }}
			</v-card-text>
			<v-card-text>
				<span class="text-h6">Adresse :</span> {{ result.address }}
			</v-card-text>
			<v-card-text align="center">
				<v-img
					:src="result.photo.images.original.url"
					class="my-2"
				></v-img>
				<span class="text-h6">Récompenses: </span>
				<AwardComponent
					v-for="(award, index) in result.awards"
					:key="index"
					:award="award"
					class="ma-2"
				/>
				<span class="text-h6 d-block">{{ is_closed }}</span>
			</v-card-text>
		</v-card>
	</div>
</template>
<script>
import AwardComponent from '../../components/AwardComponent.vue'
export default {
	components: { AwardComponent },
	name: 'detailedPage',
	data() {
		return {
			result: localStorage.getItem('detailedResult')
				? JSON.parse(localStorage.getItem('detailedResult'))
				: {},
			noImgFlag: false,
			image: '',
		}
	},
	methods: {
		toggleFavorite() {
			// check if favorites is already a localStorage item
			const fav = JSON.parse(localStorage.getItem('favorites'))

			// if this result is already in the favorite list, remove it
			let flag = fav.some((element) => {
				if (element.name === this.result.name) {
					fav.splice(fav.indexOf(element), 1)
					return true
				}
			})
			flag ? true : fav.push(this.result)

			localStorage.setItem('favorites', JSON.stringify(fav))
		},
	},
	computed: {
		is_closed() {
			return this.result.is_closed ? 'Fermé' : 'Ouvert'
		},
	},
	mounted() {
		try {
			this.result.awards.splice(2, this.result.awards.length)
		} catch (error) {}
	},
}
</script>
<style scoped>
</style>