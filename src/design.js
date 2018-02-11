import Vue from 'vue'
import Sort from './components/Sort'

const Design = {
    template: "#design",
    mixins: [Sort]
}
Design.el = "#design"
const design = new Vue(Design)
