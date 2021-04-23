<!--  -->
<template>
  <div id='cart-item'>
    <div class="left">
      <check-button @click.native="clickCheck" :is-show='product.checked'/>
    <img :src="product.image" alt="">
    </div>
    <div class="right">
      <span class="p-title">{{product.title}}</span>
      <span class="p-desc">{{product.desc}}</span>
      <div>
      <span class="price">{{product.price}}</span>
      <span class="count">×{{product.count}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: 'CartListItem',
  
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    clickCheck() {
      console.log(1);
      this.product.checked = !this.product.checked
    }
  }
}
</script>
<style scoped>
#cart-item {
  display: flex;
}
.left {
  width: 25%;
  display: flex;
  align-items: center;
  padding: 4px;
}

.left img:nth-child(2) {
  /* padding: 5px; */
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-left: 4px;
}
.right {
  width: 75%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.p-title,
.p-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  left: 0;
  right: 0;
  margin: 5px;
  /* background-color: pink; */
}
.p-desc {
  font-size: 14px;
}
.right div {
  position: absolute;
  bottom: 6px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}
.price {
  color: orange;
}
.count {
  position: absolute;
  right: 0;
}
</style>