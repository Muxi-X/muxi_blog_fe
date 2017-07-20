import Vue from 'vue'
import App from './components/App'
import style from './reset.scss'
import navigation from './components/navigation'
// import archieve from './components/archieve'

new Vue({
    el: '#app',
    render: h => h(App)
})