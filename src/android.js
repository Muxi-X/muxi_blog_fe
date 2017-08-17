import Vue from 'vue'
import Android from './components/Android'
import style from './scss/reset.scss'

new Vue({
    el: '#android',
    render: h => h(Android)
})