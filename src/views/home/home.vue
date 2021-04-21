<!-- 首页 -->
<template>
  <div id='home' class="warpper">
    <nav-bar class="bgc"><div slot='center'>购物街</div></nav-bar>  
      <tab-contral @tabClick='tabClick'
                   :titles="['流行','新款','精选']"
                   ref='tabContral1' 
                   class="tab-control"
                   v-show='isTop'/>
    <scroll class="wrapper" 
            ref='scroll'
            :probe-type='3'
            @scroll='contentScroll'
            :pull-up-load='true'
            @pullingUp='loadMore'>
      <div class="content">
        <home-swiper :banners='banners' @swiperImageLoad='swiperImageLoad'/>
        <recommend-view :recommends='recommends'/>
        <feature-view/>
        <tab-contral @tabClick='tabClick'
                    :titles="['流行','新款','精选']"
                    ref='tabContral2'/>
        <goods-list :goods='goods[currentType].list'/>
      </div>

    </scroll>
    <back-top @click.native='backClick' v-show='isShow'/>
  </div>
</template>

<script>
//主页模块
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/featureView'

//公共模块
import NavBar from 'components/common/navbar/NavBar'
import TabContral from 'components/content/tabContral/TabContral'
import GoodsList from 'components/content/goods/GoodsList'

//功能引入
import {getHomeMultidata,getHomeGoods} from 'network/Home'
// import debounce from 'common/utils'
import {listenBacTopMixin} from 'common/mixins'

//betterscroll插件引入
import Bscroll from 'better-scroll'
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'home',
  data() {
    return {
      banners: [],
      recommends: [],
      titles: [],
      currentType: 'pop',
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      isShow: false,
      tabOffsetTop: 0,
      saveY: 0
    }
  },
  mixins: [listenBacTopMixin],
  // computed: {
  //   showGoods: {
  //     return goods[currentType].list
  //   }
  // },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabContral,
    NavBar,
    GoodsList,
    Scroll,
    Bscroll,
  },
  created() {
    //请求多个数据
    this.getHomeMultidata()
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh,200)
    //监听itemImageLoad
    this.$bus.$on('homeItemImageLoad',() => {
      refresh
    })
  },
  activated() {
    // console.log(this.$refs.scroll.scrollTo);
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // console.log(this.$refs.scroll.getY());
    // if(!this.$refs.scroll.getY())
    this.saveY = this.$refs.scroll.getY()
    // console.log(this.saveY);
  },
  methods: {
    //事件监听相关的方法
    tabClick(index) {
      // console.log(index);
      switch(index) {
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break;
        case 2:
          this.currentType='sell'
          break;
      }
      this.$refs.tabContral1.currentIndex = index
      this.$refs.tabContral2.currentIndex = index
    },
    //网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list; //this是指的当前组件对象
      this.recommends = res.data.recommend.list;
    })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1  //取出原来的页数
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // console.log(this.goods);
        this.$refs.scroll.finishPullUp()
    })
    },
    contentScroll(position) {
      // console.log(this.$refs.scroll);
      //监听返回顶部是否显示
    this.demo(position)
    //决定tabcontral是否吸顶（position: fixed）
    this.isShow = -position.y > this.tabOffsetTop
    },
    loadMore() {
      //加载更多
      this.getHomeGoods(this.currentType)
      // console.log('111');
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabContral2.$el.offsetTop
    },
    debounce(func,delay) {
      let timer = null
      // console.log(111);
      return function(...args) {
        if(timer)  clearTimeout(timer)
        timer = setTimeout(()=>{
          func.apply(this,args)
        },delay)
      }
    }
},

}

</script>
<style scoped>
#home {
  /*
  vh视口高度
  */
  height: 100vh;
  position: relative;
}
.bgc {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  height: calc(100% - 98px);
}
.tab-control {
  position: fixed;
  z-index: 9;
  top: 44px;
  left: 0;
  right: 0;
}
</style>