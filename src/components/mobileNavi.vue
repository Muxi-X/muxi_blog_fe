<template>
  <div class="full_width full_height">
    <div class="header full_width">
      <svg class="navi_button" viewBox="0 0 93 93" v-on:click="showNavi = !showNavi">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#naviButton"></use>
      </svg>
       <img src="../assets/blog_logo.png" class="blog_logo">
      <svg viewBox="0 0 2707 768" class="mobile_sign">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobileSign"></use>
      </svg>
    </div>
    <transition name="slide-fade">
      <div class="full_width full_height bottom" v-if="showNavi">
        <div class="navi_col full_height">
          <a href="/" class="link_box_first link">
            <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#homeIcon"></use>
            </svg>
            <span class="class_word vertical_align inline_block">Home</span>
          </a>
          <a href="/web" class="link_box link">
            <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#webIcon"></use>
            </svg>
            <span class="class_word vertical_align inline_block">Web</span>
          </a>
          <a href="/design" class="link_box link">
            <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#designIcon"></use>
            </svg>
            <span class="class_word vertical_align inline_block">Design</span>
          </a>
          <a href="/android" class="link_box link">
            <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#androidIcon"></use>
            </svg>
            <span class="class_word vertical_align inline_block">Android</span>
          </a>
          <a href="/product" class="link_box link">
            <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productIcon"></use>
            </svg>
            <span class="class_word vertical_align inline_block">Product</span>
          </a>
          <a href="/view_tags" class="link_box link">
            <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tagIcon"></use>
            </svg>
            <span class="class_word vertical_align inline_block">Tags</span>
          </a>
          <a href="/view_archive" class="link_box link">
            <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#archiveIcon"></use>
            </svg>
            <span class="class_word vertical_align inline_block">Archive</span>
          </a>
          <a href="http://muxistudio.com" class="link_box link">
            <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#about"></use>
            </svg>
            <span class="class_word vertical_align inline_block">About</span>
          </a>
        </div>
        
      </div>
    </transition>
    <div v-if="showNavi" class="mask inline_block" v-on:click="hideNavi"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showNavi: true,
    }
  },
  methods: {
    hideNavi() {
      this.showNavi = false
    }
  }

}
</script>

<style lang="scss">
@import '../scss/utility.scss';

.navi_button {
      height: 20px;
    /* width: 60px; */
    position: absolute;
    top: 15px;
    left: 15px;
}
.mobile_sign {
  height: 20px;
  position: absolute;
  top: 15px;
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
  z-index: 3;
  overflow: hidden;
}

.bottom {
  margin-top: 50px;
}

.navi_col {
  width: 40%;
  background-color: #fff;
  z-index: 4;
}
.link {
  width: 100%;
  display: block;
  height: 50px;
  font-size: 14px
}
.link_box,
.link_box_first {
  border-bottom: 2px #d9dcdc solid;
}

.link_box_first {
  border-top: 2px #d9dcdc solid;
}

.icon {
  margin-left: 10%;
  width: 30px;
  margin-right: 5%;
}

.class_word {
  line-height: 50px;
}

.link_box_first:hover,
.link_box:hover {
  background: #69cad3;
  color: #fff;
}

.mask {
  background-color: rgba(51, 51, 51, 0.3);
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}

.slide-fade-leave-active {
  transition: all .5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
