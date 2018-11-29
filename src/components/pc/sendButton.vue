<template>
  <div>
        <a href="/send" class="logo_box margin" v-if="this.visible">
            <svg class="send" viewBox="0 0 1024 1024">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sendIcon"></use>
            </svg>
        </a>
  </div>
</template>
<script>
import Cookie from "../../common/cookie.js";
export default {
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    if (Cookie.getCookie("blogToken")) {
      this.visible = true;
    }
  }
};
</script>
