<!-- goods -->
<template>
  <div class="GoodsList">
    <goods-list-item :key='item.id' v-for="item in goods" :goods-item='item'/>
    <button @click="click">anniu</button>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      defaule() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  },
  methods: {
    click() {
      console.log(goods);
    }
  }
}

</script>
<style lang='stylus' scoped>
</style>