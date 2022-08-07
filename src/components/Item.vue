<template>
	<div class="container">
		<h4>Item: {{ item.title }}</h4>
	</div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true
		}
	}
};
</script>
