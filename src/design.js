import Vue from 'vue'
import Sort from './components/pc/Sort'
import style from './scss/reset.scss'

const Design = {
    template: "#design",
    mixins: [Sort]
}
Design.el = "#design"
const design = new Vue(Design)