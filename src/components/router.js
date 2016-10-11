import Vue from 'vue'
import HomeView from './HomeView.vue'
import Dashboard from './Dashboard.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

var router = new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Dashboard },
    { path: '/studentList', component: HomeView }
  ],
  // linkActiveClass: 'active',
  // console.info(router.push);

});
export default router;
