// export const itemListenMixin = {
//   data() {
//     return {
//       itemImgListener: null,
//       newRefresh: null
//     }
//   },
//   mounted() {
//     this.newRefresh = debouce(this.$refs.scroll.refresh,100)
//   }
// }

import BackTop from 'components/content/backTop/BackTop'

export const listenBacTopMixin = {
  data() {
    return {
      isTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0,0,500)
    },
    demo(position) {
      this.isTop = (-position.y) > this.tabOffsetTop - 49
    }
  },
  components: {
    BackTop
  }
}
export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}