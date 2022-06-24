<template>
	<div>
		<v-card>
			<v-card-title primary-title>
				<h3>{{ result.name }}</h3>
			</v-card-title>
			<v-card-text>
				<span>Localisation :</span> {{ result.location_string }}
			</v-card-text>
			<v-card-text>
				<span>Description :</span> {{ result.description }}
			</v-card-text>
			<v-card-text>
				<span>Adresse :</span> {{ result.address }}
			</v-card-text>
			<v-card-text>
				<v-img
					:src="result.photo.images.original.url"
					class="my-2"
				></v-img>
				<AwardComponent
					v-for="(award, index) in result.awards"
					:key="index"
					:award="award"
					class="ma-2"
				/>
				<v-rating
					half-increments
					length="5"
					size="32"
					:value="Number(result.rating)"
				></v-rating>
				<span>{{ is_closed }}</span>
				<v-btn
					id="toggleFavorite"
					color="primary"
					icon
					@click="toggleFavorite"
				>
					<v-icon>mdi-heart</v-icon>
				</v-btn>
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
<style>
</style>