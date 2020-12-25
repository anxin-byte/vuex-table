<template>
  <div class="home">
    <h1>{{$store.state.title}}</h1>
    <h1><i class="iconfont iconbishi"></i></h1>
    <h1><i class="iconfont icon-mianxingbingbao"></i></h1>
    <h2>数量：{{$store.state.count}}</h2>
    <h1>当前购物车的数量{{ $store.getters.cartCount }}</h1>
    <button @click="add">加</button>
    <button @click="sort">减</button>
    <button style="margin:22px 0px" @click="async">异步加一</button>
    <vueform ref="VuForm" :rules="rules" :formData="form_data" :formItem="form_item" :formHandler="form_handler">
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
   let validatePass=(rule,value,callback)=>{
     if(!value){
       callback(new Error('请输入停车场名称rules'))
     }else{
       callback()
     }
   }
    let validateNumber=(rule,value,callback)=>{
      const regNumber=/^[0-9]*$/;
     if(!value){
       callback(new Error('请输入停放车辆'))
     }else if(!regNumber.test(value)){
       callback(new Error('请输入数字'))
     } else{
       callback()
     }
   }
 return{
   form_item:[
     {
       type:"Input",label:"停车场名称",placeholder:"请输入名字",prop:"parkname",width:'300px'
     },{
       type:"Input",label:"地址",placeholder:"请输入地址",prop:"address",width:'300px'
     },{
       type:"Radio",label:"类型",options:[{"value":'1'},{"value":'2'}],prop:"type",width:'300px'
     },{
       type:"Input",label:"可停放车辆",placeholder:"请输入数量",prop:"carnumber",width:'300px',
       validator:[{validator:validateNumber,trigger:'change'}]
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
  //  form:{
  //    parkname:'',
  //    address:'',
  //    type:'',
  //    carnumber:'',
  //    status:'',
  //    address2:'',
  //    area:''
  //  },
   rules:{
     parkname:[{required:true,validator: validatePass,trigger:"change"}],
    //  address:[{required:true,message:"请输如地址rule",trigger:"change"}]
   },
   form_data:{
     parkname:'',
     address:'',
     type:'',
     carnumber:'',
     status:'',
     address2:'',
     area:''
   },
  //  id:'000'
 }
 } ,
      // 如果要改变数据，只能通过commit提交一个mutation
      //  commit 接收两个参数
      //    参数一 muttion的名字
      //    参数二 传递的数据
  methods: {
    // 提交表单
    submit(){
      console.log(this.$refs);
      this.$refs.VuForm.$refs.form1.validate((valid)=>{
       if(valid){
         console.log(valid);
         console.log(this.id);
         this.id?this.sort():this.add()
       }else{
         console.log('error submit1！！');
         return false
       }
      })
      // console.log(this.form);
    },
    add(){
       this.$refs.VuForm.$refs.form1.resetFields();
      console.log(this.form_data);
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
<style scoped>
.home{
  height: 1000px;
}
</style>
