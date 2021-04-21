<!--  -->
<template>
  <div class="comment-info"  v-if='Object.keys(commentInfo).length !== 0'>
    <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more" @click='more'>更多 
          <i class="arrow-right"></i>
        </div>
    </div>
    <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :key='item.id' 
        v-for='item in commentInfo.images' :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      //将时间戳转成Date对象
      const date = new Date(value * 1000)
      //将date格式化
      return formatDate(date, 'yyyy/MM/dd')
    }
  },
  methods: {
    more() {
      console.log(111);
    },
  }
}

</script>
<style  scoped>
  .comment-info {
    background-color: #fff;
    z-index: 10;
    padding: 0 5px 0 5px;
  }
  .info-header {
    /* background-color: pink; */
    display: flex;
    justify-content: space-between;
    padding: 20px 10px 20px 10px;
    border-bottom: 1px solid #ccc;
  }
  .info-user {
    padding: 5px;
    font-size: 16px;
  }
  .info-user img {
    padding: 5px;
    width: 40px;
    vertical-align: middle;
    border-radius: 50%;
  }
  .info-other {
    display: flex;
    justify-content: space-around;
  }
  .info-other span {
    flex: 1;
  }
</style>