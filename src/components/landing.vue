<template>
    <div class="login">
        登录中...
    </div>
</template>

<script>
import Cookie from "../common/cookie.js";
import Service from "../common/service.js";

export default {
  data() {
    return {
      url: "",
      login: false,
      username: "",
      passID: 1,
      passToken: ""
    };
  },
  mounted() {
    this.username = window.location.href
      .split("?")[1]
      .split("&")[0]
      .split("=")[1];
    // this.passID = window.location.href.split('?')[1].split('&')[1].split('=')[2]
    this.passToken = window.location.href
      .split("?")[1]
      .split("&")[1]
      .split("=")[1];

    Cookie.setCookie("username", this.username, 365);
    // Cookie.setCookie("passID", this.passID, 365)
    Cookie.setCookie("passToken", this.passToken, 365);

    let body = {
      username: this.username,
      password: btoa("muxistudio@ccnu")
    };
    Service.login(body)
      .then(res => {
        if (res == 401) {
          Service.register(body).then(value => {
            console.log("register");
            Service.login(body);
          });
        } else {
          return res;
        }
      })
      .then(value => {
        Cookie.setCookie("token", value.token);
        Cookie.setCookie("uid", value.uid);
      });
    this.url = Cookie.getCookie("url");
    setTimeout(() => {
      window.location = this.url;
    }, 1000);
  }
};
</script>
