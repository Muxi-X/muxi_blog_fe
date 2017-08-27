import Vue from 'vue'
import Mobile from './components/Mobile'
import style from './scss/reset.scss'

new Vue({
    el: "#mobile",
    render: h => h(Mobile)
})