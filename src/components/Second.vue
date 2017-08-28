<template>
    <div>
        <navi class="navi"></navi>
        <sign class="sign"></sign>
        <div class="main">
            <img class="avatar inline_block" :src="blog.avatar">
            <div class="right inline_block">
                <div class="title full-width">{{blog.title}}</div>
                <div class="author inline_block">{{blog.username}}</div>
                <div class="time inline_block">{{blog.date}}</div>
                <div class="article">{{blog.body}}</div>
                <div class="tag inline_block" v-for="tag in tags">{{tag}}</div>
                <div class="comment" v-for="comment in comments">
                    <div>
                        <div class="comment_name inline_block">{{comment.username}}</div>
                        <div class="comment_date">{{comment.date}}</div>
                    </div>
                    <div class="comment_text">{{comment.comment}}</div>
                </div>
                <commentBox class="cBox" 
                            :id="this.id" 
                            v-on:newComment="fetchComments">
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

</style>
