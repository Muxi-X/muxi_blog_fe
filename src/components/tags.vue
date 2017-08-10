<template>
	<div>
		<div>
			<svg :class="$style.icon" viewBox="0 0 1024 1024">
	            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tagIcon"></use>
	        </svg>
			<span :class="$style.word">文章标签</span>
		</div>
		<div v-for="item in items" :key="item">{{item}}</div>
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
@import '../common.scss';
.icon {
	width: 25px;
	height: 25px;
}
.word {
	font-size: 14px;
}
</style>