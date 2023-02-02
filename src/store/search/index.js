import { reqSearchList } from "@/api"
let state={
    searchList:{}
}
let mutations={
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList;
    }
}
let actions={
    async getSearchList({commit,state,dispatch},searchParams){
        let result =await reqSearchList(searchParams);
        if(result.code==200){
            commit('GETSEARCHLIST',result.data)
        }
    }
}
//getters：仓库的计算属性
// 项目中：vuex的getters,为简化数据而生

let getters={
    goodsList(state){
        return state.searchList.goodsList
    },
    trademarkList(state){
        return state.searchList.trademarkList;
    },
    attrsList(state){
        return state.searchList.attrsList
    }
}




export default {
    state,
    mutations,
    actions,
    getters
}