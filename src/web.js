import Vue from 'vue'
import Web from './components/Web'
import style from './reset.scss'

new Vue({
    el: '#web',
    render: h => h(Web)
})