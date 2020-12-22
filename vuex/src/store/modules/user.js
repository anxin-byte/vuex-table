// import {login} from "@/services/auth"
// import {setToken} from "@/utils/auth"
export default {
  namespaced: true,
  state:{
    title:'登录',
    user:{},
    token:''
  },
  // mutations: {
  //   loginEnd(state, payload){
  //    state.user.userName=payload.userName;
  //    state.token=payload.token
  //    setToken(payload.token)
  //   }
  // },
// actions: {
//   async login({commit,dispatch},payload){
//     const res=await login(payload)
//     console.log(res);
//     if(res.code==='success'){
//       commit("loginEnd",{
//         token:res.token,
//         userName:payload.userName
//       })
//       window.location.href="/#/";
//     } else {
//      alert('失败')
//     }
// }
// }
}