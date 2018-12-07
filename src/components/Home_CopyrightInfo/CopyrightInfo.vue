<template>
  <section class="info">
    <div class="wrap">
      <div class="app">
          <div class="downloadApp">下载APP</div>
          <div class="downloadPc">电脑板</div>
      </div>
      <div class="copyright">
        网易公司版权所有 © 1997-2018
      </div>
      <div class="goodsInfo">
        食品经营许可证：JY13301080111719
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .info
    width 100%
    background #414141
    height 190px
    .wrap
      width 355px
      height 132.5px
      /*background skyblue*/
      margin 0 auto
      .app
        width 100%
        box-sizing border-box
        padding 30px 70px
        overflow hidden
        .downloadApp,.downloadPc
          width 86px
          height 31px
          line-height 31px
          border 1px solid #999
          color #fff
          text-align: center
        .downloadApp
          float left
        .downloadPc
          float right
      .copyright,.goodsInfo
        text-align center
        color #999
      .goodsInfo
        margin-top 5px
</style>

