<template>
	<div id="content">
		<div v-for="item in items" :class="$style.content_box" :key="item">
			<div :class="$style.left_box">
				<div :class="$style.top">
					<img :class="$style.avatar_size" v-bind:src="item.avatar">
					<div :class="$style.top_right">
						<div :class="$style.blog_title">{{item.title}}</div>
						<div>
							<div :class="$style.blog_word">{{item.username}}</div>
							<div :class="$style.blog_word">{{item.date}}</div>
						</div>
					</div>
				</div>
				<div :class="$style.bottom">
					<div :class="$style.bottom_left">
						<svg :class="$style.content_icon" viewBox="0 0 1024 1024">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#comment"></use>
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
		</div>
		 <div :class="$style.page_row">
			<button :class="$style.page_button" v-on:click="pageDown"> < </button>
		    <button :class="$style.page_button" v-on:click="pageUp"> > </button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: ['items','page_num','page_count'],
		methods: {
			pageDown() {
				if(this.page_num != 1)
				    this.$parent.page_num -= 1;
			},
			pageUp() {
				if(this.page_num != this.page_count)
				    this.$parent.page_num += 1;
			}
		}
	}
</script>

<style lang='scss' module>
	.content_box {
		width: 600px;
		height: 210px;
		margin-bottom: 30px;
		font-size: 0;
		background-color: #ffffff;
		//border: 1px 
		//composes: inline-block from "sass-loader!../utility.scss";
	}
	
	.avatar_size {
		width: 40px;
		height: 40px;
	}
	
	.content_icon {
		width: 20px;
		height: 20px;
		composes: inline-block from "sass-loader!../utility.scss";
	}
	
	.top_right {
		composes: inline-block from "sass-loader!../utility.scss";
	}
	
	.left_box {
		composes: inline-block from "sass-loader!../utility.scss";
		composes: full-height from "sass-loader!../utility.scss";
		width: 390px;
		vertical-align: top;
	}
	
	.right_box {
		composes: inline-block from "sass-loader!../utility.scss";
		composes: full-height from "sass-loader!../utility.scss";
		width: 210px;
	}
	
	.bottom {
		font-size: 0;
	}
	
	.bottom_left {
		composes: inline-block from "sass-loader!../utility.scss";
		composes: full-height from "sass-loader!../utility.scss";
	}
	
	.blog_word {
		composes: inline-block from "sass-loader!../utility.scss";
		composes: min-font from "sass-loader!../utility.scss";
	}
	
	.blog_summary {
		composes: min-font from "sass-loader!../utility.scss";
	}
	
	.blog_title {
		font-size: 16px;
	}
	
	.comment_num {
		composes: min-font from "sass-loader!../utility.scss";
	}
	
	.tag_list {
		font-size: 12px;
		width: 100%;
	}
	
	.tag {
		background-color: #ffc162;
		color: #ffffff;
		display: inline-block;
		font-size: 12px;
	}
</style>