<template>
    <div>
        <button class="signup_box full_width full_height">
	        <div v-on:click="toLogin" class="signup full_width full_height">登录 / 注册</div>
	    </button>
	</div>
</template>
<script>
import Cookie from '../common/cookie.js'
export default {
	methods: {
		toLogin() {
			Cookie.setCookie('url', window.location.href)
			window.location = "http://pass.muxixyz.com?landing=blog.muxixyz.com/landing"
		}
	}
}
</script>

<style lang='scss'>
@import '../scss/utility.scss';
@import '../scss/color.scss';
.signup {
	line-height: 25px;
}
.signup_box:hover {
	background-color: $yellow;
	cursor: pointer;
	.signup { 
		color: $white;
	}
}
</style>