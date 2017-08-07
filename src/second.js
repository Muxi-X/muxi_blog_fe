import Vue from 'vue'
import Second from './components/Second'
import style from './reset.scss'
// import navigation from './components/navigation'

new Vue({
    el: '#second',
    render: h => h(Second)
})