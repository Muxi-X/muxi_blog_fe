<template>
	<div>
		<a href="/" class="logo muxi_logo" v-if="this.kind == 0">
			<img src="../../assets/blog_logo.png" class="logo muxi_logo">
		</a>
		<a href="/web" class="logo muxi_logo"  v-else-if="this.kind == 1">
			<img src="../../assets/blog_logo.png" class="logo muxi_logo">
		</a>
		<a href="/design" class="logo" v-else-if="this.kind == 2">
			<img src="../../assets/MED.png" class="logo design_logo">
		</a>
		<a href="/android" class="logo muxi_logo" v-else-if="this.kind == 3">
			<img src="../../assets/blog_logo.png" class="logo muxi_logo">
		</a>
		<a href="/product" class="logo muxi_logo" v-else-if="this.kind == 4">
			<img src="../../assets/blog_logo.png" class="logo muxi_logo">
		</a>
		<a :href="/tagBlogs/ + this.tag" class="logo muxi_logo" v-else-if="this.kind == 5">
			<img src="../../assets/blog_logo.png" class="logo muxi_logo">
		</a>
		<a :href="/archiveBlogs/ + this.year + '/' + this.month" class="logo muxi_logo" v-else-if="this.kind == 6">
			<img src="../../assets/blog_logo.png" class="logo muxi_logo">
		</a>
		<a href="/" class="logo muxi_logo" v-else-if="this.kind == 7">
			<img src="../../assets/blog_logo.png" class="logo muxi_logo">
		</a>
		<a href="/" class="logo muxi_logo" v-else-if="this.kind == 8">
			<img src="../../assets/blog_logo.png" class="logo muxi_logo">
		</a>
		<a href="/" class="logo muxi_logo" v-else-if="this.kind == 9">
			<img src="../../assets/blog_logo.png" class="logo muxi_logo">
		</a>
	</div>
</template>

<script>
import FecthSort from "../../common/sortMap.js";

export default {
  data() {
    return {
      kind: 0,
      tag: "",
      tag: "",
      year: 0,
      month: 0
    };
  },
  mounted() {
    var api = window.location.pathname;
    var find = api.split("/")[1];
    this.kind = FecthSort.SortMap[find];
    if (this.kind == 5) {
      this.tag = api.split("/")[2];
    } else if (this.kind == 6) {
      this.year = api.split("/")[2];
      this.month = api.split("/")[3];
    }
  }
};
</script>
