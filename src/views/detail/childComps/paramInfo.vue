<!--  -->
<template>
  <div id="paramInfo">
    <table>
      <tr :key='item.id' v-for='item in paramInfo.info'>
        <td class="infoItem">{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
    <table>
      <tr :key='item.id' v-for='item in paramInfo.sizes[0]'>
        <td class="sizesItem" :key='items.id' v-for="items in item">{{items}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}

</script>
<style  scoped>
#paramInfo {
  z-index: 100;
  padding-bottom: 20px;
  background-color: #fff;
  border-bottom: 5px solid rgba(10,10,10,.1);
}
table {
  width: 100%;
  border: 1px solid #ccc;
  border-collapse: collapse;
  text-align: center;
}
tr {
  border: 1px solid #ccc;
}
.infoItem {
  padding: 20px;
  /* background-color: pink;
   */
   border: 1px solid #ccc;
}
.sizesItem {
  /* background-color: skyblue; */
  border: 1px solid #ccc;
  padding: 10px;
}
</style>