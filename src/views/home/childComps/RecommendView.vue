<!--  -->
<template>
  <div class="recommend">
    <div :key='item.id' v-for='item in recommends' class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
}

</script>
<style >
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 8px 0 15px;
    border-bottom: 5px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item div {
    text-align: center;
    font-size: 12px;
  }
  .recommend-item img {
    width: 65px;
    height: 65px;
    margin-bottom: 5px;
  }
</style>