<template>
    <div>
        <textarea v-model.trim="message" class="edit_comment" placeholder="你的看法是？"></textarea>
        <div class="button_box full_width">
            <button v-on:click="submit_comment" class="submit_comment">评论</button>
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
        submit_comment(e) {
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
                        this.$emit('new_comment')
                    })
                }
            } else {
                this.$emit('show_tip')
            }
        }
    }
}
</script>

<style lang='scss'>
@import '../scss/pc.scss';
@import '../scss/utility.scss';
</style>