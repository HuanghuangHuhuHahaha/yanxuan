<template>
  <section>
    <section class="block" v-for="(lists,index) in cateList" :key="index">
      <h3 class="title">{{lists.name}}好物</h3>
      <ul class="list">
        <li class="li" v-for="(item,index) in lists.itemList" :key="index" v-if="index<7">
          <a href="javascript:;" class="goods">
            <img class="bigImg" :src="item.primaryPicUrl" alt="">
            <div class="publicity">{{item.simpleDesc}}</div>
            <div class="info">{{item.name}}</div>
            <div class="price"> ￥ {{item.retailPrice}}</div>
          </a>
        </li>
        <li class="more">
          <a href="javascript:;" class="moreChild">
            <div class="top">
              更多{{lists.name}}好物
            </div>
            <div class="bottom">
              <i class="iconfont icon-youjiantou5"></i>
            </div>
          </a>
        </li>
      </ul>
      <GrayLin></GrayLin>
    </section>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['cateList'])
    },
    mounted(){
      this.$store.dispatch('cateLists')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .block
    width 100%
    .title
      line-height 60px
      text-align: center
      /*background skyblue*/
      width 100%
      font-size 14px
    .list
      overflow hidden
      .li
        float left
        width 50%
        box-sizing border-box
        padding 0px 2px 5px 10px
        .goods
          width 100%
          height 100%
          display block
          .bigImg
            width 172.5px
            height 172.5px
            background #f4f4f4
          .publicity
            background #f1ece2
            color #9f8a60
            height 35px
            line-height 35px
            margin-bottom 10px
            width 173px
          .info
            color #000
            font-size 14px
            font-weight 500
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            margin-bottom 5px
          .price
            color red
            font-size 14px
            font-weight bold
      .more
        float left
        width 48%
        height 207.5px
        background #f4f4f4
        box-sizing border-box
        position relative
        .moreChild
          position absolute
          top 25%
          left 25%
          .top
            text-align: center
            font-size 18px
            margin-bottom 10px
          .bottom
            text-align: center
            i
              font-size 40px

</style>

