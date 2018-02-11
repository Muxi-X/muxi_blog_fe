<template>
    <div class="login">
        登录中...
    </div>
</template>

<script>
import Cookie from '../common/cookie.js'
import Service from '../common/service.js'

export default {
    data() {
        return {
            url: "",
            login: false,
            username: ""
        }
    },
    mounted() {
        this.username = window.location.href.split('?')[1].split('&')[0].split('=')[1]
        Cookie.setCookie('username', this.username)
        Cookie.setCookie('passToken', window.location.href.split('?')[1].split('&')[1].split('=')[1])
        
        let body = {
            username: this.username,
            passToken: btoa("muxistudio@ccnu")
        }
        Service.login(body).then(res => {
            if (res !== null && res !== undefined){
                return res;
            } else {
                Service.register(body).then(value => {
                    Service.login(body)
                })
            }
        }).then(value => {
            Cookie.setCookie("token", value.token)
            Cookie.setCookie("uid", value.uid)
        })
        this.url = Cookie.getCookie("url")
        setTimeout(() => {
            window.location = this.url;
        }, 1000)
    },
}
</script>
