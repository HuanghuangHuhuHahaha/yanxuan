/*
  mock 模拟数据
 */

import Mock from 'mockjs'
import home from './datahome.json'
import shiwu from './datashiwu.json'
import topic from './datatopic.json'
import fenlei from './datafenlei.json'

//暴露数据
Mock.mock('/focusList',{code:0,data:home.focusList})
Mock.mock('/newItemNewUserList',{code:0,data:home.newItemNewUserList})
Mock.mock('/newItemOldUserList',{code:0,data:home.newItemOldUserList})
Mock.mock('/tagList',{code:0,data:home.tagList})

Mock.mock('/popularItemList',{code:0,data:home.popularItemList})
Mock.mock('/topicList',{code:0,data:home.topicList})
Mock.mock('/cateList',{code:0,data:home.cateList})
//-----------------------分布--------------------------------------

Mock.mock('/banner',{code:0,data:shiwu.banner})
Mock.mock('/column',{code:0,data:shiwu.column})
Mock.mock('/recommendOne',{code:0,data:shiwu.recommendOne})
Mock.mock('/recommendThree',{code:0,data:shiwu.recommendThree})
Mock.mock('/recommendTwo',{code:0,data:shiwu.recommendTwo})

Mock.mock('/tenfifteen',{code:0,data:shiwu.tenfifteen})
Mock.mock('/zhenThree',{code:0,data:shiwu.zhenThree})
Mock.mock('/zhenOne',{code:0,data:shiwu.zhenOne})
Mock.mock('/zhenTwo',{code:0,data:shiwu.zhenTwo})

Mock.mock('/datafenlei',{code:0,data:shiwu.datafenlei})

Mock.mock('/categoryL1List',{code:0,data:shiwu.categoryL1List})
//----------------------------
Mock.mock('/topic',{code:0,data:topic.banner})

Mock.mock('/categoryL1List',{code:0,data:fenlei.categoryL1List})
