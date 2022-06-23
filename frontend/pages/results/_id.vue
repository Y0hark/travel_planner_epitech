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
}
</script>
<style>
</style>