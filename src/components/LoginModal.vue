<template>
  <Madal>
    <div slot="tip_content">你还没登录噢~</div>
    <div v-on:click="login" slot="tip_confirm">登录</div>
    <div v-on:click="cancel" slot="tip_cancel">取消</div>
  </Madal>
</template>

<script>
import Cookie from "../common/cookie.js";
import FecthSort from "../common/sortMap.js";
import Modal from "./modal.vue";
export default {
  data() {
    return {};
  },
  components: {
    Madal: Modal
  },
  methods: {
    login() {
      Cookie.setCookie("url", window.location.href);
      window.location =
        "http://pass.muxixyz.com?landing=blog.muxixyz.com/landing";
    },
    cancel() {
      var api = window.location.pathname;
      var find = api.split("/")[1];
      this.kind = FecthSort.SortMap[find];
      if (this.kind != 8) {
        this.$emit("cancel");
      } else {
        window.location.href = "/";
      }
    }
  }
};
</script>
