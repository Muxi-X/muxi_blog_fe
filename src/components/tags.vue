<template>
	<div>
		<div class="box">
			<svg class="tag_icon vertical_align" viewBox="0 0 1024 1024">
	            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tagIcon"></use>
	        </svg>
			<span class="tag_word">文章标签</span>
		</div>
		<div class="item_list">
		<a v-for="item in items"
		   :href="'/tagBlogs/' + item"
		   class="item inline_block"
		   :key="items.indexOf(item)">
		   {{item}}
		   </a>
		</div>
	</div>
</template>
<script>
import Service from "../common/service.js";
export default {
  data() {
    return {
      items: [],
      tag: ""
    };
  },
  mounted() {
    Service.all_tags().then(res => {
      this.items = res.tags;
      this.num = res.tag_num;
    });
  }
};
</script>
<style lang="scss">
@import "../scss/color.scss";
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
  color: $white;
  line-height: 16px;
  padding: 2px 2px;
  margin-top: 10px;
  margin-right: 6px;
  border-radius: 2px;
}
.item_list {
  font-size: 14px;
  height: 180px;
  overflow: scroll;
}
.item:hover {
  background-color: $orange;
}
</style>
