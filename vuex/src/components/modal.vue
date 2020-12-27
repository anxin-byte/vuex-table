<template>
  <div class="diolog">
    <el-dialog
     :close-on-click-modal="false"
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <span>试题一</span>
      <vueSelect ref="Vueform" :rules="rules" :formData="form_data"  :formHandler="form_handler" :formItem="form_item" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false;submit()">完成</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import vueSelect from './vueSelect.vue';
export default {
 props:{flagvisible:{type:Boolean,default:false},messages:{type:Object,default:()=>{}}},
 data() {
      return {
        dialogVisible: false,
        form_item:[
          {type:'Radio',prop:'select',}
          ],
          rules:{},
          form_data:{
            route:'',
            right:[]
          },
      form_handler:[{label:"完成",key:"submit",type:"primary",handler:()=>this.submit()}],
      };
    },
    components: {
        vueSelect
    },
    created () {
      // 路径打印对此 能跟在create里有关，换成method里面
      // this.eventBus.$on('message',this.message())
    },
    mounted () {
      // this.dialogVisible=this.flagvisible
      // this.eventBus.$on('message',this.message)
    },
    beforeDestroy () {
      // this.eventBus.$off('message')
      //  this.offxxxListener();
    },
    // updated () {
    //   console.log(this.dialogVisible);
    // },
    methods: {
      
    // offxxxListener: function () {
    // this.eventBus.$off('message')
    // this.$root.Bus.off("事件名");
    // this.$root.Bus.off("事件名");
    // },
      message(val){
      // this.dialogVisible=val.dialogVisible
      console.log(this.messages);
      this.form_data.route= this.messages.route
      if(this.messages.test){
        this.form_data.right=JSON.parse(this.messages.test)
      }
      console.log(this.form_data);
      // console.log(val);
      },
      submit(){
        // console.log(this.$refs);
        const obj={
            route:'',
            right:[]
          }
       this.$refs.Vueform.$refs.form1.validate((valid)=>{
       if(valid){
        //  console.log(valid);
        console.log(this.form_data);
        // obj.route=JSON.parse(JSON.stringify(this.form_data.route.name))
        // obj.right=JSON.parse(JSON.stringify(this.form_data.right)) 
        sessionStorage.setItem(this.form_data.route,JSON.stringify(this.form_data.right));
        //  console.log(this.form_data);
         this.form_data={
            route:'',
            right:[]
          }
        console.log(this.form_data);
          // })
       }else{
         console.log('error submit1！！');
         return false
       }})
       this.dialogVisible = false
      //  this.flagvisible=false
       console.log('11');
      },
      handleClose(done) {
       this.dialogVisible = false

        // this.$confirm('确认关闭？')
        //   .then(_ => {
        //     done();
        //   })
        //   .catch(_ => {});
      },
      load(){
          this.eventBus.$emit('change',{flag:false})
      }
    },
    watch: {
     flagvisible(newval,oldval){
        console.log(newval);
        // this.dialogVisible = newval
        if(newval){
        this.dialogVisible = newval
        this.message()
         
        // else {
        // this.flagvisible=newval
        // console.log(flagvisible);
        // this.eventBus.$emit('change',{flag:newval})

        // this.dialogVisible = newval
        }
      
     },
 
     dialogVisible(newl,old){
          console.log(33333);
         if(!newl){
           this.load()
         }
        }
        // this.message()
      }
    
}
</script>

<style lang="scss" scoped>
 /deep/ .el-dialog{
  height: 75%;
  overflow-y: scroll;
}
</style>