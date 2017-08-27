<template>
   <div class="mobile full-height">
     <mobileNavi class="full-height"></mobileNavi>
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
import myCont from './cont_mobile'
export default {
  data() {
    return {

    }
  },
  components: {
    "mobileNavi": mobileNavi,
    "con": myCont
  }
}
</script>
<style lang="scss">
@import '../scss/common.scss';

.mobile,.mobileNavi {
    // composes: full-height from "sass-loader!../scss/utility.scss";
}
.mobile {
  min-width: 320px;
  min-height: 560px;
}
</style>


