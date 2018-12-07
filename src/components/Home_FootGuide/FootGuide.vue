<template>
  <div>
    <footer class="footer_guide border-1px">
      <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/home'}" @click="goto('/home')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
        <span>首页</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/classify'}" @click="goto('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-zhaopian"></i>
      </span>
        <span>识物</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/recommend'}" @click="goto('/recommend')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
        <span>分类</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/cartShop'}" @click="goto('/cartShop')">
      <span class="item_icon">
        <i class="iconfont icon-cart_icon"></i>
      </span>
        <span>购物车</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/profile'}" @click="goto('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-gerenzhongxin"></i>
      </span>
        <span>我的</span>
      </a>
    </footer>
  </div>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height $px/50
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #FF4500
      span
        font-size 10px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>

