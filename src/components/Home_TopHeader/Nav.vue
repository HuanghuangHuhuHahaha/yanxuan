<template>
  <div class="wrap">
    <div class="bottom">
      <ul class="list">
        <li class="frist">
          推荐
          <div class="line"></div>
        </li>
        <li>居家</li>
        <li>包配饰</li>
        <li>服装</li>
        <li>电器</li>
        <li>洗护</li>
        <li>饮食</li>
        <li>餐饮</li>
        <li>婴童</li>
        <li>特色区</li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    height 9.5px
    overflow hidden
    .bottom
      position fixed
      top 48px
      background #fff
      width 375px
      /*position absolute*/
      /*top 50px*/
      z-index 100
      .list
        width 700px
        overflow hidden
        display flex
        li
          /*float left*/
          width 70px
          font-size 14px
          text-align: center
          .line
            margin-top 4px
            width 60%
            height 2px
            background red
            transform translateX(30%)

</style>

