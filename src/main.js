// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

/* Import Vuex*/
import store from './store.js'


/* Import routes file */
import VueRouter from 'vue-router';
import router from './routes.js';
Vue.use(VueRouter);

/* Vue-cli */
Vue.config.productionTip = false

/* Components */
Vue.component('home', require('./components/Home.vue'));
Vue.component('quiz', require('./components/Quiz.vue'));
Vue.component('multiple-choice', require('./components/MultipleChoice.vue'));
Vue.component('single-choice', require('./components/SingleChoice.vue'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mounted(){
    console.log('Quiz is ready')
  }
})
