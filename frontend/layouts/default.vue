<template>
	<v-app>
		<div
			class="bgimage"
			:style="{ 'background-image': `url(${landscape})` }"
		>
			<nav-bar />
			<v-main>
				<v-container>
					<Nuxt />
				</v-container>
			</v-main>
		</div>
	</v-app>
</template>

<script>
import landscape from '../assets/images/landscape.jpg'
import NavBar from '../components/NavBar.vue'
export default {
	components: { NavBar },
	name: 'DefaultLayout',
	data() {
		return {
			landscape: landscape,
		}
	},
}
</script>

<style>
.bgimage {
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	min-width: 100vw;
	min-height: 100vh;
}

::-webkit-scrollbar {
	display: none;
}
</style>
