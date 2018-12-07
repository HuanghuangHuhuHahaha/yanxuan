import Vue from 'vue'

import {
  TAG_LIST,
  NEW_ITEM_NEW_USER_LIST,
  POPULAR_ITEM_LIST,
  TOPIC_LIST,
  CATE_LIST,
  BANNER,
  COLUMN,
  RECOMMEND_ONE,
  RECOMMEND_THREE,
  TENFIFTEEN,
  ZHEN_THREE,
  DATAFENLEI,
  GET_RECOMMENDTWO,
  ZHEN_ONE,
  ZHEN_TWO,
  TOPIC,
  CATEGORYL1LIST
} from './mutation-types'

export default {
  //品牌制造商
  [TAG_LIST] (state,{listData}) {
    state.tagList = listData
  },
//新品首发
  [NEW_ITEM_NEW_USER_LIST] (state,{data}) {
    state.NewProductInfo = data
  },
  //人气推荐
  [POPULAR_ITEM_LIST] (state,{data}){
    state.popularItemList = data
  },

  [TOPIC_LIST] (state,{data}){
    state.topicList = data
  },

  [CATE_LIST] (state,{data}){
    state.cateList = data
  },

  [BANNER] (state,{data}){
    state.banner = data
  },

  [COLUMN] (state,{data}){
    state.column = data
  },

  [RECOMMEND_ONE] (state,{data}){
    state.recommendOne = data
  },

  [RECOMMEND_THREE] (state,{data}){
    state.recommendThree = data
  },

  [TENFIFTEEN] (state,{data}){
    state.tenfifteen = data
  },

  [ZHEN_THREE] (state,data){
    console.log('xx'+ data)
    state.zhenThree = data
  },

  [ZHEN_TWO] (state,{data}){
    state.zhenTwo = data
  },

  [ZHEN_ONE] (state,{data}){
    state.zhenOne = data
  },


  [DATAFENLEI] (state,{data}){
    state.datafenlei = data
  },

  [GET_RECOMMENDTWO] (state,{data}){
    state.recommendTwo = data
  },


  [TOPIC] (state,{data}){
    state.topic = data
  },


  [CATEGORYL1LIST] (state,{data}){
    state.categoryL1List = data
  },

}
