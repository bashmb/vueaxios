import Vue from 'vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/style.css'
import 'bootstrap'



Vue.use(VueRouter)

var home = require('./components/home.vue').default
var page = require('./components/page.vue').default
const routes = [
	{path: '/', component: home},
  {path: '/page', component: page}
]


const router = new VueRouter({
	mode: 'history',
	routes
})

const app = new Vue({

	router
}).$mount('#app')