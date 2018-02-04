import Vue from 'vue'
import Sort from './components/pc/Sort'
import style from './scss/reset.scss'

const Android = {
    template: "#android",
    mixins: [Sort]
}

Android.el = "#android"
const android = new Vue(Android)
