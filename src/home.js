import Vue from 'vue'
import Sort from './components/pc/Sort'

const App = {
    template: "#app",
    mixins: [Sort]
}

App.el = "#app"
const app = new Vue(App)

