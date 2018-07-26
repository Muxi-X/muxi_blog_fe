<template>
    <div class="mobile full_height">
        <mobile-header v-on:click_button="this.show"></mobile-header>
        <div v-if="!this.loading" class="cont full_width">
            <div class="view_blog margin">
                <div class="info full_width">
                    <img class="avatar inline_block full_height" :src="blog.avatar">
                    <div class="info inline_block full_height">
                        <div class="author time middle_font">{{decodeURIComponent(blog.username)}}</div>
                        <div class="time_like">
                            <div class="full_height inline_block time middle_font inline_block">{{new Date(blog.date).toLocaleDateString()}}</div>
                            <svg v-on:click="this.like" v-if="!this.is_liked" class="second_like content_icon inline_block vertical_align" viewBox="0 0 1024 1024">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#likeIcon"></use>
                            </svg>
                            <svg v-on:click="this.cancel_like" v-if="this.is_liked" class="second_like content_icon inline_block vertical_align" viewBox="0 0 1024 1024">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#red_like"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="title">{{blog.title}}</div>
                <div v-highlight v-html="compiledMarkdown" class="article"></div>
                <div class="tags_list">
                    <div class="mobile_second_tag inline_block middle_font" v-for="tag in tags" :key="tags.indexOf(tag)">{{tag}}</div>
                </div>
                <div class="comment min_font" v-for="comment in comments" :key="comments.indexOf(comment)">
                    <div>
                        <div class="comment_name inline_block">{{decodeURIComponent(comment.username)}}</div>
                        <div class="comment_date">{{new Date(comment.date).toLocaleDateString()}}</div>
                    </div>
                    <div class="comment_text">{{comment.comment}}</div>
                </div>
                <comment-box class="cBox middle_font full_width" :id="this.id" v-on:new_comment="fetch_comments" v-on:show_tip="show_tip">
                </comment-box>
            </div>
            <login-modal v-if="this.tip" class="tip_mask" v-on:cancel="this.cancel"></login-modal>
        </div>
        <transition name="slide-fade">
            <mobile-navi class="mobile_navi" v-show="this.show_navi" v-on:click_mask="this.show"></mobile-navi>
        </transition>
        <loading v-if="this.loading" class="mobile_loading">Loading...</loading>
    </div>
</template>

<script>
import header from "./header";
import mobileNavi from "./mobileNavi";
import commentBox from "../commentBox";
import LoginModal from "../LoginModal.vue";
import Service from "../../common/service.js";
import Loading from "../loading.vue";
import Cookie from "../../common/cookie.js";

var _ = require("lodash");
var marked = require("marked");

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

export default {
  data() {
    return {
      tags: [],
      comments: [],
      blog: {
        type: Object
      },
      show_navi: false,
      id: 0,
      tip: false,
      body: "",
      loading: true,
      is_liked: false,
      token: "",
      username: ""
    };
  },
  components: {
    "mobile-header": header,
    "mobile-navi": mobileNavi,
    "comment-box": commentBox,
    "login-modal": LoginModal,
    loading: Loading
  },
  mounted() {
    this.token = Cookie.getCookie("token");
    this.username = Cookie.getCookie("username");

    var api = window.location.pathname;
    this.id = api.split("/")[2];
    Service.view(this.id).then(res => {
      this.blog = res.blog;
      this.body = res.blog.body;
      this.comments = res.comments;
      this.tags = this.blog.tags;

      if (this.username == res.blog.username) {
        this.is_author = true;
      }

      this.loading = false;

      if (this.token) {
        if (this.blog.likes_users.indexOf(this.username) !== -1)
          this.is_liked = true;
      }
    });
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.body, {
        sanitize: true
      });
    }
  },
  methods: {
    show() {
      this.show_navi = !this.show_navi;
    },
    fetch_comments() {
      Service.view(this.id).then(res => {
        this.comments = res.comments;
      });
    },
    show_tip() {
      this.tip = true;
    },
    cancel() {
      this.tip = false;
    },
    like() {
      var body = {
        blog_id: this.id
      };
      if (this.token) {
        Service.like(this.token, body).then(res => {
          if (res == "401") {
            this.tip = true;
          } else {
            this.is_liked = true;
          }
        });
      } else {
        this.tip = true;
      }
    },
    cancel_like() {
      var body = {
        blog_id: this.id
      };
      Service.cancel_like(this.token, body).then(res => {
        this.is_liked = false;
      });
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/color.scss";
.view_blog {
  width: 75%;
  background-color: $white;
  padding: 5%;
}

.avatar {
  width: 50px;
  height: 50px;
  vertical-align: top;
}

.info {
  height: 50px;
  margin-left: 10px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  margin-top: 10px;
}

.author,
.mobile_second_tag,
.comment_name {
  color: $orange;
}

.time {
  line-height: 25px;
  margin-right: 5px;
}

.time_like {
  height: 25px;
}

.article {
  margin-bottom: 20px;
  overflow: scroll;
  img {
    width: 100%;
  }
  a {
    color: $yellow;
  }
}

.mobile_second_tag {
  margin-right: 10px;
  line-height: 20px;
}

.comment {
  padding: 15px 0;
  overflow: scroll;
  border-top: 2px solid #e6e6e6;
}

.comment_date {
  margin-right: 0;
  float: right;
}

.comment_text {
  width: 80%;
  margin-top: 10px;
}

.cBox {
  padding-top: 50px;
  border-top: 2px solid #e6e6e6;
}

.tags_list {
  height: 20px;
  margin-bottom: 10px;
}

.tip_modal {
  width: 40%;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid $grey;
  background-color: $white;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
}

.tip_content {
  margin-bottom: 15px;
}

.tip_button {
  width: 40px;
  height: 20px;
  border-radius: 2px;
}

.tip_login {
  margin-right: 10px;
}

.mobile_loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
}

.edit_comment {
  border: 1px solid $grey;
  height: 60px;
  width: 90%;
  padding: 5px;
}

.submit_comment {
  background-color: $yellow;
  color: #fff;
  width: 40px;
  height: 25px;
  border-radius: 2px;
}
</style>
