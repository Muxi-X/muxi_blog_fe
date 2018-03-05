import Vue from "vue";
import Second from "./components/pc/Second.vue";

Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});

new Vue({
  el: "#second",
  render: h => h(Second)
});
