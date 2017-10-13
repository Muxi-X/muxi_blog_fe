<template>
    <div class="mobile full_height">
        <mobileHeader v-on:clickButton="this.show"></mobileHeader>
        <div class="cont full_width">
            <div class="view_blog margin">
                <div class="info full_width">
                    <img class="avatar inline_block full_height" :src="blog.avatar">
                    <div class="inline_block full_height">
                        <div class="title inline_block">{{blog.title}}</div>
                        <div class="author_time">
                            <div class="author inline_block middle_font">{{blog.username}}</div>
                            <div class="time inline_block middle_font">{{new Date(blog.date).toLocaleDateString("ja-JP")}}</div>
                        </div>
                    </div>
                </div>

                <div class="article">{{blog.body}}</div>
                <div class="tags_list">
                    <div class="tag inline_block middle_font" v-for="tag in tags" :key="tags.indexOf(tag)">{{tag}}</div>
                </div>
                <div class="comment min_font" v-for="comment in comments" :key="comments.indexOf(comment)">
                    <div>
                        <div class="comment_name inline_block">{{comment.username}}</div>
                        <div class="comment_date">{{new Date(comment.date).toLocaleDateString("ja-JP")}}</div>
                    </div>
                    <div class="comment_text">{{comment.comment}}</div>
                </div>
                <commentBox class="cBox middle_font full_width" :id="this.id" v-on:newComment="fetchComments" v-on:showTip="showTip">
                </commentBox>
            </div>
            <modal v-if="this.tip" class="tip_mask" v-on:toCancel="this.toCancel"></modal>
        </div>
        <transition name="slide-fade">
            <mobileNavi class="mobile_navi" v-show="this.showNavi" v-on:clickMask="this.show"></mobileNavi>
        </transition>
    </div>
</template>

<script>
import header from './header'
import mobileNavi from './mobileNavi'
import commentBox from './commentBox'
import modal from './modal.vue'

export default {
    data() {
        return {
            tags: [],
            comments: [],
            blog: {
                type: Object
            },
            showNavi: true,
            id: 0,
            tip: false
        }
    },
    components: {
        "mobileHeader": header,
        "mobileNavi": mobileNavi,
        "commentBox": commentBox,
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
                this.comments = res.comments
                this.tags = this.blog.tags
            })
    },
    methods: {
        show() {
            this.showNavi = !this.showNavi
        },
        fetchComments() {
            fetch('/api/v2.0/' + this.id + '/views/').then(res => {
                return res.json()
            })
                .then(res => {
                    this.comments = res.comments
                })
        },
        showTip() {
            this.tip = true
        },
        toCancel() {
            this.tip = false
        }
    }
}
</script>

<style lang="scss">
@import '../scss/mobile.scss';
@import '../scss/utility.scss';
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
