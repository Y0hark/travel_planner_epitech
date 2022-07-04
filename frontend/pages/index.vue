<template>
	<div>
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
		<v-toolbar class="mb-1">
			<v-toolbar-title>Find a wonderful place to got to!</v-toolbar-title>
			<v-text-field
				id="arrival-location-search-input"
				v-model="location"
				rounded
				clearable
				filled
				dense
				class="mx-4"
				hide-details
				placeholder="Do we go to Alaska or Hawaii?"
			></v-text-field>
			<!-- <template>
				<div class="text-center">
					<v-menu offset-y :close-on-content-click="false">
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								color="primary"
								v-bind="attrs"
								v-on="on"
								icon
							>
								<v-icon>mdi-calendar</v-icon>
							</v-btn>
						</template>
						<v-list>
							<v-list-item>
								<template>
									<v-row>
										<v-col cols="12" sm="6">
											<v-date-picker
												v-model="dates"
												range
											></v-date-picker>
										</v-col>
										<v-col cols="12" sm="6">
											<v-text-field
												v-model="dateRangeText"
												label="Date range"
												prepend-icon="mdi-calendar"
												readonly
											></v-text-field>
										</v-col>
									</v-row> </template></v-list-item></v-list
					></v-menu>
				</div>
			</template> -->
			<v-btn id="search-button" icon @click="search">
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
		</v-toolbar>
		<v-toolbar>
			<span>Pick up a plan</span>
			<v-spacer></v-spacer>
			<v-radio-group v-model="plan" row class="pt-5">
				<v-radio
					v-for="(endpoint, index) in endpoints"
					:key="index"
					:label="endpoint.name"
					:value="endpoint.value"
				></v-radio>
			</v-radio-group>
			<v-spacer></v-spacer>
		</v-toolbar>
		<v-alert
			v-if="error"
			class="alert-bar"
			color="pink"
			dark
			border="bottom"
			icon="mdi-alert-circle"
			transition="scale-transition"
		>
			{{ alertMessage }}
		</v-alert>
	</div>
</template>

<script>
import Api from '../services/api.js'
import { data } from '../data/sample/enjoy.json'

export default {
	name: 'homePage',
	data() {
		return {
			// TODO: Samuel GALIERE need to change this to a dynamic value
			dates: ['2019-09-10', '2019-09-20'],
			location: '',
			plan: '',
			error: false,
			alertMessage: '',
			endpoints: [
				{ name: 'Enjoy', value: 'enjoy' },
				{ name: 'Sleep', value: 'sleep' },
				{ name: 'Local', value: 'local' },
				{ name: 'Travel', value: 'travel' },
				{ name: 'Eat', value: 'eat' },
				{ name: 'Drink', value: 'drink' },
			],
		}
	},
	computed: {
		dateRangeText() {
			return this.dates.join(' - ')
		},
	},
	methods: {
		async search() {
			try {
				if (this.location === '') {
					throw new Error('Please enter a location')
				}
				if (this.plan === '') {
					throw new Error('Please select a plan')
				}
				switch (this.plan) {
					case 'enjoy':
						// TODO: @Samuel_GALIERE needs to change to real API value when API is ready
						// code is ready: just need to uncomment the lines below

						// localStorage.setItem(
						// 	'apiResults',
						// 	JSON.stringify((await Api.enjoy()).data)
						// )

						localStorage.setItem('apiResults', JSON.stringify(data))
						break

					case 'sleep':
						// TODO: @Samuel_GALIERE needs to change to real API value when API is ready
						// code is ready: just need to uncomment the lines below

						// localStorage.setItem(
						// 	'apiResults',
						// 	JSON.stringify((await Api.sleep()).data)
						// )

						localStorage.setItem('apiResults', JSON.stringify(data))
						break

					case 'local':
						// TODO: @Samuel_GALIERE needs to change to real API value when API is ready
						// code is ready: just need to uncomment the lines below

						// localStorage.setItem(
						// 	'apiResults',
						// 	JSON.stringify(
						// 		(await Api.local(this.location)).data.results
						// 	)
						// )

						localStorage.setItem('apiResults', JSON.stringify(data))
						break

					case 'travel':
						// TODO: @Samuel_GALIERE needs to change to real API value when API is ready
						// code is ready: just need to uncomment the lines below

						// localStorage.setItem(
						// 	'apiResults',
						// 	JSON.stringify((await Api.travel()).data)
						// )

						localStorage.setItem('apiResults', JSON.stringify(data))
						break

					case 'eat':
						// TODO: @Samuel_GALIERE needs to change to real API value when API is ready
						// code is ready: just need to uncomment the lines below

						// localStorage.setItem(
						// 	'apiResults',
						// 	JSON.stringify((await Api.eat()).data)
						// )

						localStorage.setItem('apiResults', JSON.stringify(data))
						break

					case 'drink':
						// TODO: @Samuel_GALIERE needs to change to real API value when API is ready
						// code is ready: just need to uncomment the lines below

						// localStorage.setItem(
						// 	'apiResults',
						// 	JSON.stringify((await Api.drink()).data)
						// )

						localStorage.setItem('apiResults', JSON.stringify(data))
						break

					default:
						break
				}
				this.$router.push('/results')
			} catch (error) {
				this.error = true
				this.alertMessage = error.message
				setTimeout(() => {
					this.error = false
				}, 3000)
			}
		},
		displayCalendar() {
			this.$router.push({
				name: 'calendar',
			})
		},
	},
	mounted() {
		localStorage.getItem('favorites')
			? true
			: localStorage.setItem('favorites', JSON.stringify([]))
	},
}
</script>
<style scoped>
.alert-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 9999;
}
</style>