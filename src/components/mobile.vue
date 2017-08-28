<template>
  <div class="mobile full_height">
    <mobileNavi class="moblie_navi"></mobileNavi>
    <con class="cont" 
    :items="this.items" 
    :pages_count="this.pages_count" 
    :blog_num="this.blog_num" 
    v-on:pageUp="PageUp" 
    v-on:pageDown="PageDown">
    </con>
  </div>
</template>
<script>
import mobileNavi from './mobileNavi'
import content from './content'
import FecthSort from '../common/sortMap.js'

export default {
  data() {
    return {
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
    "mobileNavi": mobileNavi,
    "con": content
  },
  mounted() {
    fetch('/api/v2.0/?page=' + this.page_num).then(res => {
      return res.json()
    })
      .then(res => {
        this.items = res.blogs
        this.pages_count = res.pages_count
        this.page_num = res.page
        this.blog_num = res.blog_num
      })
  }
}
</script>
<style lang="scss">
@import '../scss/mobile.scss';
@import '../scss/utility.scss';
.moblie_navi {
  z-index: 3;
  position: absolute;
}
.mobile {
  min-width: 320px;
  min-height: 560px;
}
</style>


