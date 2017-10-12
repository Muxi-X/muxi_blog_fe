<template>
    <div class="login">
        登录中...
    </div>
</template>

<script>
import Cookie from '../common/cookie.js'

export default {
    data() {
        return {
            url: "",
            login: false
        }
    },
    mounted() {
        var username = window.location.href.split('?')[1].split('&')[0].split('=')[1]
        Cookie.setCookie('Mt', window.location.href.split('?')[1].split('&')[1].split('=')[1])
        toLogin();
        if (this.login == false) {
            fetch("/api/register/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.username,
                    password: "muxistudio@ccnu"
                })
            }).then(res => {
                if (res.ok) {
                    toLogin();
                }
            })
        }

    },
    methods: {
        toLogin() {
            fetch("/api/v2.0/login/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: btoa("muxistudio@ccnu")
                })
            }).then(res => {
                if (res.ok) {
                    this.login = true
                    return res.json()
                }
            }).then(value => {
                Cookie.setCookie("token", value.token)
                Cookie.setCookie("uid", value.uid)
            })
            if (this.login) {
                this.url = Cookie.getCookie("url")
                setTimeout(() => {
                    window.location = this.url;
                }, 1000)
            }
        }
    }
}
</script>
