<template>
  <div>
    <div class="nav">
      <div class="navi_col full_height">
        <a href="/" class="link full_width">
          <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#homeIcon"></use>
          </svg>
          <span class="class_word vertical_align inline_block">Home</span>
        </a>
        <a href="/web" class="link full_width">
          <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#webIcon"></use>
          </svg>
          <span class="class_word vertical_align inline_block">Web</span>
        </a>
        <a href="/design" class="link full_width">
          <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#designIcon"></use>
          </svg>
          <span class="class_word vertical_align inline_block">Design</span>
        </a>
        <a href="/android" class="link full_width">
          <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#androidIcon"></use>
          </svg>
          <span class="class_word vertical_align inline_block">Android</span>
        </a>
        <a href="/product" class="link full_width">
          <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productIcon"></use>
          </svg>
          <span class="class_word vertical_align inline_block">Product</span>
        </a>
        <a href="/viewTags" class="link full_width">
          <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tagIcon"></use>
          </svg>
          <span class="class_word vertical_align inline_block">Tags</span>
        </a>
        <a href="/viewArchive" class="link full_width">
          <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#archiveIcon"></use>
          </svg>
          <span class="class_word vertical_align inline_block">Archive</span>
        </a>
        <a href="http://muxistudio.com" class="link full_width">
          <svg class="icon vertical_align inline_block" viewBox="0 0 1024 1024">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#about"></use>
          </svg>
          <span class="class_word vertical_align inline_block">About</span>
        </a>
      </div>
      <div class="mask full_height" v-on:click="click_mask"></div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      
    }
  },
  methods: {
    click_mask() {
      this.$emit('click_mask')
    }
  }
}
</script>

<style lang="scss">
// @import '../scss/utility.scss';
// @import '../scss/mobile.scss';
@import "../scss/color.scss";
.navi_col {
  width: 40%;
  background-color: $white;
  z-index: 5;
  display: inline-block;
  position: fixed;
  top: 0px;
  padding-top: 50px;
}

.nav {
  position: fixed;
  top: 0px;
  bottom: 0;
  width: 100%;
}

.mask {
  background-color: rgba(51, 51, 51, 0.3);
  width: 60%; 
  vertical-align: middle;
  top: 0px;
  left: 40%;
  bottom: 0;
  position: fixed;
}

.link {
  display: block;
  height: 50px;
  font-size: 14px
}

.icon {
  margin-left: 10%;
  width: 30px;
  margin-right: 5%;
}

.class_word {
  line-height: 50px;
}

.link:hover {
  background-color: $white;
  box-shadow: 0 0 10px 1px $green;
}
</style>
