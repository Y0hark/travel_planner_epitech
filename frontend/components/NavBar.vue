<template>
	<div>
		<v-toolbar dense>
			<v-btn id="home-link" color="primary" text nuxt to="/">
				Travel Planner</v-btn
			>

			<v-spacer></v-spacer>

			<v-btn
				id="favorites-link"
				color="primary"
				icon
				nuxt
				to="/favorites"
			>
				<v-icon>mdi-heart</v-icon>
			</v-btn>
		</v-toolbar>
	</div>
</template>
<script>
export default {
	name: 'navBar',
}
</script>
<style></style>
