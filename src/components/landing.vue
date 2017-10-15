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
            login: false,
            username: ""
        }
    },
    mounted() {
        this.username = window.location.href.split('?')[1].split('&')[0].split('=')[1]
        Cookie.setCookie('Mt', window.location.href.split('?')[1].split('&')[1].split('=')[1])
        fetch("/api/v2.0/login/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.username,
                password: btoa("muxistudio@ccnu")
            })
        }).then(res => {
            if (res.ok) {
                console.log("first login")
                return res.json()
            } else {
                fetch("/api/v2.0/signup/", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.username,
                        password: "muxistudio@ccnu"
                    })
                }).then(value => {
                    console.log("finish blog register")
                    fetch("/api/v2.0/login/", {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: this.username,
                            password: btoa("muxistudio@ccnu")
                        })
                    })
                })
            }
        }).then(value => {
            Cookie.setCookie("token", value.token)
            Cookie.setCookie("uid", value.uid)
            console.log("success")
        })
        this.url = Cookie.getCookie("url")
        setTimeout(() => {
            window.location = this.url;
        }, 1000)
    },
}
</script>
