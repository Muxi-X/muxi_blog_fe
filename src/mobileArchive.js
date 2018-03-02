import Vue from "vue";
import Mobile from "./components/mobile/mobile.vue";

const MobileArchive = {
  template: "#mobileArchive",
  mixins: [Mobile]
};

MobileArchive.el = "#mobileArchive";
const mobileArchive = new Vue(MobileArchive);
