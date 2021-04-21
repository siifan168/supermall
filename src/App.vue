<template>
  <div id="app">
    <!-- <home></home> -->
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
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
