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
    BScroll
  },
  methods: {
    scrollTo(x,y,time=300) {
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    })
  console.log(this.scroll);
    //监听滚动位置
    this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
    })

    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  },
}

</script>
<style scoped>
</style>