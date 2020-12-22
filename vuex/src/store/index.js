import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count:1,
    title:'vuex测试',
    carts:[{
      id:1,
      amount:6
    },{
      id:2,
      amount:7
    }]
  },
  mutations: {
    add(state){
      state.count++
      state.carts[0].amount++
    },
    sort(state,{step}){
      // console.log(step)
     state.count-=step
    }
  },
  // 计算属性
  getters: {
    cartCount(state) {
      return state.carts.reduce((pre, cur) => pre + cur.amount, 0);
    },
  },
  actions: {
      // 做异步操作 所有耗时的都放在这里
      addAsync(context,payload){
        // context 上下文
        // payload 载荷 这两个是形参，可以自己定义
        // console.log(payload)
        // context.commit("sort",{step:payload});
        context.commit("add"); // 通过commit 提交一个mutation
        }
  },
  modules: {
    User
  }
})
