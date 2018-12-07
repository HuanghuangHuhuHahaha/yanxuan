import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Recommend from '../pages/Recommend/Recommend.vue'
import CartShop from '../pages/CartShop/CartShop.vue'
import Profile from '../pages/Profile/Profile.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path:'/home',  //首页
      component:Home,
      meta:{requiresAuth:true}
    },
    {
      path:'/classify',  //分类
      component:Classify,
      meta:{requiresAuth:true}
    },
    {
      path:'/recommend',  //推荐
      component:Recommend,
      meta:{requiresAuth:true}
    },
    {
      path:'/cartShop',  //购物车
      component:CartShop,
      meta:{requiresAuth:true}
    },
    {
      path:'/profile',  //个人
      component:Profile
    },
    {
      path:'/',
      redirect:'/home',
      meta:{requiresAuth:true}
    },
  ]
})
