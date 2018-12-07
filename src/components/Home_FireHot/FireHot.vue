<!--人气推荐-->
<template>
  <section>
    <div class="newText">
      <div class="content">
        <span class="new">人气推荐,好物精选</span>
        <div class="btn">
          <a href="javascript:;">
            <span>查看全部</span>
            <i class="iconfont icon-youjiantou2"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="newList2 swiper-container" id="hot">
      <ul class="listContent2 swiper-wrapper">
        <li class="info swiper-slide" v-for="(info,index) in popularItemList" :key="index">
          <div class="img">
            <img :src="info.listPicUrl" alt="">
          </div>
          <div class="text">
            <span class="xxx">{{info.name}}</span>
          </div>
          <div class="grayText">
            <span>{{info.simpleDesc}}</span>
          </div>
          <span>￥{{info.retailPrice}}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
    computed : {
      ...mapState(['popularItemList'])
    },
    created () {
      //分发
      this.$store.dispatch('popularItemLists')
    },
    watch:{
      popularItemList(){
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            slidesPerView : 2.5,
            spaceBetween : 10,
//spaceBetween : '10%',按container的百分比
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .newText
    position relative
    width 100%;
    height 130px;
    background-image url('data:image/png;base64,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');
    .content
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      text-align: center
      .new
        color #b4a078
        font-size 20px
      .btn
        margin 0 auto
        width 120px
        height 28px
        line-height 28px
        background-color #f4e9cb
        text-align: center
        margin-top 10px
        a
          color #b4a078
  .newList2
    width 100%
    height 220px
    overflow hidden
    .listContent2
      /*width 1400px*/
      width 370%
      position relative
      display flex
      /*margin-left 10px*/
      .info
        height 100%
        width 140px
        margin-left 10px
        margin-right 25px
        div
          margin-top 5px
          font-size 14px
        .img
          background #f4f4f4
          img
            height 100%
            width 100%
        .text
          width 140px
          overflow:hidden;
          white-space:nowrap;/*限制不换行*/
          text-overflow:ellipsis;
          span
            width:100px;
        .grayText
          span
            color #7f7f7f

</style>


