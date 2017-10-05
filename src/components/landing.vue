<template>
    <div :class="$style.go">
        登录中......
    </div>
</template>
<script>
import 'whatwg-fetch'
import Cookie from '../common/cookie.js'
import {
    bus
} from '../bus.js'

export default {
    data() {
        return {
            url: ""
        }
    },
    mounted() {
        var email = window.location.href.split('?')[1].split('&')[0].split('=')[1]
        Cookie.setCookie('Mt', window.location.href.split('?')[1].split('&')[1].split('=')[1])
        fetch("/login/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: btoa("muxistudio@ccnu")
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(value => {
            Cookie.setCookie("token", value.token)
            Cookie.setCookie("uid", value.uid)
        })
        this.url = Cookie.getCookie("url")
        setTimeout(() => {
            window.location = this.url;
        }, 1000)
    }
}
</script>
<style lang='scss'>

</style>
