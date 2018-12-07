<template>
  <div>
    <section class="products">
      <header class="header">
        <span>品牌制造商直供</span>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAAAAAAeW/F+AAAAAnRSTlMA/1uRIrUAAAE1SURBVCjPhVM9a8MwENU/f2BDS06k0Ba62AUthizdYg8txIPbIbOWekggKSVZSgkOGGqZ6+AvyS3xLZbvWed3d+8J7sLkSSh9X4ZJbvqkaJ9lSuhjlpYurCWgsn1RVcU+U4DUFlwvgWjTV+RNBCzrDq4XwJqdWAOLuoVjyCOP4igRN7AGDm3ye8APgGYWXFJf+c3f2vWpZMEpoi7zgquPAY+QsjCEgfMT6GvgDzIihxoumAi3p/5NIRcJMovwT4CHbmKcIRaP2NkNne+hqva8QygIZ6fh0xzP3acg4aFyB/KJeXuq4P0H31jwRPFwRO0OyljULjT2ivjvWAprLO/CzC4O1V3J9XglUwudkMOUmKak2AjZ+u3WETIza2psYExjA9IjE61mlolWIxM1FgzI8yiwLfgLLd4VfbLC0WAAAAAASUVORK5CYII=" alt="">
      </header>
      <div class="productsMain">
        <ul>
          <li class="manufacturer" v-for="(list,index) in tagList" :key="index" v-if="index<4">
            <a href="javascript:;">
              <div>
                <h4>{{list.name}}</h4>
                <span>{{list.floorPrice}}</span>
                <span>元起</span>
              </div>
              <img :src="list.picUrl" alt="" >
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed : {
      ...mapState(['tagList'])
    },
    mounted () {
      this.$store.dispatch('tagLists')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .products
    width 100%
    height 300px
    /*background pink*/
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
    .productsMain
      box-sizing border-box
      padding 0 8px
      ul
        overflow hidden
        width 100%
        .manufacturer
          box-sizing border-box
          padding 5px 0px 0px 5px
          float left
          width 172px
          height 110px
          background #f4f4f4
          margin 3px
          font-size 14px
          img
            width 100%
            position relative
            top -25px
            left 0
</style>

