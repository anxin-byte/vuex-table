<template>
  <el-dialog
  title="新增车辆品牌信息"
  center
  :visible.sync="dialogVisible"
   width="60%"
  :before-close="handleClose">
  <!-- <span>这是一段信息</span> -->
  <Vueform ref="VuForm" :rules="rules"  :formData="form_data" :formHandler="form_handler" :formItem="form_item" >
   <template v-slot:logo>
  <div class="upload-img">
    <!-- <img :src="logo_current" v-show="logo_current" > -->
    <img :src="form_data['imgUrl']" v-show="form_data['imgUrl']" >
  </div>
  <ul class="img-list">
    <!-- <li v-for="item in logo" :key="item.name" @click="logo_current=item.img"> -->
    <li v-for="item in logo" :key="item.name" @click="form_data['imgUrl']=item.img">
     <img :src="item.img" :alt="item.name">
    </li>
  </ul>
   </template>
  </Vueform>
  <!-- <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span> -->
</el-dialog>
</template>
<script>
import Vueform from "@/components/vueform.vue"
  export default {
    components: {
      Vueform
    },
    data() {
      let validatenameCh=(rule,value,callback)=>{
      if(!value){
        callback(new Error('请输入中文名称'))
      }else{
        callback()
      }
   }
    let validatenameEn=(rule,value,callback)=>{
      if(!value){
        callback(new Error('请输入英文名称'))
      }else{
        callback()
      }
   }
     let validatecontent=(rule,value,callback)=>{
      if(!value){
        callback(new Error('请输入内容'))
      }else{
        callback()
      }
     }
     let validatestatus=(rule,value,callback)=>{
      if(!value){
        callback(new Error('请输选择状态'))
      }else{
        callback()
      }
     }
      return {
        dialogVisible: false,
        // logo_current:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3232438348,3350389052&fm=26&gp=0.jpg',
        logo:[{img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3720844120,2936843332&fm=26&gp=0.jpg',name:1},
        {img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=119835866,2340977400&fm=26&gp=0.jpg',name:2},
        {img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2061396631,160016073&fm=26&gp=0.jpg',name:3},
        {img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1127594385,2522232496&fm=26&gp=0.jpg',name:4},
        {img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2219399971,704697303&fm=26&gp=0.jpg',name:5}],
        // 表单数据
        form_data:{
              nameCh:"",
              nameEn:"",
              imgUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3232438348,3350389052&fm=26&gp=0.jpg",
              status:"",
              content:""
        },
        form_item:[ {type:"Input",label:"品牌中文",prop:"nameCh"},
                    {type:"Input",label:"品牌英文",prop:"nameEn"},
                    {type:"Slot",label:"LOGO",slotName:"logo"},
                    {type:"Radio",options:[{"value":'禁用'},{"value":'启用'}],label:"品牌中文",prop:"status"},
                    {type:"Input",label:"品牌中文",prop:"content"}],
        // 表单
        form:{
              nameCh:"",
              nameEn:"",
              imgUrl:"",
              status:"",
              content:""
        },
        // 表单按钮
       form_handler:[{label:"确定",key:"submit",type:"danger",handler:()=>this.submit()}],
       rules:{
          nameCh:[{required:true,validator: validatenameCh,trigger:"change"}],
          nameEn:[{required:true,validator: validatenameEn,trigger:"change"}],
          status:[{required:true,validator: validatestatus,trigger:"change"}],
          content:[{required:true,validator: validatecontent,trigger:"change"}],
          
        },
      }
    },
    methods: {
      submit(){
        console.log(this.form_data);
        // console.log(this.$refs['VuForm'].$refs.form1.submit(data)); 可以调用组件的函数

        this.$refs.VuForm.$refs.form1.validate((valid)=>{
        if(valid){
          console.log(valid);
        }else{
          console.log('error submit1！！');
          return false
        }
        })   

        setTimeout(()=>{
          // for(let key in this.form_data){
          //   this.form_data[key]=''
          // }
        this.$refs.VuForm.$refs.form1.resetFields();
        console.log(this.form_data);
        },4000)
        console.log(222);
      },
      handleClose(done) {
      //   this.$confirm('确认关闭？')
      //     .then(_ => {
      //       done();
      //     })
      //     .catch(_ => {});
      }
    }
  };
</script>
<style lang="scss" scoped>
.upload-img img{
  width :400px;
  height: 300px;
}
.img-list li{
  width:100px;
  height: 100px;
  float:left;
  list-style: none;
}
.img-list img{
  width:100px;
  height: 100px;
  // float:left;
}
</style>