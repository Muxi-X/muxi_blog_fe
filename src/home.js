import Vue from 'vue'
import Sort from './components/Sort'

import { Button, Select } from 'element-ui'

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)

const App = {
    template: "#app",
    mixins: [Sort]
}

App.el = "#app"
const app = new Vue(App)

