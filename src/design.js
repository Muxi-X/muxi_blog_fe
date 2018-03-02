import Vue from "vue";
import Sort from "./components/pc/Sort";

const Design = {
  template: "#design",
  mixins: [Sort]
};
Design.el = "#design";
const design = new Vue(Design);
