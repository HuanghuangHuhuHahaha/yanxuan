//发送ajax的
import {
  tagList,
  newItemNewUserList,
  popularItemList,
  topicList,
  cateList,
  banner,
  column,
  recommendOne,
  recommendThree,
  tenfifteen,
  zhenThree,
  datafenlei,
  recommendTwo,
  zhenOne,
  zhenTwo,
  topic,
  categoryL1List
}from '../api'
//接受变量
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
  DATAFENLEI,
  GET_RECOMMENDTWO,
  ZHEN_THREE,
  ZHEN_ONE,
  ZHEN_TWO,
  TOPIC,
  CATEGORYL1LIST
} from './mutation-types'

export default {
  //异步发送请求
  async tagLists({commit}){
    const result = await tagList()
    if(result.code === 0){
      console.log(result.data)
      const listData = result.data
      commit(TAG_LIST,{listData})
    }
  },


  // 异步ajax请求新品下边的数据
  async newItemNewUserList({commit}){
    //1 拿到ajax请求回来的东西
     const result = await newItemNewUserList()
    //2 判断过滤  当请求成功的时候 取出里面的数据 data
    if(result.code === 0){
       //取出里面的数据 data
       const data = result.data
      //3 分发
      commit(NEW_ITEM_NEW_USER_LIST,{data})
    }
  },


  // 异步ajax请求人气推荐下边的数据
  async popularItemLists({commit}){
      // 1 拿到ajax 请求回来的数据
    const result = await popularItemList()
      // 2 判断过滤 只拿请求成功时的数据
    if(result.code === 0){
      console.log(result.data)
      const data = result.data
      // 3 分发
      commit(POPULAR_ITEM_LIST,{data})
    }
  },

//## 专题精选下item (topicList)
  async topicLists({commit}){
    const result = await topicList()
    if(result.code === 0){
      const data = result.data
      commit(TOPIC_LIST,{data})
    }

  },

//## 好物 cateList[x].itemList

  async cateLists({commit}){
    const result = await cateList()
    if(result.code === 0 ){
      const data = result.data
      commit(CATE_LIST,{data})
    }
  },

//---------------分类---------------------------

  async getBannerData({commit}){
    const result = await banner()
    if(result.code ===0){
      const data = result.data
      commit(BANNER,{data})
    }
  },

  async getColumn({commit}){
    const result = await column()
    if(result.code ===0){
      const data = result.data
      commit(COLUMN,{data})
    }
  },

  async getRecommendOne({commit}){
    const result = await recommendOne()
    if(result.code ===0){
      const data = result.data
      commit(RECOMMEND_ONE,{data})
    }
  },

  async getRecommendThree({commit}){
    const result = await recommendThree()
    if(result.code ===0){
      const data = result.data
      commit(RECOMMEND_THREE,{data})
    }
  },


  async getRecommendTwo({commit}){
    const result = await recommendTwo()
    if(result.code ===0){
      const data = result.data
      commit(GET_RECOMMENDTWO,{data})
    }
  },


  async getTenfifteen({commit}){
    const result = await tenfifteen()
    if(result.code ===0){
      const data = result.data
      commit(TENFIFTEEN,{data})
    }
  },

  async getZhenThree({commit}){
    const result = await zhenThree()
    if(result.code ===0){
      const data = result.data

      commit(ZHEN_THREE,data)
    }
  },


  async getZhenTwo({commit}){
    const result = await zhenTwo()
    if(result.code ===0){
      const data = result.data
      commit(ZHEN_TWO,{data})
    }
  },


  async getZhenOne({commit}){
    const result = await zhenOne()
    if(result.code ===0){
      const data = result.data

      commit(ZHEN_ONE,{data})
    }
  },


  async getDatafenlei({commit}){
    const result = await datafenlei()
    if(result.code ===0){
      commit(DATAFENLEI,{data})
    }
  },


  async getTopic({commit}){
    const result = await topic()
    if(result.code ===0){
      const data = result.data
      commit(TOPIC,{data})
    }
  },

  async getCategoryL1List({commit}){
    const result = await categoryL1List()
    if(result.code ===0){
      const data = result.data
      commit(CATEGORYL1LIST,{data})
    }
  },

}
