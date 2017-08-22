<template>
    <div>
        <navi :class="$style.navi"></navi>
        <sign :class="$style.sign"></sign>
        <div :class="$style.main">
            <img :class="$style.avatar" src="blog.avatar">
            <div :class="$style.right">
                <div :class="$style.title">{{blog.title}}</div>
                <div :class="$style.author">{{blog.username}}</div>
                <div :class="$style.time">{{blog.date}}</div>
                <div :class="$style.article">{{blog.body}}</div>
                <div :class="$style.tag" v-for="tag in tags" :key="tag">{{tag}}</div>
                <div :class="$style.comment" v-for="comment in comments" :key="comment">
                    <div>
                        <div :class="$style.comment_name">{{comment.username}}</div>
                        <div :class="$style.comment_date">{{comment.date}}</div>
                    </div>
                    <div :class="$style.comment_text">{{comment.comment}}</div>
                </div>
                <commentBox :class="$style.cBox" v-on:submit="submit" :id="this.id">
                </commentBox>
            </div>
        </div>
    </div>
</template>

<script>
import navigation from './navigation.vue'
import sign from './sign.vue'
import commentBox from './commentBox.vue'
export default {
    data() {
        return {
            tags: [],
            comments: [],
            blog: {
                type: Object
            },
            id: 0,
            comments: []
        }
    },
    components: {
        "navi": navigation,
        "sign": sign,
        "commentBox": commentBox
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
        fetchComments() {
            fetch('/api/v2.0/' + this.id + '/views/').then(res => {
                return res.json()
            })
                .then(res => {
                    this.comments = res.comments
                })
        }
    }
}
</script>

<style lang="scss" module>
@import '../scss/common.scss';
.avatar {
    composes: inline-block from "sass-loader!../scss/utility.scss";
    width: 60px;
    height: 60px;
    margin-left: 40px;
    margin-right: 20px;
    vertical-align: top;
}

.right {
    composes: inline-block from "sass-loader!../scss/utility.scss";
    width: 605px;
}

.title {
    height: 60px;
    font-size: 24px;
    font-weight: bold;
    color: #545866;
    composes: full-width from "sass-loader!../scss/utility.scss";
}

.author {
    font-size: 14px;
    color: #ffc162;
    composes: inline-block from "sass-loader!../scss/utility.scss";
    margin-right: 20px;
}

.time {
    font-size: 14px;
    color: #898989;
    composes: inline-block from "sass-loader!../scss/utility.scss";
}

.article {
    margin-top: 35px;
    margin-bottom: 50px;
}

.tag {
    color: #ffc162;
    font-size: 14px;
    composes: inline-block from "sass-loader!../scss/utility.scss";
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
    composes: inline-block from "sass-loader!../scss/utility.scss";
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

.editComment {
    height: 75px;
    width: 380px;
    border: 2px solid #e6e6e6;
    font-size: 14px;

}

.submitComment {
    background-color: #ffc162;
    color: #fff;
    width: 50px;
    height: 30px;
    border-radius: 4px;
}

.buttonBox {
    composes: full-width from "sass-loader!../scss/utility.scss";
    margin-top: 15px;
    font-size: 14px;
}
</style>
