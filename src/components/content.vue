<template>
	<div>
		<div class="blogs_box margin" v-if="this.blog_num">
			<a :href="/second/+ item.id" v-for="item in items" class="content_box full_width" v-on:click="toSecond">

				<div class="left_box inline_block full-height">
					<div class="content_top">
						<img class="avatar_size inline_block full_height" v-bind:src="item.avatar">
						<div class="top_right inline_block full_height">
							<div class="blog_title">{{item.title}}</div>
							<div>
								<div class="blog_username inline_block min_font">{{item.username}}</div>
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
						</div>
						<div class="bottom_right inline_block full_height">
							<div class="blog_summary min_font">{{item.summary}}</div>
							<div class="tag_list full_width">
								<div v-for="onetag in item.tags" class="tag inline_block">{{onetag}}</div>
							</div>
						</div>
					</div>
				</div>
				<img class="right_box inline_block full_height" v-bind:src="item.img_url">

			</a>
		</div>
		<div v-if="!this.blog_num" class="show">没有对应的博客</div>
		<div class="page_row full_width">
			<button class="page_button button_size" v-on:click="pageDown"> < </button>
			<button class="right_button button_size" v-on:click="pageUp"> > </button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			page_num: 1
		}
	},
	props: ['items', 'blog_num'],
	methods: {
		pageDown() {
			this.$emit('pageDown')
		},
		pageUp() {
			this.$emit('pageUp')
		}
	}
}
</script>
