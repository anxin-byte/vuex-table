<template>
  <div class="home">
    <h1>{{$store.state.title}}</h1>
    <h2>数量：{{$store.state.count}}</h2>
    <h1>当前购物车的数量{{ $store.getters.cartCount }}</h1>
    <button @click="add">加</button>
    <button @click="sort">减</button>
    <button @click="async">异步加一</button>
    <vueform :rules="rules" :formItem="form_item" :formHandler="form_handler">
      <!-- <template v-slot:city>
      <CitySelect ref="cityArea" :mapLocation="true" :cityAreaValue.sync="form.area" @callback="callbackComponent"/>
      </template> -->
    </vueform>
  </div>
</template>

<script>
// @ is an alias to /src
import vueform from '@/components/vueform.vue'
import Vueform from '../components/vueform.vue'
export default {
  name: 'Home',
  components: {
    vueform
    // Vueform
  },
 data(){
 return{
   form_item:[
     {
       type:"Input",label:"停车场名称",placeholder:"请输入名字",prop:"parkname",width:'300px'
     },{
       type:"Input",label:"地址",placeholder:"请输入地址",prop:"address",width:'300px'
     },{
       type:"Radio",label:"类型",options:[{"value":'1'},{"value":'2'}],prop:"type",width:'300px'
     },{
       type:"Input",label:"可停放车辆",placeholder:"请输入数量",prop:"carnumber",width:'300px'
     },{
       type:"Radio",label:"禁启用",options:[{"value":'禁用'},{"value":'启用'}],prop:"status",width:'300px'
     },
    //  {
    //    type:"Slot",value:[],prop:'area's,lotName:"city",label:"位置"
    //  }
    {
       type:"Input",label:"经纬度",placeholder:"请输入",prop:"address2",width:'300px',disabled:true
     }
   ],
   form_handler:[{
     label:"确定",key:"submit",type:"danger",handler:()=>this.submit()
   },{
     label:"重置",key:"reset",handler:()=>this.add()
   }],
   form:{
     parkname:'',
     address:'',
     type:'',
     carnumber:'',
     status:'',
     address2:'',
     area:''
   },
   rules:{
     parkname:[{required:true,message:"请输入停车场名称",trigger:"change"}],
     address:[{required:true,message:"请输如地址",trigger:"change"}]
   }
 }
 } ,
      // 如果要改变数据，只能通过commit提交一个mutation
      //  commit 接收两个参数
      //    参数一 muttion的名字
      //    参数二 传递的数据
  methods: {
    submit(){
      console.log(this.form);
    },
    add(){
     this.$store.commit('add')
    },
    sort(){
     this.$store.commit('sort',{step:1})
    },
    // 异步加9
    async(){
      this.$store.dispatch("addAsync",9)
    }
  }

}
</script>
