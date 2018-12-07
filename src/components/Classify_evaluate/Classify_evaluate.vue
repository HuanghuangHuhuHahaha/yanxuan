<template>
  <section>
    <h3 class="title">严选LOOK</h3>
    <a href="javascript:;" class="a">
      <img class="bigImg" src="https://yanxuan.nosdn.127.net/426ea284025bb222b1a3fdb11a6adb3f.jpg" alt="">
      <div class="user">
        <div class="userChild">
          <div class="fristChild">
            <img src="https://yanxuan.nosdn.127.net/069037fe8c52e14c152d85074071fe43.jpg" alt="">
          </div>
          <div class="lastChild">a****0</div>
        </div>
        <div class="comment">是我想要的风格。安装时除了有个螺丝孔有问题，后因有设备处理就很方便的解决问题了。大家看到都觉得很会买东西😀，希望严选多提供这类有品味的产品。</div>
      </div>
    </a>

  </section>
</template>

<script>

  export default {
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .title
    font-size 18px
    color #000
    width 100%
    height 60px
    line-height 60px
    text-align: center
  .a
    display block
    margin-bottom 20px
    .bigImg
      width 100%
      height 375px
    .user
      box-sizing border-box
      padding 0 15px
      .userChild
        overflow hidden
        div
          float left
        .fristChild
          margin-right 20px
          margin-bottom 20px
          img
            width: 23px
            height: 23px
            border-radius 50%


      .comment
        font-size 16px
        line-height:20px
</style>

