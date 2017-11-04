<template>
<div>
    <!-- <a href="/" class="logo_box margin logo"> -->
		<img src="../assets/blog_logo.png" class="logo">
	<!-- </a> -->
	<a  class="logo_box margin logo">
		<img :src="this.img_url" class="logo">
	</a>
</div>
</template>
<script>
import FecthSort from '../common/sortMap.js'

export default {
  data() {
	  return {
		  img_url: "../assets/blog_logo.png"
	}
  },
  mounted() {
	  var api = window.location.pathname
      var find = api.split('/')[1]
	  var kind = FecthSort.SortMap[find];
	  
	  if (kind == 2) {
		  this.img_url = "../assets/MED.png"
	  } else {
		  this.img_url = "../assets/blog_logo.png"
	  }

  }
}
</script>
