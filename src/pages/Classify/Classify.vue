<template>
  <div>
    <!--头部-->
    <Classify_Header/>
    <!--轮播图-->
    <Classify_Banner/>
    <!--nav-->
    <Classify_nav/>
    <GrayLin/>
    <!--为你推荐-->
    <Classify_recommendYou/>
    <GrayLin/>
    <!--十点一刻-->
    <Classify_TenFifteen/>
    <GrayLin/>
    <Classify_TheBest/>
    <GrayLin/>
    <!--严选LOOK-->
    <Classify_evaluate/>
    <GrayLin/>
    <!--更多-->
    <Classify_More/>
    <goTop/>
  </div>
</template>

<script>
  import Classify_Banner from '../../components/Classify_Banner/Classify_Banner.vue'
  import Classify_nav from '../../components/Classify_nav/Classify_nav.vue'
  import Classify_recommendYou from '../../components/Classify_recommendYou/Classify_recommendYou.vue'
  import Classify_TenFifteen from '../../components/Classify_TenFifteen/Classify_TenFifteen.vue'
  import Classify_TheBest from '../../components/Classify_TheBest/Classify_TheBest.vue'
  import Classify_evaluate from '../../components/Classify_evaluate/Classify_evaluate.vue'
  import Classify_More from '../../components/Classify_More/Classify_More.vue'
  export default {
    components: {
      Classify_Banner,
      Classify_nav,
      Classify_recommendYou,
      Classify_TenFifteen,
      Classify_TheBest,
      Classify_evaluate,
      Classify_More
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

