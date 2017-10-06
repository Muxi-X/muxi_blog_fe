<template>
  <div class="mobile full_height full_width">
    <mobileHeader v-on:clickButton="this.show"></mobileHeader>
    <div class="full_width cont">
      <tagBox class="box_style"></tagBox>
    </div>
    <transition name="slide-fade">
      <mobileNavi class="moblie_navi" v-show="this.showNavi" v-on:clickMask="this.show"></mobileNavi>
    </transition>
  </div>
</template>
<script>
import header from './header'
import mobileNavi from './mobileNavi'
import tags from './tags.vue'

export default {
  data() {
    return {
      showNavi: true
    }
  },
  components: {
    "mobileHeader": header,
    "mobileNavi": mobileNavi,
    "tagBox": tags
  },
  methods: {
    show() {
      this.showNavi = !this.showNavi
    }
  }
}
</script>
<style lang="scss">
@import '../scss/mobile.scss';
@import '../scss/utility.scss';

</style>


