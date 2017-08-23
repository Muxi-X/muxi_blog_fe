<template>
  <div>
     <myHeader></myHeader>
  </div>
</template>
<script>
import myHeader from './header'
import myNavi from './navi_mobile'
import myCont from './cont_mobile'
export default {
  data() {
    return {

    }
  },
  components: {
    "myHeader": myHeader,
    "myNavi": myNavi,
    "myCont": myCont
  }
}
</script>
<style lang="scss" module>

</style>


