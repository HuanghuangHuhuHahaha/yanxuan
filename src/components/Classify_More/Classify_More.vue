<template>
  <div>
      <section class="wrap">
        <div class="title">--------------更多精彩--------------</div>
        <a href="javascript:;" class="bigImg" v-for="(item,index) in topic" :key="index">
          <img class="img" :src="item.picUrl" alt="">
          <div class="text">{{item.title}}</div>
        </a>
      </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['topic'])
    },
    mounted(){
      this.$store.dispatch('getTopic')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    background #eee
    width 100%
    position relative
    .title
      width: 345px
      height: 70px
      text-align: center
      line-height 70px
      margin 0 auto
    .bigImg
      display block
      width: 345px
      height: 250.5px
      background #fff
      text-align: center
      line-height 250.5px
      margin 0 auto
      .img
        width 321px
        height 180px
        margin-top 10px
      .text
        width 100%
        height 44.5px
        position relative
        top -220px
        left 0px
</style>

