<template>
	<div>
		<div class="blogs_box margin" v-if="this.blog_num">
			<a :href="/second/+ item.id" v-for="item in items" :key="items.indexOf(item)" class="content_box full_width">
				<div class="left_box inline_block full-height">
					<div class="content_top">
						<img class="avatar_size inline_block full_height" v-bind:src="item.avatar">
						<div class="top_right inline_block full_height">
							<div class="blog_title">{{item.title}}</div>
							<div>
								<div class="blog_username inline_block min_font">{{decodeURIComponent(item.username)}}</div>
								<div class="blog_word inline_block min_font">{{new Date(item.date).toLocaleDateString("ja-JP")}}</div>
							</div>
						</div>
					</div>
					<div class="content_bottom">
						<div class="bottom_left inline_block full_height">
							<svg class="content_icon inline_block" viewBox="0 0 1024 1024">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#commentIcon"></use>
							</svg>
							<div class="comment_num min_font">{{item.comment_num}}</div>
							<svg v-if="!item.is_liked" class="content_icon inline_block" viewBox="0 0 1024 1024">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#likeIcon"></use>
							</svg>
							<svg v-if="item.is_liked" class="content_icon inline_block" viewBox="0 0 1024 1024">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#red_like"></use>
							</svg>
							<div class="comment_num min_font">{{item.likes}}</div>
						</div>
						<div class="bottom_right inline_block">
							<div class="blog_summary min_font">{{item.summary}}</div>
							<div class="tag_list full_width">
								<div v-for="onetag in item.tags" class="tag inline_block" :key="item.tags.indexOf(onetag)">{{onetag}}</div>
							</div>
						</div>
					</div>
				</div>
				<img class="right_box inline_block full_height" v-bind:src="item.img_url">
			</a>
		</div>
		<div v-if="!this.blog_num" class="show">没有对应的博客</div>
		<div class="page_row full_width">
			<button class="page_button button_size" v-on:click="page_down"> < </button>
			<button class="right_button button_size" v-on:click="page_up"> > </button>
		</div>
	</div>
</template>

<script>
import Cookie from "../../common/cookie.js";
export default {
  data() {
    return {
      page_num: 1,
      username: ""
    };
  },
  props: ["items", "blog_num"],
  methods: {
    page_down() {
      this.$emit("page_down");
    },
    page_up() {
      this.$emit("page_up");
    }
  }
};
</script>
