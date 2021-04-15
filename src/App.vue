<template>
  <div id="app">
    <!-- <home></home> -->
    <router-view></router-view>
    <main-tab-bar/>
   </div>
</template>

<script>
// import Home from 'components/common/navbar/NavBar'

import MainTabBar from 'components/content/MainTabBar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar,
    // Home
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
