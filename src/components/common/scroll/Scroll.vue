<!-- BetterScroll -->
<template>
  <div class="wrapper" ref='wrapper'>
        <div class="content">
          <slot></slot>
        </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Pullup from '@better-scroll/pull-up'
import ObserveDom from '@better-scroll/observe-dom'

export default {
  name:'Scroll',
  data () {
    return {
      scroll: null,
      message: '1111',
    };
  },
  props: {
    probetype: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BScroll,
    ObserveDom,
    Pullup
  },
  methods: {
    scrollTo(x,y,time) {
      this.scroll && this.scroll.scrollTo(x,y,time=300)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      console.log(this.scroll.refresh);
      this.scroll && this.scroll.refresh()
    },
    getY() {
      // console.log(this.scroll.y);
      return this.scroll.y
    }
  },
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
      observeImage:true,
      observeDOM: true,
    })
    //监听滚动位置
    this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
    })

    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })

    if(this.pullUpLoad) {
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    }
  },
}

</script>
<style scoped>
</style>