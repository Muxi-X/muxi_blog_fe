<template>
	<div>
		<div :class="$style.blogs_box" v-if="this.blog_num">
			<a :href="/second/+ item.id" v-for="item in items" :class="$style.content_box" :key="item" v-on:click="toSecond">
				<div :class="$style.left_box">
					<div :class="$style.top">
						<img :class="$style.avatar_size" v-bind:src="item.avatar">
						<div :class="$style.top_right">
							<div :class="$style.blog_title">{{item.title}}</div>
							<div>
								<div :class="$style.blog_username">{{item.username}}</div>
								<div :class="$style.blog_word">{{item.date}}</div>
							</div>
						</div>
					</div>
					<div :class="$style.bottom">
						<div :class="$style.bottom_left">
							<svg :class="$style.content_icon" viewBox="0 0 1024 1024">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#commentIcon"></use>
							</svg>
							<div :class="$style.comment_num">{{item.comment_num}}</div>
						</div>
						<div :class="$style.bottom_right">
							<div :class="$style.blog_summary">{{item.summary}}</div>
							<div :class="$style.tag_list">
								<div v-for="onetag in item.tags" :class="$style.tag" :key="onetag">{{onetag}}</div>
							</div>
						</div>
					</div>
				</div>
				<img :class="$style.right_box" v-bind:src="item.img_url">
			</a>
		</div>
		<div v-if="!this.blog_num" :class="$style.show">没有对应的博客</div>
		<div :class="$style.page_row">
			<button :class="$style.page_button" v-on:click="pageDown">
< </button>
			<button :class="$style.right_button" v-on:click="pageUp"> > </button>
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

<style lang='scss' module>
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
	background-color: #ffffff;
	border: 2px solid #ffffff; //composes: inline-block from "sass-loader!../scss/utility.scss";
}

.content_box:hover {
	border: 2px solid #ffc162;
	.blog_title {
		color: #ffc162;
	}
}

.avatar_size {
	width: 50px;
}

.avatar_size,
.top_right {
	composes: inline-block from "sass-loader!../scss/utility.scss";
	composes: full-height from "sass-loader!../scss/utility.scss";
}

.content_icon {
	width: 20px;
	height: 20px;
	composes: inline-block from "sass-loader!../scss/utility.scss";
}

.top {
	height: 50px;
	font-size: 0;
}

.left_box {
	composes: inline-block from "sass-loader!../scss/utility.scss";
	composes: full-height from "sass-loader!../scss/utility.scss";
	padding-top: 15px;
	width: 390px;
	vertical-align: top;
}

.right_box {
	composes: inline-block from "sass-loader!../scss/utility.scss";
	composes: full-height from "sass-loader!../scss/utility.scss";
	width: 210px;
}

.bottom {
	font-size: 0;
}

.bottom_left,
.bottom_right {
	composes: inline-block from "sass-loader!../scss/utility.scss";
	composes: full-height from "sass-loader!../scss/utility.scss";
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

.blog_word,
.blog_username {
	composes: inline-block from "sass-loader!../scss/utility.scss";
	composes: min-font from "sass-loader!../scss/utility.scss";
}

.blog_username {
	margin-right: 20px;
}

.blog_summary {
	height: 90px;
	overflow: hidden;
	margin: 15px 0;
	composes: min-font from "sass-loader!../scss/utility.scss";
}

.blog_title {
	font-size: 20px;
}

.comment_num {
	text-align: center;
	composes: min-font from "sass-loader!../scss/utility.scss";
}

.tag_list {
	font-size: 12px;
	composes: full-width from "sass-loader!../scss/utility.scss";
	height: 16px;
	margin-bottom: 0;
}

.tag {
	background-color: #ffc162;
	color: #ffffff;
	composes: inline-block from "sass-loader!../scss/utility.scss";
	font-size: 12px;
	line-height: 16px;
	margin-right: 15px;
	border-radius: 2px;
	padding: 0 3px;
}

.page_row {
	composes: full-width from "sass-loader!../scss/utility.scss";
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

.page_button:hover,
.right_button:hover {
	background-color: #ffc162;
	color: #ffffff;
	cursor: pointer;
}
</style>