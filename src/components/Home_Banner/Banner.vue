<template>
  <!--2 结构-->
  <div class="swiper-container" v-if="focusLists.length>0" id="swiper1">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(focusList,index) in focusLists" :key="index">
        <img :src="focusLists[index].picUrl" alt="" style="width: 100%">
      </div>
    </div>

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要滚动条 -->
    <!--<div class="swiper-scrollbar"></div>-->
  </div>
</template>

<script>
  import {cateList,focusList} from '../../api'
  // 1 引入swiper
  import Swiper from 'swiper'
  export default {
    data(){
      return {
        focusLists:[]
      }
    },
    mounted () {
      focusList()
        .then(res => {
          console.log(res.data)
         this.focusLists = res.data
        })

    },
    watch:{
      focusLists(){
        this.$nextTick(()=>{
          new Swiper ('#swiper1', {
            loop: true, // 循环模式选项
            autoplay:true,
            //小圆点
            pagination: '.swiper-pagination',
            //滚动条
//            scrollbar: '.swiper-scrollbar',
          })
        })
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width: 100%;
    height: 200px;
  #swiper1
    margin-top 40px
</style>

