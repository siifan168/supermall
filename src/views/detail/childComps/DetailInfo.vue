<!--  -->
<template>
  <div id="detailGoodsInfo">
    <div class="goods-info">
      <div class="info-desc">
        <div class="start"></div>
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="end"></div>
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
        <img :src="item" :key='index' v-for='(item,index) in detailInfo.detailImage[0].list'
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    detailInfo: {
      type: Object
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    }
  },
  methods: {
    imageLoda() {
      //判断图片是否加载完
      if(++this.counter == this.imagesLength) {
        this.$emit('imageLoad')
      }
    },
  },
  watch: {
    detailInfo() {
      //获取图片的个数
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}

</script>
<style scoped>
  .info-list {
    overflow: hidden;
  }
  .info-list img{
    width: 100%;
  }
</style>