<!--  -->
<template>
  <div id='check-button'>
    <img :class="{checked: isShow}" src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
}

</script>
<style  scoped>
.checked {
  /* width: 10px;
  height: 10px; */
  /* background: url('~assets/img/cart/tick.svg'); */
  background-color: pink;
  border-radius: 50%;
}
</style>