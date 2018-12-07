<template>
  <div>
    <!--头部-->
    <div>
      <TopHeader/>
      <Nav/>
    </div>
    <!--轮播图-->
    <Banner class="Banner"/>
    <!-- 保障 -->
    <div class="promise">
      <div class="promiseFirst">
        <div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEUAAAC0KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC3Ey6wmAAAAEXRSTlMA0B5W70TYEJW1LMJ+bjoIGVujbn8AAAEsSURBVEjH7ZXRjoQgDEVFCpVBxPv/P7sxGbdIYciGt83wiKfSe1vK8l1st0gAKG6Wx7gLKFdwn/HDXFByJy98unQFm6OP5w3wO5fp7R7Ycodfr49q9/rJ2uRfBPNq7RtQa38lBG7bFkD6jOwRuuICfNapmr7pbJS4A5A8GzqAyl31C53As77wgw7wcE9V+yBgf3jCAHfTj6wRi/BBbnwnYUtJqdcudPuTSlsiXJ93ty9R9gnriF9WkHwQQRyL+p0E2MKYMkCSk4qf/s0LpE848NuZ/OQZaGpwdwQbiHeiQVyqIrLw4lK7DhagM8eKlzroSlvAR9TdFSpB/IwQXiGtbk3Cq25t34e0Ne7DX2/c5J0eT43JuTSefHOzdTy9p96H8Qs09caNX9F/u34AL0wTmMxd/wMAAAAASUVORK5CYII=" alt="">
          <span>网易自营品牌</span>
        </div>
        <div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEUAAAC0KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC3Ey6wmAAAAEXRSTlMA0B5W70TYEJW1LMJ+bjoIGVujbn8AAAEsSURBVEjH7ZXRjoQgDEVFCpVBxPv/P7sxGbdIYciGt83wiKfSe1vK8l1st0gAKG6Wx7gLKFdwn/HDXFByJy98unQFm6OP5w3wO5fp7R7Ycodfr49q9/rJ2uRfBPNq7RtQa38lBG7bFkD6jOwRuuICfNapmr7pbJS4A5A8GzqAyl31C53As77wgw7wcE9V+yBgf3jCAHfTj6wRi/BBbnwnYUtJqdcudPuTSlsiXJ93ty9R9gnriF9WkHwQQRyL+p0E2MKYMkCSk4qf/s0LpE848NuZ/OQZaGpwdwQbiHeiQVyqIrLw4lK7DhagM8eKlzroSlvAR9TdFSpB/IwQXiGtbk3Cq25t34e0Ne7DX2/c5J0eT43JuTSefHOzdTy9p96H8Qs09caNX9F/u34AL0wTmMxd/wMAAAAASUVORK5CYII=" alt="">
          <span>30天无忧退货</span>
        </div>
        <div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEUAAAC0KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC20KC3Ey6wmAAAAEXRSTlMA0B5W70TYEJW1LMJ+bjoIGVujbn8AAAEsSURBVEjH7ZXRjoQgDEVFCpVBxPv/P7sxGbdIYciGt83wiKfSe1vK8l1st0gAKG6Wx7gLKFdwn/HDXFByJy98unQFm6OP5w3wO5fp7R7Ycodfr49q9/rJ2uRfBPNq7RtQa38lBG7bFkD6jOwRuuICfNapmr7pbJS4A5A8GzqAyl31C53As77wgw7wcE9V+yBgf3jCAHfTj6wRi/BBbnwnYUtJqdcudPuTSlsiXJ93ty9R9gnriF9WkHwQQRyL+p0E2MKYMkCSk4qf/s0LpE848NuZ/OQZaGpwdwQbiHeiQVyqIrLw4lK7DhagM8eKlzroSlvAR9TdFSpB/IwQXiGtbk3Cq25t34e0Ne7DX2/c5J0eT43JuTSefHOzdTy9p96H8Qs09caNX9F/u34AL0wTmMxd/wMAAAAASUVORK5CYII=" alt="">
          <span>48小时极速退款</span>
        </div>
      </div>
    </div>
    <!--品牌制造商直供-->
    <Brand/>
    <GrayLin/>
    <!--新品首发-->
    <NewProduct/>
    <GrayLin/>
    <!--人气推荐-->
    <FireHot/>
    <GrayLin/>
    <!--限时购-->
    <ShopTime/>
    <GrayLin/>
    <!--福利社-->
    <div class="welfare">
      <img src="http://localhost:8080/static/img/move.a3ea2d1.jpg" alt="">
    </div>
    <GrayLin/>
    <!--专题精选-->
    <ProjectSelection/>
    <GrayLin/>
    <!--产品推荐  居家  ....-->
    <GoodThing/>
    <!--版权-->
    <CopyrightInfo/>
    <!--一键返回顶部-->
    <goTop/>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  import Nav from '../../components/Home_TopHeader/Nav.vue'
  import Banner from '../../components/Home_Banner/Banner.vue'
  import NewProduct from '../../components/Home_NewProduct/NewProduct.vue'
  import FireHot from '../../components/Home_FireHot/FireHot.vue'
  import ShopTime from '../../components/Home_ShopTime/ShopTime.vue'
  import Brand from '../../components/Home_Brand/Brand.vue'
  import ProjectSelection from '../../components/Home_ProjectSelection/ProjectSelection.vue'
  import GoodThing from '../../components/Home_GoodThing/GoodThing.vue'
  import CopyrightInfo from '../../components/Home_CopyrightInfo/CopyrightInfo.vue'


  import {mapState} from 'vuex'
  export default {

    components: {
      Nav,
      Banner,
      NewProduct,
      FireHot,
      ShopTime,
      Brand,
      ProjectSelection,
      GoodThing,
      CopyrightInfo,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Banner
    margin-top 60px
  .promise
    height 50px
    background #eee
    .promiseFirst
      padding 8px 0px
      display flex
      justify-content center
      background #fff
      img
        width 15px
        height 15px
        vertical-align middle
      div
        margin 5px 12px 5px

  .welfare
    width 100%
    height: 150px
    img
      width 100%
      height 100%
</style>

