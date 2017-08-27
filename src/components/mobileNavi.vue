<template>
  <div class="full-width full-height">
    <div class="header full-width">
      <svg class="navi_button" viewBox="0 0 93 93" v-on:click="showNavi = !showNavi">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#navi_button"></use>
      </svg>
    </div>
    <transition name="slide-fade">
    <div class="full-width full-height bottom" v-if="showNavi">
      <div class="navi_col full-heigh">
        <!-- <navi></navi> -->
      </div>
      <div class="mask inline-block" v-on:click="hideNavi"></div>
    </div>
    </transition>
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
@import '../scss/common.scss';
@import '../scss/utility.scss';

.navi_button {
  height: 30px;
  width: 60px;
  margin-top: 10px;
  margin-left: 10px;
}

.header {
  background-color: #fff;
  height: 50px;
  position: fixed;
  top: 0;
  z-index:3;
  overflow: hidden;
}
.bottom {
  margin-top: 50px;
}
.navi_col {
  width: 40%;
  background-color: #fff;
}

.link_box,
.link_box_first {
  border-bottom: 2px #d9dcdc solid;
}

.link_box_first {
  border-top: 2px #d9dcdc solid;
}

.icon {
  display:  inline-block;
  margin-left: 10%;
  width: 40px;
  margin-right: 5%;
  vertical-align: middle;
}

.class_word {
  display: inline-block;
  line-height: 70px;
  vertical-align: middle;
}

.link_box_first:hover,
.link_box:hover {
  background: #69cad3;
  color: #fff;
}
.mask{
  background-color: rgba(51, 51, 51, 0.3);
  width:70%;
  top:0;
  right:0;
  left:40%;
  bottom:0;
  z-index:2;
  position:fixed;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
