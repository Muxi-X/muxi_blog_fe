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
import Service from '../common/service.js'
export default {
    data() {
        return {
            message: "",
            token: ""
        }
    },
    props: ['id'],
    methods: {
        submit_comment(e) {
            e.stopPropagation();
            this.token = Cookie.getCookie("token")
            if (this.token) {
                if (this.message) {
                    var body = {
                        id: this.id,
                        comment: this.message
                    }
                    Service.add_comment(this.id, this.token, body).then(res => {
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