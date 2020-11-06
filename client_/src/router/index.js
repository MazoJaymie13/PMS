import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Alert from '../views/Alert.vue'
import alertTransitions from '../views/alertTransitions.vue'
import TransitionSamples from '../views/TransitionSamples.vue'
import todolist from '../views/todolist.vue'
import Login2   from  '../views/Login2.vue'
import explore from '../views/explore.vue'
import m_Users from '../views/m_Users.vue'
import Vuelidate from '../views/Vuelidate.vue'
import datatable from '../views/datatable.vue'
import navBar from '../views/navBar.vue'
import navhide from '../views/navhide.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main
  },
  {
    path: '/Alert',
    name: 'Alert',
    component: Alert
  },
  {
    path: '/alertTransitions',
    name: 'alertTransitions',
    component: alertTransitions
  },
  {
    path: '/TransitionSamples',
    name: 'TransitionSamples',
    component: TransitionSamples
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: todolist
  },
  {
    path:'/Login2',
    name:'Login2',
    component:Login2
  },
  {
    path:'/explore',
    name:'explore',
    component:explore
  },
  {
    path:'/m_Users',
    name:'m_Users',
    component:m_Users
  },
  {
  path:'/Vuelidate',
  name: 'Vuelidate',
  component: Vuelidate
  },
  {
  path:'/datatable',
  name: 'datatable',
  component: datatable
  }, 
  {
    path:'/navBar',
    name: 'navBar',
    component: navBar
  },
  {
    path:'/navhide',
    name: 'navhide',
    component: navhide
  }

]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
