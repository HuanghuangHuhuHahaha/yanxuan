
/*
  用于包含多个发送请求的函数模块  接口请求函数
 */
import ajax from './ajax'
const BASE = '/api'




export const focusList = () => ajax('/focusList')

export const tagList = () => ajax('/tagList')

export const newItemNewUserList = () => ajax('/newItemNewUserList')

export const popularItemList = () => ajax('/popularItemList')

export const topicList = () => ajax('/topicList')

export const cateList = () => ajax('/cateList')
// ------------------识物------------------------
export const banner = () => ajax('/banner')
export const column = () => ajax('/column')
export const recommendOne = () => ajax('/recommendOne')
export const recommendThree = () => ajax('/recommendThree')
export const recommendTwo = () => ajax('/recommendTwo')
export const tenfifteen = () => ajax('/tenfifteen')
export const zhenThree = () => ajax('/zhenThree')
export const zhenTwo = () => ajax('/zhenTwo')
export const zhenOne = () => ajax('/zhenOne')
export const topic = () => ajax('/topic')
export const datafenlei = () => ajax('/datafenlei')

export const categoryL1List = () => ajax('/categoryL1List')
