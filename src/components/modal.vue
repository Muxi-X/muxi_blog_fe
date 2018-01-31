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
    import FecthSort from '../common/sortMap.js'
    
    export default {
        data() {
            return {}
        },
        methods: {
            login() {
                Cookie.setCookie('url', window.location.href);
                window.location = "http://pass.muxixyz.com?landing=blog.muxixyz.com/landing"
            },
            cancel() {
                var api = window.location.pathname;
                var find = api.split('/')[1];
                this.kind = FecthSort.SortMap[find];
                if (this.kind != 8) {
                    this.$emit('cancel')
                } else {
                    window.location.href = "/"
                }
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
    
    .tip_cancel {
        background-color: $grey;
    }
    
    .tip_modal {
        width: 200px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid #dcdcdc;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 4px;
        font-size: 18px;
        z-index: 10;
    }
    
    .tip_content {
        margin-bottom: 50px;
    }
    
    .tip_button {
        color: $white;
        width: 40px;
        height: 26px;
        border-radius: 4px;
    }
    
    .tip_button:hover {
        color: $white;
        background-color: $yellow;
    }
    
    .tip_login {
        margin-right: 15px;
        background-color: $orange;
    }
</style>
