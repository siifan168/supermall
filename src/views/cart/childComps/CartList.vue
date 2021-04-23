<!--  -->
<template>
  <div id="cart-list">
    <scroll ref="scroll" class="content">
      <!-- <div v-for="item in cartList" :key='item.id'>item</div> -->
      <cart-list-item :key="item.id" v-for="item in cartList" :product='item'/>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  data () {
    return {
    };
  },
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}

</script>
<style scoped>
  #cart-list {
    height: 100%;
  }
  .content {
    height: 100%;
    /* background-color: pink; */
  }
</style>