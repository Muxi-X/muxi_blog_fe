<template>
    <div>
        <!-- <navi class="navi"></navi> -->
        <!-- <sign class="sign"></sign> -->
        <div class="main">
            <img class="avatar inline_block" :src="blog.avatar">
            <div class="right inline_block">
                <div class="title full-width">{{blog.title}}</div>
                <div class="author inline_block">{{blog.username}}</div>
                <div class="time inline_block">{{blog.date}}</div>
                <div v-html="compiledMarkdown" class="article"></div>
                <div class="second_tag_list full_width">
                    <div class="tag inline_block" v-for="tag in tags" :key="tags.indexOf(tag)">{{tag}}</div>
                </div>
                <div class="comment" v-for="comment in comments" :key="comments.indexOf(comment)">
                    <div>
                        <div class="comment_name inline_block">{{comment.username}}</div>
                        <div class="comment_date">{{comment.date}}</div>
                    </div>
                    <div class="comment_text">{{comment.comment}}</div>
                </div>
                <comment-box class="cBox" :id="this.id" v-on:new_comment="fetch_comments" v-on:show_tip="show_tip">
                </comment-box>
            </div>
        </div>
        <modal v-if="this.login_tip" v-on:cancel="this.cancel">
        </modal>
    </div>
</template>

<script>
    //import navigation from './navigation.vue'
    // import sign from './sign.vue'
    import commentBox from './commentBox.vue'
    import Cookie from '../common/cookie.js'
    import modal from './modal.vue'
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
                id: 0,
                login_tip: false,
                body: ""
            }
        },
        components: {
            // "navi": navigation,
            // "sign": sign,
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
            fetch_comments() {
                fetch('/api/v2.0/' + this.id + '/views/').then(res => {
                        return res.json()
                    })
                    .then(res => {
                        this.comments = res.comments
                    })
            },
            show_tip() {
                this.login_tip = true
            },
            cancel() {
                this.login_tip = false
            }
        }
    }
</script>

<style lang="scss">
    @import '../scss/utility.scss';
    @import '../scss/pc.scss';
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
        height: 60px;
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
    }
    
    .article {
        margin-top: 35px;
        margin-bottom: 50px;
        overflow-x: scroll;
    }
    .second_tag_list {
        margin-bottom: 10px;
    }
    .tag {
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
        width: 516px;
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
</style>
