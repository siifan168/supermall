<!-- DetailNavbar -->
<template>
  <div class="detailNavbar">
    <nav-bar>
      <div slot='left' @click="backClick()" class="back">
        <img src="~assets/img/common/back.svg" >
      </div>
     <div slot="center" class="title">
        <div :class='{active: activeIndex == index}'
             @click='itemClick(index)'
             class="title-item" 
             :key='index' 
             v-for="(item,index) in titles">{{item}}</div>
     </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';

export default {
  name: 'DetailNavBar',
  data() {
    return {
      activeIndex: 0,
      titles: ['商品','参数','评论','推荐']
    }
  },
  components: {
    NavBar
  },
  
  methods: {
  itemClick(index) {
      this.activeIndex = index
      this.$emit('itemClick',this.activeIndex)
    },
    
  backClick() {
    this.$router.back()
  },
  },
}

</script>
<style  scoped>
  .title {
    display: flex;
  }
  .title-item {
    flex: 1;
    /* padding: 5px; */
  }
  .active {
    color: var(--color-tint);
  }
  .back {
    margin-top: 10px;
  }
</style>