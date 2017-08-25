<template>
  <div>
     <myHeader :class="$style.header"></myHeader>
  </div>
</template>
<script>
import myHeader from './header'
import myCont from './cont_mobile'
export default {
  data() {
    return {

    }
  },
  components: {
    "myHeader": myHeader,
    "myCont": myCont
  }
}
</script>
<style lang="scss" module>
.header {

}
</style>


