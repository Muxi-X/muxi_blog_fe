<template>
	<div>
		<div class="box">
			<svg class="tag_icon vertical-align" viewBox="0 0 1024 1024">
	            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tagIcon"></use>
	        </svg>
			<span class="tag_word">文章标签</span>
		</div>
		<div class="item_list">
		<a v-for="item in items" :href="'/tagBlogs/' + item" :key="item" class="item inline-block">{{item}}</a>
		</div>
	</div>
</template>
<script>
export default {
		data() {
			return {
				items: [],
				tag: ""
			}
		},
		mounted() {
			fetch('/api/v2.0/all_tags/').then(res => {
                    return res.json()
                })
                .then(res => {
                    this.items = res.tags
                    this.num = res.tag_num
                })
		}
}
</script>
<style lang="scss">
@import '../scss/common.scss';
@import '../scss/utility.scss';
.tag_icon {
	width: 25px;
	height: 25px;
    margin-right: 5px;
}
.tag_word {
	font-size: 14px;
}
.item {
	background-color: #cbcbcb;
	color: #fff;
	line-height: 16px;
	padding: 2px 2px;
	margin-top: 10px;
	margin-right: 6px;
}
.item_list {
	height: 16px;
	font-size: 14px;
	height: 180px;
	overflow: hidden;
}
.item:hover {
	background-color: #ffb17d;
}
</style>