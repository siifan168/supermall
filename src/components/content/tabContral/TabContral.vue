<!--  -->
<template>
  <div class="tab-contral">
    <div @click='itemclick(index)' class="tab-contral-item" :class='{active: index === currentIndex}' :key='index' v-for='(item,index) in titles'>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TabContral',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemclick(index) {
      console.log(index);
    this.currentIndex = index
    }
  }
  }

</script>
<style  >

.tab-contral {
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-contral-item {
  flex: 1;
}
.tab-contral-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span  {
  border-bottom: 3px solid var(--color-high-text);
}
</style>