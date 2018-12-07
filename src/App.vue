<template>
  <div>
    <router-view/>
    <FootGuide v-show="$route.meta.requiresAuth"/>
  </div>
</template>

<script>
  import FootGuide from './components/Home_FootGuide/FootGuide.vue'

  export default {
    components: {
      FootGuide,
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

