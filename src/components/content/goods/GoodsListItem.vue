<!--  -->
<template>
  <div class="goodsListItem">
    <img  @click='itemClick' :src="showImage" alt="" @load='imageLoad'>
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
  data() {
    return {
      iid: null
    }
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad() {
      if(this.$route.path.indexOf('/home')) {
      this.$bus.$emit('homeItemImageLoad')
      } else if(this.$route.path.indexOf('/detail')) {
      this.$bus.$emit('detailItemImageLoad')
      }
    },
    itemClick() {
      if(!this.$route.path.indexOf('/home')) {  //路径是从0开始的，所以要取反
      this.$router.push('/detail/' + this.goodsItem.iid)
      // console.log(222);
      } else if(!this.$route.path.indexOf('/detail')) {
      // this.$router.push('/detail/' + this.goodsItem.shop_id)
      console.log('无数据');
      // console.log(this.goodsItem);
      }
    }
  }
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
    /* height: 14rem; */
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