<template>
  <div class="header full_width">
      <svg class="navi_button pos" viewBox="0 0 93 93" v-on:click="showSide">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#naviButton"></use>
      </svg>
      <img src="../assets/blog_logo.png" class="blog_logo">
      <div v-on:click="toLogin">
      <svg viewBox="0 0 2707 768" class="mobile_sign pos">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobileSign"></use>
      </svg>
      </div>
    </div>
</template>
<script>
import Cookie from '../common/cookie.js'
export default {
  data() {
      return{
      }
  },
  methods: {
    showSide() {
        this.$emit('clickButton')
    },
    toLogin() {
			Cookie.setCookie('url', window.location.href)
			window.location = "http://pass.muxixyz.com?landing=blog.muxixyz.com/landing"
			// window.location = "http://120.77.246.73:4000?landing=localhost:3000/landing"
		}
  }
}
</script>

<style lang="scss">
@import '../scss/utility.scss';
.pos {
  height: 20px;
  position: absolute;
  top: 15px;
}

.navi_button {
  left: 15px;
}

.mobile_sign {
  right: 0;
}

.blog_logo {
  width: 120px;
  height: 40px;
  margin-top: 6px;
}

.header {
  background-color: #fff;
  height: 50px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 4;
}

</style>