<template>
	<v-app>
	<div class="bgimage"
		:style="{ 'background-image': `url(${landscape})`}">
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
	}
}
</script>

<style>

.bgimage {

	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 100vh;
	width: 100vw;
	position: relative;
	overflow: hidden;
	}

::-webkit-scrollbar {
display: none;
}

</style>
