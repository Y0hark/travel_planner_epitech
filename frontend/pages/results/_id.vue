<template>
	<div>
		<h2>This is a detailed result</h2>
		<h3>{{ result.city }}</h3>
		{{ result.country }}
		{{ result.price }}
		<v-btn icon @click="toggleFavorite">
			<v-icon>mdi-heart</v-icon>
		</v-btn>
	</div>
</template>
<script>
export default {
	name: 'detailedPage',
	data() {
		return {
			result: localStorage.getItem('detailedResult')
				? JSON.parse(localStorage.getItem('detailedResult'))
				: {},
		}
	},
	methods: {
		toggleFavorite() {
			const inFav = JSON.parse(localStorage.getItem('favorite')).includes(
				this.result.city
			)
				? true
				: false
			const strFav = JSON.stringify(this.result)

			// if this result is already in the favorite list, remove it
			if (inFav === true) {
				const favorites = JSON.parse(localStorage.getItem('favorites'))
			}
			// check if fav already exists, and if so, we save the result right after
			localStorage.getItem('favorites')
				? localStorage.setItem(
						'favorites',
						localStorage.getItem('favorites') + ',' + strFav
				  )
				: localStorage.setItem('favorites', strFav)
		},
	},
}
</script>
<style>
</style>