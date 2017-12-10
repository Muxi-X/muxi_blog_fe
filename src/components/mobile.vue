<template>
  <div class="mobile full_height">
    <mobile-header v-on:click_button="this.show"></mobile-header>
    <list class="cont full_width" 
         :items="this.items" 
         :pages_count="this.pages_count" 
         :blog_num="this.blog_num" 
         v-on:page_up="page_up" 
         v-on:page_down="page_down">
    </list>
    <transition name="slide-fade">
      <mobile-navi class="mobile_navi" v-show="this.show_navi" v-on:click_mask="this.show"></mobile-navi>
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
      show_navi: true,
      items: [],
      page_num: 1,
      kind: 0,
      tag: "",
      year: 0,
      month: 0,
      Url: "",
      pages_count: 0,
      blog_num: 0
    }
  },
  components: {
    "mobile-header": header,
    "mobile-navi": mobileNavi,
    "list": mobileContent
  },
  mounted() {
    var api = window.location.pathname
    var find = api.split('/')[1]
    this.kind = FecthSort.SortMap[find];

    if (this.kind == 0) {
      this.Url = "";
    } else if (this.kind == 5) {
      this.tag = api.split('/')[2];
      this.Url = "/" + this.tag + "/find_blogs";
    } else if (this.kind == 6) {
      this.year = api.split('/')[2];
      this.month = api.split('/')[3];
      this.Url = "/get_month/" + this.year + "/" + this.month;
    } else {
      this.Url = "/sort/?sort=" + this.kind;
    }
    this.fetch_url()
  },
  methods: {
    show() {
      this.show_navi = !this.show_navi
    },
    page_up() {
      if (this.page_num != this.pages_count) {
        this.page_num += 1;
        this.fetch_url()
      }
    },
    page_down() {
      if (this.page_num != 1) {
        this.page_num -= 1;
        this.fetch_url()
      }
    },
    fetch_url() {
      // fetch('/api/v2.0' + this.Url + '/?page=' + this.page_num).then(res => {
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
}
</script>
<style lang="scss">
@import "../scss/mobile.scss";
</style>

