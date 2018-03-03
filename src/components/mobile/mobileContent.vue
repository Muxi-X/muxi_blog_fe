<template>
    <div>
        <div class="mobile_blogs_box margin" v-if="this.blog_num">
            <a :href="/second/+ item.id" v-for="item in items" :key="item.id" class="mobile_content_box full_width">
            <!-- <a :href="/mobileSecond/+ item.id" v-for="item in items" :key="item.id" class="content_box full_width"> -->
                <div class="mobile_content_top">
                    <img class="mobile_avatar_size inline_block full_height" v-bind:src="item.avatar">
                    <div class="mobile_top_right inline_block full_height">
                        <div class="mobile_blog_title">{{item.title}}</div>
                        <div class="full_width">
                            <div class="mobile_blog_username inline_block min_font">{{decodeURIComponent(item.username)}}</div>
                            <div class="mobile_blog_word inline_block min_font">{{new Date(item.date).toLocaleDateString("ja-JP")}}</div>
                            <svg class="mobile_content_icon inline_block" viewBox="0 0 1024 1024">
            					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#commentIcon"></use>
            			    </svg>
                            <div class="comment_num min_font inline_block">{{item.comment_num}}</div>
                            <svg v-if="!item.is_liked" class="mobile_content_icon inline_block" viewBox="0 0 1024 1024">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#likeIcon"></use>
							</svg>
							<svg v-if="item.is_liked" class="mobile_content_icon inline_block" viewBox="0 0 1024 1024">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#red_like"></use>
							</svg>
							<div class="comment_num min_font inline_block">{{item.likes}}</div>
                        </div>
                    </div>
                </div>
                    <div class="mobile_bottom">
                        <div class="mobile_blog_summary min_font">{{item.summary}}</div>
                        <div class="mobile_tag_list full_width">
                            <div v-for="onetag in item.tags" class="mobile_tag inline_block" :key="item.tags.indexOf(onetag)">{{onetag}}</div>
                        </div>
                    </div>
            </a>
        </div>
        <div v-if="!this.blog_num" class="show margin">没有对应的博客</div>
        <div class="mobile_page_row full_width">
            <button class="mobile_page_button mobile_button_size" v-on:click="page_down"> < </button>
            <button class="mobile_right_button mobile_button_size" v-on:click="page_up"> > </button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      page_num: 1
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
