<template>
    <div>
        <textarea v-model.trim="message" class="editComment" placeholder="你的看法是？"></textarea>
        <div class="buttonBox full_width">
            <button v-on:click="submitComment" class="submitComment">评论</button>
        </div>
    </div>
</template>

<script>
import Cookie from '../common/cookie.js'
export default {
    data() {
        return {
            message: ""
        }
    },
    props: ['id'],
    methods: {
        submitComment(e) {
            e.stopPropagation();
            if (Cookie.getCookie("token")) {
                if (this.message) {
                    fetch('/api/v2.0/' + this.id + '/add_comment/', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'token': Cookie.getCookie("token")
                        },
                        body: JSON.stringify({
                            id: this.id,
                            comment: this.message
                        })
                    }).then(res => {
                        this.message = ""
                        this.$emit('newComment')
                    })
                }
            } else {
                this.$emit('showTip')
            }
        }
    }
}
</script>

<style lang='scss'>
@import '../scss/pc.scss';
@import '../scss/utility.scss';
</style>