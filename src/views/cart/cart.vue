<!-- 购物车 -->
<template>
  <div id="cart">
    <nav-bar>
      <div class="nav_bar" slot='center'>
        购物车({{cartLength}})
      </div>
    </nav-bar>
      <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import { mapGetters } from 'vuex'

export default {
  name: 'cart',

  components: {
    NavBar,
    CartList
  },  
  computed: {
    ...mapGetters(['cartLength'])
  },
  methods: {}
}

</script>
<style scoped>
  #cart {
    height: 100vh;
  }
  .nav_bar {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
  }
</style>