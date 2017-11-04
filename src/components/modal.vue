<template>
    <div class="tip_mask">
        <div class="tip_modal">
            <div class="tip_content">你还没登录噢~</div>
            <div class="tip_footer">
                <button v-on:click="login" class="tip_login tip_button">登录</button>
                <button v-on:click="cancel" class="tip_button tip_cancel">取消</button>
            </div>
        </div>
    </div>
</template>
<script>
import Cookie from '../common/cookie.js'
export default {
    data() {
        return {}
    },
    methods: {
        login() {
            Cookie.setCookie('url', window.location.href);
            window.location = "https://pass.muxixyz.com?landing=blog.muxixyz.com/landing"
            // window.location = "http://120.77.246.73:4000?landing=localhost:3000/landing"
        },
        cancel() {
            this.$emit('cancel')
        }
    }
}
</script>
<style lang="scss">
@import "../scss/color.scss";
.tip_mask {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 3;
    background-color: rgba(51, 51, 51, 0.85);
}
.tip_footer {
    float: right;
}

.tip_button:hover {
    color: $white;
}

.tip_login:hover {
    background-color: $orange;
}

.tip_cancel:hover {
    background-color: $yellow;
}
</style>
