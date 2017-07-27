<template>
	<div>
	<div :class="$style.right_box">
		<div v-for="item in items" :key="item">{{item}}</div>
	</div>
	</div>
</template>
<script>
export default {
		data() {
			return {
				items: []
			}
		},
		mounted() {
			
		}
}
</script>
<style lang="scss" module>
	
</style>