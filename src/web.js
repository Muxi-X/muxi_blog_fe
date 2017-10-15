import Vue from 'vue'
import Sort from './components/Sort.vue'
import style from './scss/reset.scss'

const Web = {
    mixins: [Sort]
}

Web.el = "#web"
const web = new Vue(Web)
