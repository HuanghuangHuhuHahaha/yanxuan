<template>
  <section>
    <div class="wrap">
      <div class="wrapper left " id="wrapper">
        <ul class="content list ">
          <li class="li" v-for="(item,index) in categoryL1List" :key="index">{{item.name}}</li>
        </ul>
      </div>
      <div class="right">
        <div class="content">
          <div class="top">
            <img src="http://yanxuan.nosdn.127.net/b9e73dc37e8e7e1f5b465526d0aee568.jpg" alt="">
          </div>
          <div class="main">服装分类</div>
          <section class="bottom">
            <ul>
              <li v-for="(item,index) in categoryL1List" :key="index" v-if="" class="active" @click="">
                <div v-for="(info) in item.subCateList">
                  <img :src="info.wapBannerUrl" alt="">
                  <span>xxx</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
   computed:{
     ...mapState(['categoryL1List'])
   },
   mounted () {
     this.$store.dispatch('getCategoryL1List')
     new BScroll('.wrapper',{
       scrollY: true,
       click: true
     })



   },


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    display flex
    /*margin-top 44px*/
    .left
      width 81px
      border-right 1px solid #ccc
      .list
        height 108%
        padding-top 20px
        &.list:frist-child      //???????
          margin-top 20px
        .li
          width 100%
          height 38px
          margin-bottom 10px
          text-align: center
          line-height 38px
          float left
    .right
      width 294px
      /*position relative*/
      padding-top 20px
      .content
        width 264px
        /*position absolute*/
        /*top 0*/
        /*left 0*/
        /*right 0*/
        /*bottom 0*/
        /*margin auto*/
        margin 0 auto
        .top
          img
            width 264px
            height 96px
        .main
          width 264px
          height 54px
          line-height 54px
          text-align center
        .bottom
          width 264px
          position relative
          ul
            /*overflow hidden*/
            position absolute
            top 0
            left 0
            li
              float left
              height 108px
              margin-right 10px
              margin-bottom 10px
              text-align center
              img
                display block
                width 72px
                height 72px
</style>

