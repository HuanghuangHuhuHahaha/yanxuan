<template>
  <div>
    <div class="header">
      <div class="home"  @click="$router.push('/home')">
        <i class="iconfont icon-shouye1"></i>
      </div>
      <div class="logo"></div>
      <div class="sousuo">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="shop">
        <i class="iconfont icon-gouwuche" @click="$router.push('/cartShop')"></i>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    bottom-border-1px(#e4e4e4)
    width 100%
    height 45px
    display flex
    justify-content space-around
    text-align center
    line-height 45px
    position relative
    background #fafafa
    border-bottom solid 1px #ccc
    .home
      position absolute
      top 0
      left 10px
    .iconfont
      font-size 25px
      color #666
    .logo
      width 80px
      height 25px
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
      background-repeat no-repeat
      background-size 80px
      position absolute
      top 10px
      left 145px
    .sousuo
      position absolute
      top 0
      right 60px
    .shop
      position absolute
      top 0
      right 15px
</style>

