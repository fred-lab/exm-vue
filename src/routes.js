/**
 * Import Vue-Router
 */
import VueRouter from 'vue-router'

const routes =[
  {
    path: '/',
    name: 'homepage',
    component: require('./components/Home.vue')
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: require('./components/Quiz.vue')
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
