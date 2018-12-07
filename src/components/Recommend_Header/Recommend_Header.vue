<template>
  <header>
    <div class="wrap">
      <div class="content">
        <i class="iconfont icon-sousuo"></i>
        <span class="text">搜索商品,共9723款好物</span>
      </div>
    </div>
  </header>
</template>

<script>

  export default {
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  header
    width 100%
    height: 44px
    .wrap
      width 100%
      height: 44px
      border-bottom 1px solid #ccc
      position fixed
      top 0
      background #fff
      z-index 100
      .content
        width 345px
        height 28px
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        margin auto
        background #eee
        border-radius 4px
        text-align: center
        i,.text
          line-height 28px
          font-size 14px
          color #666
</style>

