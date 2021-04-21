<!--  -->
<template>
  <div id='detail'>
      <detail-nav-bar ref="nav" class="detail-nav-bar" @itemClick='titleClick' :probe-type='3' @scroll='contentScroll'/>
    <scroll class="wrapper" ref='scroll'>
      <div class="content">
      <detail-swiper :top-images='topImages'/>
      <detail-base-info :goods='goods'/>
      <detail-shop-info :shops='shops'/>
      <detail-info :detail-info='detailInfo'/>
      <param-info ref='param' :param-info='paramInfo'/>
      <detail-comment-info ref='comment' :comment-info='commentInfo'/>
      <goods-list ref='recommend' :goods='recommend'/>
      </div>
    </scroll>
    <detail-bottom-bar @addClick='addCart'/>
    <back-top/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import {getDetail,GoodsInfo,Shop,GoodsParam,getRecommend} from 'network/detail'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailInfo from './childComps/DetailInfo'
import ParamInfo from './childComps/paramInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './childComps/DetailBottomBar'
import {listenBacTopMixin} from 'common/mixins'

//功能插件引入
import Scroll from 'components/common/scroll/Scroll'
import DetailSwiper from './childComps/DetailSwiper'

export default {
  name: 'detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops: {},
      detailInfo: {},
      paramInfo: {},  //商品参数
      commentInfo: {} ,
      recommend: [],
      themeTopY: [],
      currentIndex: 0
    }
  },
  mixins: [listenBacTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailInfo,
    ParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  created() {
    //保存iid
    this.iid = this.$route.params.iid
    //根据iid获取数据
    getDetail(this.iid).then(res => {
      const data = res.result
      //创建轮播图图片信息
      this.topImages = data.itemInfo.topImages
      //创建商品信息
      this.goods = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
      //创建店铺信息
      // console.log(data);
      this.shops = new Shop(data.shopInfo)
      //获取信息
      this.detailInfo = data.detailInfo
      //获取商品参数
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      //获取评论信息
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })
    //请求推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.recommend = res.data.list
    })

  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh,200)
    //监听itemImageLoad
    this.$bus.$on('DetailItemImageLoad',() => {
      refresh
    })
    
  },
  methods: {
    contentScroll(position) {
      //获取滚动的值
      const positionY = -position.y
      const length = this.themeTopY.length
      //与themeTopY的值比较
      for(let i = 0;i < length; i++) {
        if((this.currentIndex !== i && positionY !== this.themeTopY[i])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      //hack做法,给themeTopY最后添加一个值Number.MAX_VALUE
      /*
      for(let i = 0;i < length - 1; i++) {
        if(this.currentIndex !==i &&(positionY >= this.themeTopY[i] && positionY <
        this.themeTopY[i + 1]))
      }
      */

      }
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0,this.themeTopY[index],300)
    },
    imageLoad() {
      this.$refs.scroll.refresh()
        this.themeTopY = []
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.param.$el.offsetTop)
        this.themeTopY.push(this.$refs.comment.$el.offsetTop)
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.themeTopY);
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
    },
    addCart() {
      //获取商品信息
      const product = {} 
      product.image = this.topImages[0]
      product.title = this.GoodsInfo.title
      product.desc = this.GoodsInfo.desc
      product.price = this.GoodsInfo.realPrice
      product.iid = this.iid;

      //将商品添加到购物车里面

    }
  }
}
</script>
<style>
  #detail {
    position: relative;
    z-index: 99;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px);
  }
</style>
