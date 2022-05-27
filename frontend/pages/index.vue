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
			selected: '',
		}
	},
	methods: {
		search() {
			try {
				if (this.selected != '') {
					this.$router.push({
						name: 'results',
						params: { location: this.selected },
					})
				}
			} catch (error) {
				console.log(error)
			}
		},
	},
}
</script>
