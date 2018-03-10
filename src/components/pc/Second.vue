<template>
    <div>
        <div v-if="!this.loading" class="main">
            <img class="avatar inline_block" :src="blog.avatar">
            <div class="right inline_block">
                <div class="title full_width">{{blog.title}}</div>
                <div class="author inline_block">{{decodeURIComponent(blog.username)}}</div>
                <div class="time inline_block">{{new Date(blog.date).toLocaleDateString("ja-JP")}}</div>
                <div v-if="is_author" class="author inline_block delete_blog" v-on:click="edit_blog">编辑</div>
                <div v-if="is_author" class="author inline_block delete_blog" v-on:click="delete_blog">删除</div>
                <svg v-on:click="this.like" v-if="!this.is_liked" class="second_like content_icon inline_block" viewBox="0 0 1024 1024">
    					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#likeIcon"></use>
    				</svg>
                <svg v-on:click="this.cancel_like" v-if="this.is_liked" class="second_like content_icon inline_block" viewBox="0 0 1024 1024">
    					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#red_like"></use>
    				</svg>
                <div v-highlight v-html="compiledMarkdown" class="article"></div>
                <div class="second_tag_list full_width">
                    <div class="second_tag inline_block" v-for="tag in tags" :key="tags.indexOf(tag)">{{tag}}</div>
                </div>
                <div class="comment" v-for="comment in comments" :key="comments.indexOf(comment)">
                    <div>
                        <div class="comment_name inline_block">{{decodeURIComponent(comment.username)}}</div>
                        <div class="comment_date">{{new Date(comment.date).toLocaleDateString("ja-JP")}}</div>
                    </div>
                    <div class="comment_text">{{comment.comment}}</div>
                </div>
                <comment-box class="cBox" :id="this.id" v-on:new_comment="fetch_comments" v-on:show_tip="show_tip">
                </comment-box>
            </div>
        </div>
        <modal v-if="this.login_tip" v-on:cancel="this.cancel">
        </modal>
        <loading v-if="this.loading" class="loading main">Loading...</loading>
    </div>
</template>

<script>
import commentBox from "../commentBox.vue";
import Cookie from "../../common/cookie.js";
import modal from "../modal.vue";
import Service from "../../common/service.js";
import Loading from "../loading.vue";

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
      id: 0,
      login_tip: false,
      body: "",
      token: "",
      is_author: false,
      loading: true,
      is_liked: false
    };
  },
  components: {
    "comment-box": commentBox,
    modal: modal,
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
    fetch_comments() {
      Service.view(this.id).then(res => {
        this.comments = res.comments;
      });
    },
    show_tip() {
      this.login_tip = true;
    },
    cancel() {
      this.login_tip = false;
    },
    delete_blog() {
      Service.delete_blog(this.id, this.token).then(res => {
        if (res == "401") {
          this.login_tip = true;
        } else {
          window.location = "/";
        }
      });
    },
    edit_blog() {
      window.location.pathname = "/edit/" + this.id;
    },
    like() {
      var body = {
        blog_id: this.id
      };
      if (this.token) {
        Service.like(this.token, body).then(res => {
          if (res == "401") {
            this.login_tip = true;
          } else {
            this.is_liked = true;
          }
        });
      } else {
        this.login_tip = true;
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
.avatar {
  width: 60px;
  height: 60px;
  margin-left: 40px;
  margin-right: 20px;
  vertical-align: top;
}

.right {
  width: 605px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #545866;
}

.author {
  font-size: 14px;
  color: #ffc162;
  margin-right: 20px;
}

.time {
  font-size: 14px;
  color: #898989;
  margin-right: 10px;
}

.article {
  margin-top: 35px;
  margin-bottom: 50px;
  overflow-x: scroll;
  img {
    width: 100%;
  }
}

.second_tag_list {
  margin-bottom: 10px;
}

.second_tag {
  color: #ffc162;
  font-size: 14px;
  margin-right: 10px;
}

.comment {
  margin-top: 35px;
  padding: 15px 0;
  font-size: 12px;
  border-top: 2px solid #e6e6e6;
}

.comment_name {
  color: #f29a76;
}

.comment_date {
  margin-right: 0;
  float: right;
}

.comment_text {
  margin-top: 10px;
}

.cBox {
  padding-top: 50px;
  border-top: 2px solid #e6e6e6;
}

.edit_comment {
  height: 75px;
  width: 380px;
  border: 2px solid #e6e6e6;
  font-size: 14px;
}

.submit_comment {
  background-color: #ffc162;
  color: #fff;
  width: 50px;
  height: 30px;
  border-radius: 4px;
}

.loading {
  text-align: center;
  background: transparent;
}

.second_like {
  vertical-align: bottom;
}
</style>
