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
import Pullup from 'better-scroll'
import ObserveDom from 'better-scroll'

export default {
  name:'Scroll',
  data () {
    return {
      scroll: null,
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
    },
  },
  components: {
    BScroll,
    ObserveDom,
    Pullup
  },
  methods: {
    scrollTo(x,y,time) {
      // console.log(this.scroll.scrollTo);
      this.scroll && this.scroll.scrollTo(x,y,time=300)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      // console.log(this.scroll.refresh);
      this.scroll && this.scroll.refresh()
    },
    getY() {
      // console.log(this.scroll.y);
      return this.scroll.y
    }
  },
  mounted() {
      //初始化better-scroll
    this.scroll = new BScroll(this.$refs.wrapper,{
    probeType: this.probeType,
    click: true,
    // scrollX: false,
    // scrollY: true,
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