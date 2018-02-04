<template>
    <div class="mobile full_height">
        <mobile-header v-on:click_button="this.show"></mobile-header>
        <div class="cont full_width">
            <div class="view_blog margin">
                <div class="info full_width">
                    <img class="avatar inline_block full_height" :src="blog.avatar">
                    <div class="inline_block full_height">
                        <div class="title inline_block">{{blog.title}}</div>
                        <div class="author_time">
                            <div class="author inline_block middle_font">{{blog.username}}</div>
                            <div class="time inline_block middle_font">{{new Date(blog.date).toLocaleDateString()}}</div>
                        </div>
                    </div>
                </div>
                <div v-html="compiledMarkdown" class="article"></div>
                <div class="tags_list">
                    <div class="tag inline_block middle_font" v-for="tag in tags" :key="tags.indexOf(tag)">{{tag}}</div>
                </div>
                <div class="comment min_font" v-for="comment in comments" :key="comments.indexOf(comment)">
                    <div>
                        <div class="comment_name inline_block">{{decodeURIComponent(comment.username)}}</div>
                        <div class="comment_date">{{new Date(comment.date).toLocaleDateString()}}</div>
                    </div>
                    <div class="comment_text">{{comment.comment}}</div>
                </div>
                <comment-box class="cBox middle_font full_width" :id="this.id" v-on:comment="fetch_comments" v-on:show_tip="show_tip">
                </comment-box>
            </div>
            <modal v-if="this.tip" class="tip_mask" v-on:cancel="this.cancel"></modal>
        </div>
        <transition name="slide-fade">
            <mobile-navi class="mobile_navi" v-show="this.show_navi" v-on:click_mask="this.show"></mobile-navi>
        </transition>
    </div>
</template>

<script>
    import header from './header'
    import mobileNavi from './mobileNavi'
    import commentBox from '../commentBox'
    import modal from '../modal.vue'
    var _ = require('lodash');
    var marked = require('marked')
    
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
                show_navi: true,
                id: 0,
                tip: false,
                body: ""
            }
        },
        components: {
            "mobile-header": header,
            "mobile-navi": mobileNavi,
            "comment-box": commentBox,
            "modal": modal
        },
        mounted() {
            var api = window.location.pathname;
            this.id = api.split('/')[2];
            fetch('/api/v2.0/' + this.id + '/views/').then(res => {
                    return res.json()
                })
                .then(res => {
                    this.blog = res.blog
                    this.body = res.blog.body
                    this.comments = res.comments
                    this.tags = this.blog.tags
                })
        },
        computed: {
            compiledMarkdown: function() {
                return marked(this.body, {
                    sanitize: true
                })
            }
        },
        methods: {
            show() {
                this.show_navi = !this.show_navi
            },
            fetch_comments() {
                fetch('/api/v2.0/' + this.id + '/views/').then(res => {
                        return res.json()
                    })
                    .then(res => {
                        this.comments = res.comments
                    })
            },
            show_tip() {
                this.tip = true
            },
            cancel() {
                this.tip = false
            }
        }
    }
</script>

<style lang="scss">
    @import '../../scss/mobile.scss';
    @import '../../scss/color.scss';

    .view_blog {
        width: 75%;
        background-color: $white;
        padding: 5%;
    }
    
    .avatar {
        width: 20%;
        margin-right: 5%;
        vertical-align: top;
    }
    
    .info {
        height: 60px;
    }
    
    .title {
        height: 40px;
        font-size: 24px;
        font-weight: bold;
        color: #545866;
    }
    
    .author_time {
        height: 20px;
    }
    
    .author {
        line-height: 20px;
        color: #ffc162;
        margin-right: 10px;
    }
    
    .time {
        color: #898989;
    }
    
    .article {
        margin-top: 35px;
        margin-bottom: 50px;
        overflow: scroll;
    }
    
    .tag {
        color: #ffc162;
        margin-right: 10px;
        line-height: 20px;
    }
    
    .comment {
        padding: 15px 0;
        overflow: scroll;
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
        border: 2px solid #dcdcdc;
        background-color: #ffffff;
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
</style>
