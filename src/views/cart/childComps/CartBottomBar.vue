<!--  -->
<template>
  <div id="bottom-bar">
    <check-button @click.native="checkAll" :is-show='isSelectAll' :class="{checkAll: isCheckAll}"/>
    <span>全选</span>
    <span class="totalprice">合计:￥{{totalPrice}}</span>
    <span class="calculate">去计算({{calcu}})</span>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue';
import { mapGetters } from 'vuex'
export default {
  components: { 
    CheckButton 
    },
  name: 'CartBottomBar',
  data () {
    return {
      calcu: 0,
      isCheckAll: false
    };
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return 0
    },
    calculate() {
      return 0
    },
    isSelectAll() {
     return  !(this.cartList.filter(item => !item.checked).length)
    }
  },
  methods: {
    checkAll() {
      console.log(this.isSelectAll);
    }
  }
}

</script>
<style scoped>
#bottom-bar {
  position: fixed;
  display: flex;
  bottom: 49px;
  left: 0;
  right: 0;
  padding-left: 5px;
  line-height: 44px;
  height: 44px;
  background-color: #ccc;
}
img {
  border: 1px solid #fff;
  border-radius: 50%;
  vertical-align: text-top;
}
.checkAll {
  /* background: url('~assets/img/cart/tick.svg'); */
  background-color: pink;
  border: 1px solid pink;
  border-radius: 50%;
}
.calculate {
  width: 20%;
  height: 100%;
  position: fixed;
  right: 0;
  background-color: orange;
  color: #fff;
}
.totalprice {
  padding-left: 20px;
}
</style>