<template>
	<div>{{ award.display_name }} - {{ award.year }}</div>
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