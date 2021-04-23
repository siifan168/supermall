<!-- 购物车 -->
<template>
  <div id="cart">
    <nav-bar>
      <div class="nav_bar" slot='center'>
        购物车({{cartLength}})
      </div>
    </nav-bar>
    <scroll class="content" 
            ref='scroll'
            :probe-type='3'
            @scroll='contentScroll'
            :pull-up-load='true'>
      <div>
      <cart-list></cart-list>
      </div>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import { mapGetters } from 'vuex'
import CartBottomBar from './childComps/CartBottomBar'
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'cart',
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },  
  computed: {
    ...mapGetters(['cartLength'])
  },
  methods: {
    contentScroll() {
      
    }
  },
}

</script>
<style scoped>
  #cart {
    height: 100vh;
  }
  .content {
    height: calc(100% - 136px);
  }
  .nav_bar {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
  }
</style>