<template>
    <div class="sign">
        <button class="signup_box full_width full_height">
	        <div v-if="!is_login" v-on:click="login" class="signup full_width full_height">登录 / 注册</div>
          <div v-if="is_login" class="signup full_width full_height login_name" @click="toProfile">{{decodeURIComponent(username)}}</div>
	    </button>
	</div>
</template>
<script>
import Cookie from "../../common/cookie.js";
export default {
  data() {
    return {
      is_login: false,
      username: "",
      id: 1,
      passToken: ""
    };
  },
  mounted() {
    if (Cookie.getCookie("username")) {
      this.is_login = true;
      this.username = Cookie.getCookie("username");
      this.id = Cookie.getCookie("passID");
      this.passToken = Cookie.getCookie("passToken");
    }
  },
  methods: {
    login() {
      Cookie.setCookie("url", window.location.href);
      window.location =
        "http://pass.muxixyz.com?landing=blog.muxixyz.com/landing";
        // "http://pass.muxixyz.com?landing=localhost:3000/landing";
    },
    toProfile() {
      window.location =
        "http://pass.muxixyz.com/profile?id=" +
        this.id +
        "&token=" +
        this.passToken;
    }
  }
};
</script>
