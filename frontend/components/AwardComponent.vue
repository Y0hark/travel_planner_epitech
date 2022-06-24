<template>
	<div>
		{{ award.display_name }} - {{ award.year }}
		<v-img :src="award.images.small" height="50" width="50"></v-img>
	</div>
</template>
<script>
export default {
	props: {
		award: {
			type: Object,
			required: true,
		},
	},
}
</script>
<style>
</style>