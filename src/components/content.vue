<template>
	<div>
		<div class="blogs_box" v-if="this.blog_num">
			<a :href="/second/+ item.id" v-for="item in items" class="content_box" :key="item" v-on:click="toSecond">
				<div class="left_box inline_block full-height">
					<div class="top">
						<img class="avatar_size inline_block full_height" v-bind:src="item.avatar">
						<div class="top_right inline_block full_height">
							<div class="blog_title">{{item.title}}</div>
							<div>
								<div class="blog_username inline_block min_font">{{item.username}}</div>
								<div class="blog_word inline_block min_font">{{item.date}}</div>
							</div>
						</div>
					</div>
					<div class="bottom">
						<div class="bottom_left inline_block full_height">
							<svg class="content_icon inline_block" viewBox="0 0 1024 1024">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#commentIcon"></use>
							</svg>
							<div class="comment_num min_font">{{item.comment_num}}</div>
						</div>
						<div class="bottom_right inline_block full_height">
							<div class="blog_summary min_font">{{item.summary}}</div>
							<div class="tag_list full_width">
								<div v-for="onetag in item.tags" class="tag inline_block" :key="onetag">{{onetag}}</div>
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

<style lang='scss'>
@import '../scss/utility.scss';
.blogs_box,
.show {
	height: 530px;
}

.show {
	text-align: center;
	font-size: 14px;
}

a {
	display: block;
}

.content_box {
	width: 600px;
	height: 214px;
	margin-bottom: 30px;
	font-size: 0;
	background-color: $white;
	border: 2px solid transparent; 
}

.content_box:hover {
	border: 2px solid $yellow;
	.blog_title {
		color: $yellow;
	}
}

.avatar_size {
	width: 50px;
}

.content_icon {
	width: 20px;
	height: 20px;
}

.top {
	height: 50px;
	font-size: 0;
}

.left_box {
	padding-top: 15px;
	width: 390px;
	vertical-align: top;
}

.right_box {
	width: 210px;
}

.bottom {
	font-size: 0;
}

.avatar_size,
.bottom_left {
	vertical-align: top;
}

.bottom_left {
	padding: 15px;
}

.bottom_right {
	width: 315px;
}

.blog_username {
	margin-right: 20px;
}

.blog_summary {
	height: 90px;
	overflow: hidden;
	margin: 15px 0;
}

.blog_title {
	font-size: 20px;
}

.comment_num {
	text-align: center;
}

.tag_list {
	font-size: 12px;
	height: 16px;
	margin-bottom: 0;
}

.tag {
	background-color: $yellow;
	color: $white;
	font-size: 12px;
	line-height: 16px;
	margin-right: 15px;
	border-radius: 2px;
	padding: 0 3px;
}

.page_row {
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	margin-bottom: 10px;
}

.right_button {
	margin-left: 20px;
}
.button_size {
	width: 16px;
	height: 16px;
	color: $white;
	line-height: 16px;
}

.page_button:hover,
.right_button:hover {
	background-color: $yellow;
	cursor: pointer;
}
</style>