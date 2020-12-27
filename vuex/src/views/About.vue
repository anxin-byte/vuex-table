<template>
  <div class="about">
    <h1>{{title}}</h1>
    <h2>333</h2>
    <div class="box">倒计时 <span class="count-number">{{timerCount < 10 ? '0' + timerCount : timerCount}}</span> 秒</div>
    <div class="box">倒计时 <span class="count-number">{{mintue < 10 ? '0' + mintue : mintue}}</span>分</div>
    <Vueform ref="Vueform" :rules="rules" :formData="form_data"  :formHandler="form_handler" :formItem="form_item"></Vueform>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import Vueform from '../components/vueform.vue'
export default {
  name: 'About',
  data(){
  let userid1=(rule,value,callback)=>{
     const regNumber=/^[0-9]*$/;
     if(!value){
       callback(new Error('请输入学号id'))
     }else if(!regNumber.test(value)){
       callback(new Error('请输入数字'))
     } else{
       callback()
     }
   }
    let collage1=(rule,value,callback)=>{
     if(!value){
       callback(new Error('请选择学院'))
     }else{
       callback()
     }
   }
    let username1=(rule,value,callback)=>{
     if(!value){
       callback(new Error('请输入用户名'))
     }else{
       callback()
     }
   }
   let password1=(rule,value,callback)=>{
     if(!value){
       callback(new Error('请输入密码'))
     }else{
       callback()
     }
   }
   let surepassword1=(rule,value,callback)=>{
      if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form_data.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
   }
    return{
      timerCount: 0,
      seconds:120,
      mintue:'',
      form_item:[
        {type:"Input",label:"学号",prop:"userid",width:'300px',validator:[{validator:userid1,trigger:'change'}]},
        {type:"Select",label:"选择学院",options:[{"value":'信息工程'},{"value":'计算机'}],prop:"collage",width:'300px',validator:[{validator:collage1,trigger:'change'}]},
        // {type:"Input",label:"选择学院",prop:"collage",width:'300px'},
        {type:"Input",label:"用户名",prop:"username",width:'300px',validator:[{validator:username1,trigger:'change'}]},
        {type:"password",label:"密码",prop:"password",width:'300px',validator:[{validator:password1,trigger:'change'}]},
        {type:"password",label:"确认密码",prop:"surepassword",width:'300px',validator:[{validator:surepassword1,trigger:'change'}]}
      ],
      form_handler:[{label:"确定",key:"submit",type:"danger",handler:()=>this.submit()}],
      rules:{
    //  userid:[{required:true,validator:userid1 ,message:"请输入学号",trigger:"blur"}],
    //  collage:[{required:true,validator:collage1,message:"请选择学院",trigger:"blue"}],
    //  username:[{required:true,validator:username1,message:"请输入用户名",trigger:"blur"}],
    //  password:[{required:true,validator:password1,message:"请输ru密码",trigger:"blur"}],
    //  surepassword:[{required:true,validator:surepassword1,message:"请确认密码",trigger:"blur"}]
   },
      form_data:{
        userid:'',
        collage:'',
        username:'',
        password:'',
        surepassword:''
      },

    }
  },
  components: {
    Vueform
  },
   mounted() {
        //  this.timing();
     },
     methods: {
      submit(){
      console.log(this.$refs);
      this.$refs.Vueform.$refs.form1.validate((valid)=>{
       if(valid){
         console.log(valid);
         console.log(this.form_data);
         this.id?this.sort():this.add()
       }else{
         console.log('error submit1！！');
         return false
       }
      })
      // console.log(this.form);
    },
    sort(){
     console.log('sort');
    }, 
    add(){
     console.log(this.form_data);
     console.log('add');
     this.timing()
    },
         timing() {
          //  this.form_data 数据置空的同时，打印的数据也空了，涉及到深拷贝和浅拷贝问题，因为地址是一样的
        //        this.$nextTick(() => {
        // this.$refs.Vueform.resetFields();
        // console.log(this.form_data);
        //   })
              setTimeout(()=>{
                    this.$refs.Vueform.$refs.form1.resetFields();
                    console.log(this.form_data);
                },10000)
             let startTime = localStorage.getItem('startTime1');
             let nowTime = new Date().getTime();
             if(startTime) {
                  let surplus = this.seconds - parseInt((nowTime-startTime) / 1000, 10);
                  this.timerCount = surplus <= 0 ? 0 : surplus;
                  // this.mintue=parseInt(this.timerCount/60)
             } else {
                  this.timerCount = this.seconds;
                  // this.mintue=parseInt(this.timerCount/60)
                  localStorage.setItem('startTime1', nowTime);
             }

             let timer = setInterval(() => {
                  if(this.timerCount > 0 && this.timerCount <= this.seconds) {
                      this.timerCount--;
                    //  this.mintue=parseInt(this.timerCount/60)
             　　  } else {
                      localStorage.removeItem('startTime1');
                      clearInterval(timer);
                  }
             }, 1000);
          // this.timerCount=parseInt(this.timerCount/1000)
         }
         },
         watch: {
           timerCount(val){
            console.log(val);
            this.mintue=parseInt(val/60)
            // nextTick()
           },
          //  mintue(val){
          //    console.log(val);
          //  }
         },
 computed: {
   ...mapState('User',['title'])
 }
}
</script>

<style>

</style>

