<template>
  <div>
    <div class="recommend">
      <h3 class="title" style="width: 100%">严选臻品</h3>
      <div class="itemMajor">
        <a href="javascript:;" class="a">
          <img alt=""
               :src="zhenOne.picUrl"
               class="img1"
          >
          <div class="info">
            <div class="line1">
              <div class="Linetitle">{{zhenOne.title}}</div>
              <div class="price">{{zhenOne.priceInfo}}元起</div>
            </div>
            <div class="line2">{{zhenOne.subTitle}}</div>
          </div>
        </a>
      </div>
      <div class="itemsDouble">
        <div class="items">
          <div class="topicInfo">
            <div class="line1">
              <div class="topicTitle">{{zhenTwo.title}}</div>
            </div>
            <div class="line2">
              <div class="cont">{{zhenTwo.subTitle}}</div>
            </div>
          </div>
          <div class="topicPic">
            <img alt=""
                 :src="zhenTwo.picUrl">
            <div class="topicTag">
              <div class="tag">{{zhenTwo.typeName}}</div>
            </div>
          </div>
        </div>
        <div class="items">
          <div class="topicInfo">
            <div class="line1">
              <div class="topicTitle">{{zhenThree.title}}</div>
            </div>
            <div class="line2">
              <div class="cont">
                {{zhenThree.subTitle}}
              </div>
            </div>
          </div>
          <div class="topicPic">
            <img alt="" :src="zhenThree.picUrl">
            <div class="topicTag">
              <div class="tag">{{zhenThree.typeName}}</div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['zhenThree','zhenTwo','zhenOne'])
    },
    mounted(){

    },
    created () {
      this.$store.dispatch('getZhenThree')
      this.$store.dispatch('getZhenTwo')
      this.$store.dispatch('getZhenOne')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommend
    width 100%
    box-sizing border-box
    padding 0px 7.5px
    /*background skyblue*/
    .itemMajor,.itemsDouble
      box-sizing border-box
      padding 0px 7.5px
    .title
      width 100%
      height: 60px
      background #fff
      text-align: center
      line-height 60px
      font-size 14px
      margin 0 auto
    .itemMajor
      margin-bottom 20px
      .a
        display block
        text-align center
        position relative
        .img1
          width 347.5px
          height 193px
          border-radius 4px
        .info
          position relative
          top -4px
          width 348px
          height 97.5px
          box-sizing border-box
          padding 20px 5px 40px
          margin 0 auto
          border 1px solid #eee
          border-top none
          border-radius 4px
          .line1
            overflow hidden
            margin-bottom 20px
            .Linetitle
              float left
              font-size 20px
              color #000
            .price
              float right
              font-size 14px
              color #000
          .line2
            float left
            font-size 14px

    .items
      width 345px
      box-sizing border-box
      padding 0px 5px 1px
      overflow hidden
      .topicInfo
        float left
        height 137px
        width 195px
        box-sizing border-box
        padding 0px 20px
        border 1px solid #ccc
        border-radius 2px
        .line1,.line2
          position relative
          top 35%
          overflow hidden
          text-overflow ellipsis
          white-space nowrap //文本不换行，这样超出一行的部分被截取，显示...
        .line1
          font-size 16px
          color #000
          font-weight 300
        .line2
          font-size 14px
          color #999
          font-weight 300
      .topicPic
        float right
        .topicTag
          position relative
          top -135px
          height 20px
          .tag
            width 100px
            height 20px
            line-height 20px
            text-align: center
            background #fff
            border-radius 25%
            z-index 11
            color #000
        img
          height 137px
          width 140px
</style>

