import requests from "./request";
import mockRequests from './mockRequests';




//获取商品分类的依据
export const reqCategory=()=>{
    return requests({methods:'get',url:'/product/getBaseCategoryList'})
}
// 获取首页轮播图数据的接口
export const reqBannerList =()=>mockRequests({url:'/banner',method:'get'})
//获取floor数据接口
export const reqFloorList=()=>mockRequests({url:'/floor',methods:'get'})

/* 根据模块的请求接口函数
    将根据不同的搜索体哦阿健，需要给服务器携带不同的参数
    请求体携带搜索的参数
    搜索的条件：它应该是一个对象，但是data至少是一个空对象

*/
export const reqSearchList= (data)=>requests({url:'/list',method:'post',data})







