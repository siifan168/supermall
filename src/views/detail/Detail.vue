<!--  -->
<template>
  <div id='detail'>
    <detail-nav-bar>
    </detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
export default {
  name: 'detail',
  data() {
    iid: null
  },
  components: {
    DetailNavBar
  },
  // created() {
  //   this.iid = this.$router.params.iid
  // }
}

</script>
<style>
</style>
