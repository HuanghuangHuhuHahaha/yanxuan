<template>
  <div>
    <div class="swiper-container" id="nav">
      <div class="swiper-wrapper wrap">
        <div class="swiper-slide slid" v-for="(item,index) in column" :key="index">
          <a href="javascript:;" class="click">
            <span class="title">{{item.articleCount}}</span>
            <img class="img" :src="item.picUrl" alt="">
            <span class="explain">{{item.title}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['column'])
    },
    mounted () {
      this.$store.dispatch('getColumn')
    },
    watch:{
      column(){
        this.$nextTick(() => {
          new Swiper ('#nav', {
            slidesPerView : 3.8,
            spaceBetween : 20,

          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #nav
    margin 20px 0 0 10px
    .wrap
      width 100%
      height 100%
      display flex
      .slid
        width 100%
        height 100%
        .click
          display block
          width 87.5px
          height 110px
          position relative
          text-align: center
          .title
            position absolute
            right 8px
            top 0
            color #fff
            background-color rgba(0,0,0,.1)
          .img
            width 82px
            height 82px
</style>

