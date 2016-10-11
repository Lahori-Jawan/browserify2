// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// (also, loading Vue standalone this way breaks vueify, so don't do it)
// This is done with the transform "aliasify". For the config, see package.json
import Vue from 'vue'
// import Keen from 'keen-ui';
// import Vue from './components/router'
import router from './components/router'

import App from './App.vue'
// import Sidebar from './components/Sidebar.vue'
// import HomeView from './components/HomeView.vue'

// Vue.use(VueRouter)

// Vue.use(Keen);
// const routes = [
//   { path: 'home', component: HomeView }
//   // { path: '/bar', component: Bar }
// ]
//
// const router = new VueRouter({
//   routes
// })

// router.start(App, '#app');
new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: (h) => h(App),
  })
