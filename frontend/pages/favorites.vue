<template>
	<div>
		<h2>Favorites page</h2>
		<ResultComponent
			v-for="(result, index) in favorites"
			:key="index"
			:result="result"
			:id="'cardFav-0' + index"
		/>
	</div>
</template>
<script>
export default {
	name: 'favoritesPage',
	data() {
		return {
			favorites: JSON.parse(localStorage.getItem('favorites')),
		}
	},
}
</script>
<style>
</style>