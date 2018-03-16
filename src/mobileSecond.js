import Vue from "vue";
import mobileSecond from "./components/mobile/mobileSecond.vue";

Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});

new Vue({
  el: "#mobileSecond",
  render: h => h(mobileSecond)
});
