<template>
  <div class="mobile full_height">
    <mobileHeader v-on:clickButton="this.show"></mobileHeader>
    <list class="cont full_width" 
    :items="this.items" 
    :pages_count="this.pages_count" 
    :blog_num="this.blog_num" 
    v-on:pageUp="PageUp" 
    v-on:pageDown="PageDown">
    </list>
    <transition name="slide-fade">
      <mobileNavi class="moblie_navi" v-show="this.showNavi" v-on:clickMask="this.show"></mobileNavi>
    </transition>
  </div>
</template>
<script>
import header from './header'
import mobileNavi from './mobileNavi'
import mobileContent from './mobileContent'
import FecthSort from '../common/sortMap.js'

export default {
  data() {
    return {
      showNavi: true,
      items: [],
      page_num: 1,
      kind: 0,
      tag: "",
      year: 0,
      month: 0,
      Url: ""
    }
  },
  components: {
    "mobileHeader": header,
    "mobileNavi": mobileNavi,
    "list": mobileContent
  },
  mounted() {
    console.log("this is mobile")
    fetch('/api/v2.0/?page=' + this.page_num).then(res => {
      return res.json()
    })
      .then(res => {
        this.items = res.blogs
        this.pages_count = res.pages_count
        this.page_num = res.page
        this.blog_num = res.blog_num
      })
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


