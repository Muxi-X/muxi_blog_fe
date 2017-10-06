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
      <mobileNavi class="mobile_navi" v-show="this.showNavi" v-on:clickMask="this.show"></mobileNavi>
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
    fetch('/api/v2.0/?page=' + this.page_num).then(res => {
      return res.json()
    })
      .then(res => {
        this.items = res.blogs
        this.pages_count = res.pages_count
        this.page_num = res.page
        this.blog_num = res.blog_num
      })
    // var api = window.location.pathname
    // var find = api.split('/')[1]
    // this.kind = FecthSort.SortMap[find];

    // if (this.kind == 0) {
    //   this.Url = "";
    // } else if (this.kind == 5) {
    //   this.tag = api.split('/')[2];
    //   this.Url = "/" + this.tag + "/find_blogs";
    // } else if (this.kind == 6) {
    //   this.year = api.split('/')[2];
    //   this.month = api.split('/')[3];
    //   this.Url = "/get_month/" + this.year + "/" + this.month;
    // } else {
    //   this.Url = "/sort/?sort=" + this.kind;
    // }
    // this.FetchUrl()
  },
  methods: {
    show() {
      this.showNavi = !this.showNavi
    },
    PageUp() {
      if (this.page_num != this.pages_count) {
        this.page_num += 1;
        this.FetchUrl()
      }
    },
    PageDown() {
      if (this.page_num != 1) {
        this.page_num -= 1;
        this.FetchUrl()
      }
    },
    FetchUrl() {
      fetch('/api/v2.0' + this.Url + '/?page=' + this.page_num).then(res => {
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
}
</script>
<style lang="scss">
@import '../scss/mobile.scss';
@import '../scss/utility.scss';
</style>


