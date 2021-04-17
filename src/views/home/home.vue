<!-- 首页 -->
<template>
  <div id='home' class="wrapper">
    <nav-bar class="bgc"><div slot='center'>购物街</div></nav-bar>  
    <scroll class="content" 
            ref='scroll'
            :probe-type='3'
            @scroll='contentScroll'
            :pull-up-load='true'
            @pullingUp='loadMore'>
      <home-swiper :banners='banners'/>
      <recommend-view :recommends='recommends'/>
      <feature-view/>
      <tab-contral @tabClick='tabClick'
                   class="tab-contral"
                   :titles="['流行','新款','精选']"/>
      <goods-list :goods='goods[currentType].list'/>
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
import BackTop from 'components/content/backTop/BackTop'

//功能引入
import {getHomeMultidata,getHomeGoods} from 'network/Home'

//betterscroll插件引入
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
    }
  },
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
    BackTop
  },
  created() {
    //请求多个数据
    this.getHomeMultidata()

    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  methods: {
    //事件监听相关的方法
    tabClick(index) {
      console.log(index);
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
    backClick() {
    this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(position) {
      console.log(this.$refs.scroll);
    this.isShow = (-position.y) > 800
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    }
},

}

</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.bgc {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  height: calc(100%-98px);
  overflow: hidden;
}
</style>