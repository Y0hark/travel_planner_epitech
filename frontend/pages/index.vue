<template>
	<div>
		<h1>Travel Planner</h1>
		<!-- TODO: Samuel GALIERE need more buttons to refine search -->
		<!-- next version form should look like this ->
		<v-card>
		<v-card-title>
			<h3>Try looking for a wonderful place to go!</h3>
		</v-card-title>
			<v-card-text>
				<v-text-field label="From" v-model="from"></v-text-field>
				<v-text-field label="To" v-model="toPlace"></v-text-field>
				<v-text-field
					label="Departure"
					v-model="departure"
				></v-text-field>
				<v-text-field
					label="Return"
					v-model="returnPlace"
				></v-text-field>
			</v-card-text>
			<v-card-actions>
				<v-btn color="primary" @click="search">Search</v-btn>
			</v-card-actions> 
		</v-card> -->
		<v-toolbar dark>
			<v-toolbar-title>Find a wonderful place to got to!</v-toolbar-title>
			<v-autocomplete
				id="arrival-location-search-input"
				:items="items"
				v-model="selected"
				cache-items
				rounded
				clearable
				auto-select-first
				filled
				dense
				class="mx-4"
				hide-no-data
				hide-details
				placeholder="Do we go to Alaska or Hawaii?"
			></v-autocomplete>
			<v-btn id="search-button" icon @click="search">
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
		</v-toolbar>
	</div>
</template>

<script>
export default {
	name: 'homePage',
	data() {
		return {
			// TODO: Samuel GALIERE need to change this to a dynamic value
			items: [
				'Alabama',
				'Alaska',
				'Arizona',
				'Arkansas',
				'California',
				'Colorado',
				'Connecticut',
				'Delaware',
				'Florida',
				'Georgia',
				'Hawaii',
				'Idaho',
				'Illinois',
				'Indiana',
				'Iowa',
				'Kansas',
				'Kentucky',
				'Louisiana',
			],
			response: [
				{ city: 'Alabama', country: 'USA', price: '$100' },
				{ city: 'Alaska', country: 'USA', price: '$200' },
				{ city: 'Arizona', country: 'USA', price: '$300' },
				{ city: 'Arkansas', country: 'USA', price: '$400' },
				{ city: 'California', country: 'USA', price: '$500' },
				{ city: 'Colorado', country: 'USA', price: '$600' },
				{ city: 'Connecticut', country: 'USA', price: '$700' },
				{ city: 'Delaware', country: 'USA', price: '$800' },
				{ city: 'Florida', country: 'USA', price: '$900' },
				{ city: 'Georgia', country: 'USA', price: '$1000' },
				{ city: 'Hawaii', country: 'USA', price: '$1100' },
				{ city: 'Idaho', country: 'USA', price: '$1200' },
				{ city: 'Illinois', country: 'USA', price: '$1300' },
				{ city: 'Indiana', country: 'USA', price: '$1400' },
				{ city: 'Iowa', country: 'USA', price: '$1500' },
				{ city: 'Kansas', country: 'USA', price: '$1600' },
				{ city: 'Kentucky', country: 'USA', price: '$1700' },
				{ city: 'Louisiana', country: 'USA', price: '$1800' },
				{ city: 'Maine', country: 'USA', price: '$1900' },
				{ city: 'Maryland', country: 'USA', price: '$2000' },
				{ city: 'Massachusetts', country: 'USA', price: '$2100' },
				{ city: 'Michigan', country: 'USA', price: '$2200' },
				{ city: 'Minnesota', country: 'USA', price: '$2300' },
				{ city: 'Mississippi', country: 'USA', price: '$2400' },
				{ city: 'Missouri', country: 'USA', price: '$2500' },
			],
			selected: '',
		}
	},
	methods: {
		search() {
			try {
				if (this.selected != '') {
					// renvoie une liste de tous les voyages pour la destination selectionnée
					const apiResultsArray = this.response.filter(
						(item) => item.city === this.selected
					)

					// creation des variables de stockage des données dans le localStorage
					localStorage.setItem(
						'apiResultsArray',
						JSON.stringify(apiResultsArray)
					)

					this.$router.push({
						name: 'results',
					})
				}
			} catch (error) {
				console.log(error)
			}
		},
	},
}
</script>
