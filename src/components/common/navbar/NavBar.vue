<!-- NAVBAR -->
<template>
  <div class='nav-bar'>
    <span class='left'><slot name='left'></slot></span>
    <span class="center"><slot name='center'></slot></span>
    <span class="right"><slot name='right'></slot></span>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}

</script>
<style >
  .nav-bar {
    position: fixed;
    top: 0;
    z-index: 99;
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    width: 100%;
    box-shadow: 0px 1px 1px rgba(100,100,100,.1);
  }
  .left,.right {
    margin-top: 5px;
    width: 10%;
    /* background-color: pink; */
  }
  .center {
    flex: 1;
  }
</style>