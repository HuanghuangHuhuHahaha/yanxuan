<template>
  <div>
    <section>
      <header class="header">
        <span>专题精选</span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAAAAAAeW/F+AAAAAnRSTlMA/1uRIrUAAAE1SURBVCjPhVM9a8MwENU/f2BDS06k0Ba62AUthizdYg8txIPbIbOWekggKSVZSgkOGGqZ6+AvyS3xLZbvWed3d+8J7sLkSSh9X4ZJbvqkaJ9lSuhjlpYurCWgsn1RVcU+U4DUFlwvgWjTV+RNBCzrDq4XwJqdWAOLuoVjyCOP4igRN7AGDm3ye8APgGYWXFJf+c3f2vWpZMEpoi7zgquPAY+QsjCEgfMT6GvgDzIihxoumAi3p/5NIRcJMovwT4CHbmKcIRaP2NkNne+hqva8QygIZ6fh0xzP3acg4aFyB/KJeXuq4P0H31jwRPFwRO0OyljULjT2ivjvWAprLO/CzC4O1V3J9XglUwudkMOUmKak2AjZ+u3WETIza2psYExjA9IjE61mlolWIxM1FgzI8yiwLfgLLd4VfbLC0WAAAAAASUVORK5CYII="
          alt="">
      </header>
      <div id="img" class="swiper-container">
        <ul class="list swiper-wrapper" >
          <li class="bigImg swiper-slide" v-for="(li,index) in topicList" :key="index">
            <img :src="li.itemPicUrl" alt="">
            <div class="text">
              <span class="span1">{{li.title}}</span>
              <span class="span2">{{li.priceInfo}}元起</span>
            </div>
            <div class="span3">
              <span>{{li.subtitle}}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'

  export default {
    computed: {
      ...mapState(['topicList'])
    },
    created () {
      this.$store.dispatch('topicLists')
    },
    watch: {
      topicList () {
        this.$nextTick(() => {
          new Swiper('#img', {
            slidesPerView: 1.2,
            spaceBetween: 10,
//spaceBetween : '10%',按container的百分比

          })
        })
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    width 100%
    height 60px
    /*background skyblue*/
    text-align: center
    img
      width 15px
      height 15px
    span
      line-height 60px
      font-size 16px
      margin-right 5px

  #img
    padding 0px 15px 15px 15px
    overflow hidden
    display flex
    .list
      display flex
      /*overflow hidden*/
      .bigImg
        width 300px
        height: 210.5px
        overflow hidden
        .text
          overflow hidden
          span
            font-size 14px
          .span1
            float left
          .span2
            float right
            color red
      .span3
        font-size 14px
        margin-top 5px
      img
        width 100%
        height: 161px
        border-radius 5px

</style>

