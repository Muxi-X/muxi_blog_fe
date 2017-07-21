<template>
<div>
	<div :class="$style.content_box" v-for="item in blogs">
	    <div :class="$style.left_box">
	        <div :class="$style.top">
	            <img :class="$style.avatar_size" v-bind:src="item.avatar">
	            <div>
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
	                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#red_like"></use>
	                </svg>
	                <div :class="$blog_word">{{item.like_num}}</div>
	                <svg :class="$style.content_icon" viewBox="0 0 1024 1024">
	                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#comment"></use>
	                </svg>
	                <div :class="$blog_word">{{item.comment_num}}</div>
	            </div>
	            <div :class="$style.bottom_right">
	                <div :class="$style.blog_summary">{{item.summary}}</div>
	            </div>
	        </div>
	    </div>
	    <img :class="$style.right_box" v-bind:src="item.blog_img">
	</div>
	<!-- <div :class="$style.page_row">
	    <button :class="$style.page_button"> < </button>
	    <button :class="$style.page_button"> > </button>
	</div> -->
</div>
</template>
<script>
export default {
    data() {
            return {
                blogs:[]
            }
        },
        mounted() {
            fetch('/blogs/').then(res => {
                    return res.json()
                })
                .then(res => {
                    this.blogs = res.blogs
                })
        }
}
</script>
<style lang='scss' module>
.content_box{
	width: 100%;
	height: 210px;
}
.avatar_size {
	width: 40px;
	height: 40px;
}
.content_icon {
	width: 20px;
	height: 20px;
}
</style>