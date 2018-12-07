<template>
  <div class="wrap">
    <div class="title">
      <div class="header">
        <div class="top">
          <a class="logo"></a>
          <div class="search">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品,共19674款好物</span>
          </div>
          <div class="btn">登陆</div>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    mounted () {
      new BScroll('.bottom',{
        scrollX: true,
        click: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .wrap
    height 24.5px
    .title
      position fixed
      top 0
      z-index 100
      width 100%
      .header
        position relative
        top 0
        z-index 100
        background #fff
        box-sizing border-box
        padding 12px 15px
        width 100%
        .top
          display flex
          .logo
            display block
            width 60px
            height 20px
            background-size 100% 100%
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
            margin-right .5rem
          .search
            width 200px
            height 25px
            line-height 25px
            background #ededed
            color:#666
            text-align: center
            border-radius 4px
            font-size:14px
            margin-right 18px

          .btn
            float right
            width 40px
            height 20px
            line-height 20px
            text-align center
            border 1px solid #b4282d
            font-size:12px
            border-radius 4px
            color #b4282d

</style>

