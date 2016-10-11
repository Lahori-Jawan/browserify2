<template>
  <div id="app">
    <div class="columns">
    	<div class="column" style="padding-left:1.5%; height: 100.5vh">
    		<sidebar></sidebar>
    	</div>
    	<div class="column is-three-quarters"
           style="width: 83.5%; background: #212729; padding-top:20px
      ">
        <!-- <content-view></content-view> -->
        <router-view class="view"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import ContentView from './components/ContentView.vue'
import Sidebar from './components/Sidebar.vue'
// import HomeView from './components/HomeView.vue'

import router from './components/router'

export default {
  router,
  components: {
    Sidebar
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
