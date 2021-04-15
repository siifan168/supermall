<!-- 首页 -->
<template>
  <div id='home'>
    <nav-bar class="bgc"><div slot='center'>购物街</div></nav-bar>
    <home-swiper :banners='banners'/>
    <recommend-view :recommends='recommends'/>
    <feature-view/>
    <tab-contral class="tab-contral" :titles="['流行','新款','精选']"/>
    <goods-list :goods='goods.pop.list'/>
    <ul>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
      <li>sssss</li>
    </ul>
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

export default {
  name: 'home',
  data() {
    return {
      banners: [],
      recommends: [],
      titles: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      }
    }
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabContral,
    NavBar,
    GoodsList
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
        console.log(this.goods);
    })
    }
  }
}

</script>
<style >
.bgc {
  background-color: var(--color-tint);
  color: #fff;
}
.tab-contral {
  position: sticky;
  top: 44px;
}
</style>