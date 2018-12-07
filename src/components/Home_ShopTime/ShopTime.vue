<template>
  <div>
    <div class="wrap">
      <a href="javascript:;" class="a">
          <div class="left">
            <h2 class="title">严 选 限 时 购</h2>
            <div class="time">
              <span class="blok">01</span>
              <span class="maohao">:</span>
              <span class="blok">xx</span>
              <span class="maohao">:</span>
              <span class="blok">xx</span>
            </div>
            <span class="next">下一场 22:00 开始</span>
          </div>
          <div class="right">
            <img  src="http://yanxuan.nosdn.127.net/969d44f72fa4453b0ccc71799ec83335.png" alt="">
          </div>
      </a>
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
    position relative
    width: 100%
    height: 160px
    .a
      display block
      position absolute
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 130px
      width: 327px
      .left
        float left
        /*height: 100%*/
        transform translateY(25%)
        .title
          font-size 20px
          color black
        .time
          .maohao
            font-weight bold
            color #000
          .blok
            display inline-block
            width: 31px
            height: 28px
            line-height 28px
            background #000
            border-radius 4px
            text-align: center
            margin 10px 0px
            color #fff
        .next
          color #000
          font-weight bold
      .right
        position relative
        bottom 10px
        float right
        width 100px
        height 100px
        margin 0px 50px 50px 0px
        img
          width 150%
          height 150%
</style>

