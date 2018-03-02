import Vue from "vue";
import Sort from "./components/pc/Sort";

const ArchiveBlogs = {
  template: "#archiveBlogs",
  mixins: [Sort]
};

ArchiveBlogs.el = "#archiveBlogs";
const archiveBlogs = new Vue(ArchiveBlogs);
