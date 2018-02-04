import Vue from 'vue'
import Sort from './components/pc/Sort'
import style from './scss/reset.scss'

const App = {
    template: "#app",
    mixins: [Sort]
}

App.el = "#app"
const app = new Vue(App)

