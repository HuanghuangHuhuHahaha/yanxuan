<template>
  <div>
    <div   class="topicShow">
      <h3 class="title">十点一刻</h3>
      <div  class="ShowSwiper">
        <div  class="swiper-container swiper-container-horizontal swiper-container-ios">
          <div class="swiper-wrapper">
            <div  class="swiper-slide swiper-slide-active" v-for="(item,index) in tenfifteen" :key="index">
              <a  href="javascript:;">
                <div  class="lineTitle"><span  class="inner">今日话题</span></div>
                <div  class="tsTitle">{{item.title}}</div>
                <div  class="desc">{{item.desc}}</div>
                <div  class="joinInfo">{{item.participantNum}}人参与话题</div>
              </a>
            </div>
            <a href="javascript:;" class="a">
              <div  class="move"><span>查看全部话题</span>
                <i></i>
              </div>
            </a>
          </div>
        </div>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
    computed:{
      ...mapState(['tenfifteen'])
    },
    mounted(){
      this.$store.dispatch('getTenfifteen')
    },
    watch:{
      tenfifteen () {
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            slidesPerView : 1.2,
            spaceBetween : 20,
//spaceBetween : '10%',按container的百分比
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .topicShow
    box-sizing border-box
    padding 0px 0px 20px 10px
    .title
      width 365px
      height 60px
      line-height 60px
      text-align center
    .ShowSwiper
      .swiper-container
        .swiper-wrapper
          display flex
          .swiper-slide
            width 316px
            height 206px
            margin-right 10px
            background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkQAAAGbBAMAAADXTpIOAAAAHlBMVEUAAADn5+fr6+vn5+fo6Ojr6+vm5ubo6Ojy8vL6+vrAm3THAAAABnRSTlMAQEvA0ONT1GB5AAACbUlEQVR42u3T0QlCQRRDwW3JFuzAJrYVa7Bbf0UeROFdxDCngcBA1lZoIUCECBEiRIgQCdE3RA8dhggRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChAgRIkSIECFChAgRIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIECFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkRChAgRIkSIECESIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIiFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkRChAgRIkSIECFChAgRIkSIECESIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIkSIECFChAgRIkSIECFChAgRIkRChAgRIkSIECESIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFChAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChAgRIkSIECFChEiIECFChAgRIkRChAgRIkSIECESIkSIfkd0Tkcj9/33DRMVCA0TNQjNElUIjRJ1CE0SlQgNErUIzRHVCI0R9QhNERUJ7XVOb0QvQpelAyJCiYhQIiKUiAglIkKJiFAiIpSICCUiQomIUCQi9DkRoUREKBERSkSEEhGhREQoERFKRIQSEaFERCgREUpEhBLRDUIgujIINb/sCeTQbvXhK7c0AAAAAElFTkSuQmCC')
            background-repeat no-repeat
            background-size 100% 100%
            position relative
            overflow hidden
            a
              display block
              position: absolute
              top: 50%
              left: 50%
              transform: translate(-50%,-50%)
              width 276.086px
              height 147px
              text-align: center
              /*right 0*/
              /*margin auto*/
              .lineTitle
                margin-bottom 14px
              .tsTitle
                margin 30px 0px 7px 0px
                font-size 18px
                font-weight bold
                color #000
              .desc
                margin 10px 0px 7px 0px
                color #000
              .joinInfo
                margin-top 35px
                height: 24px
                color #000
          .a
            .move
              width 316px
              height 206px
              margin-right 10px
              background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkQAAAGbBAMAAADXTpIOAAAAHlBMVEUAAADn5+fr6+vn5+fo6Ojr6+vm5ubo6Ojy8vL6+vrAm3THAAAABnRSTlMAQEvA0ONT1GB5AAACbUlEQVR42u3T0QlCQRRDwW3JFuzAJrYVa7Bbf0UeROFdxDCngcBA1lZoIUCECBEiRIgQCdE3RA8dhggRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChAgRIkSIECFChAgRIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIECFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkRChAgRIkSIECESIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIiFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkRChAgRIkSIECFChAgRIkSIECESIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIkSIECFChAgRIkSIECFChAgRIkRChAgRIkSIECESIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFChAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChAgRIkSIECFChEiIECFChAgRIkRChAgRIkSIECESIkSIfkd0Tkcj9/33DRMVCA0TNQjNElUIjRJ1CE0SlQgNErUIzRHVCI0R9QhNERUJ7XVOb0QvQpelAyJCiYhQIiKUiAglIkKJiFAiIpSICCUiQomIUCQi9DkRoUREKBERSkSEEhGhREQoERFKRIQSEaFERCgREUpEhBLRDUIgujIINb/sCeTQbvXhK7c0AAAAAElFTkSuQmCC')
              background-repeat no-repeat
              background-size 100% 100%
              text-align: center
              line-height 206px

</style>

