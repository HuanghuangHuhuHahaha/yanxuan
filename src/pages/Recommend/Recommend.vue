<template>
  <div>
    <!--头部-->
    <Recommend_Header/>
    <!--主体-->
    <Recommend_Main/>
  </div>
</template>

<script>
  import Recommend_Header from '../../components/Recommend_Header/Recommend_Header.vue'
  import Recommend_Main from '../../components/Recommend_Main/Recommend_Main.vue'
  export default {
    components: {
      Recommend_Header,
      Recommend_Main
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

