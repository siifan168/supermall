<!--  -->
<template>
  <div class="goodsListItem">
    <img :src="goodsItem.show.img" alt="">
    <div class="goodsListItemtitle">
      <p class="goodsItem-title">{{goodsItem.title}}</p>
      <span class="price">{{ goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}

</script>
<style  scoped>
  .goodsListItem {
    padding: .053333rem;
    width: 48%;
    flex: 1;
  }
  .goodsListItem img {
    border-radius: .133333rem;
    width: 100%;
    height: 14rem;
  }
  .goodsItem-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
  .price {
    padding-left: 1.333333rem;
    color: var(--color-tint);
  }
  .collect::before {
    content: '\e9b7';
    font-family: 'icomoon';
  }

</style>