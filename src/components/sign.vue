<template>
    <div class="sign">
        <button class="signup_box full_width full_height">
	        <div v-on:click="login" class="signup full_width full_height">登录 / 注册</div>
	    </button>
	</div>
</template>
<script>
import Cookie from '../common/cookie.js'
export default {
	methods: {
		login() {
			Cookie.setCookie('url', window.location.href)
			window.location = "http://pass.muxixyz.com?landing=blog.muxixyz.com/landing"
			// window.location = "http://120.77.246.73:4000?landing=localhost:3000/landing"
		}
	}
}
</script>

<style lang='scss'>
// @import '../scss/utility.scss';
@import '../scss/color.scss';
// .sign {
//     height: 30px;
//     width: 100px;
//     color: #959595;
//     background: $grey;
//     margin: 0px -2px;
//     font-size: 14px;
//     position: fixed;
//     right: 0px;
//     top: 0px;
// }
// .signup {
// 	line-height: 25px;
// }
// .signup_box:hover {
// 	background-color: $yellow;
// 	cursor: pointer;
// 	.signup { 
// 		color: $white;
// 	}
// }
</style>