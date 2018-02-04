<template>
    <div class="mobile full_height full_width">
        <mobile-header v-on:click_button="this.show"></mobile-header>
        <div class="full_width cont">
            <tag-box class="box_style"></tag-box>
        </div>
        <transition name="slide-fade">
          <mobile-navi class="moblie_navi" v-show="this.show_navi" v-on:click_mask="this.show"></mobile-navi>
       </transition>
    </div>
</template>
<script>
import header from './header'
import mobileNavi from './mobileNavi'
import tags from '../tags.vue'

export default {
  data() {
    return {
      show_navi: true
    }
  },
  components: {
    "mobile-header": header,
    "mobile-navi": mobileNavi,
    "tag-box": tags
  },
  methods: {
    show() {
      this.show_navi = !this.show_navi
    }
  }
}
</script>
<style lang="scss">
@import '../../scss/mobile.scss';
</style>


