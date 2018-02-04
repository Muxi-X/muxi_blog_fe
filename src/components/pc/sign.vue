<template>
    <div class="sign">
        <button class="signup_box full_width full_height">
	        <div v-on:click="login" class="signup full_width full_height">登录 / 注册</div>
	    </button>
	</div>
</template>
<script>
import Cookie from '../../common/cookie.js'
export default {
	methods: {
		login() {
			Cookie.setCookie('url', window.location.href)
			//window.location = "http://pass.muxixyz.com?landing=blog.muxixyz.com/landing"
			window.location = "http://pass.muxixyz.com?landing=localhost:3000/landing"
		}
	}
}
</script>
