import Vue from "vue";
import Sort from "./components/pc/Sort.vue";

const Web = {
  mixins: [Sort]
};

Web.el = "#web";
const web = new Vue(Web);
