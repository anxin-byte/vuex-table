<template>
  <el-form :rules="rules"  ref="form1" :model="formData" label-width="120px">
    <el-form-item v-for="item in formItem" :key="item.prop" :label="item.label" :prop="item.prop" :rules="item.rules">
      <el-input v-model="formData[item.prop]" v-if="item.type==='Input'" :disabled="item.disabled" :style="{width:item.width}" :placeholder="item.placeholder"></el-input>
      <el-input v-model="formData[item.prop]" v-if="item.type==='password'" type="password" :disabled="item.disabled" :style="{width:item.width}" :placeholder="item.placeholder"></el-input>
      <el-radio-group v-model="formData[item.prop]" v-if="item.type==='Radio'">
       <el-radio v-for="item in item.options" :label="item.value" :key="item.value"></el-radio>
      </el-radio-group>
    <el-select v-if="item.type==='Select'" v-model="formData[item.prop]" :placeholder="item.placeholder">
      <el-option v-for="item in item.options" :label="item.value" :key="item.value"  :value="item.value"></el-option>
    </el-select>
      <!-- <slot v-if="item.type===Slot" :name="item.slotName"/> -->
    </el-form-item>
    <el-form-item>
     <el-button v-for="item in formHandler" @click="item.handler && item.handler();log()" :key="item.key" :type="item.type">{{item.label}}</el-button>
     <!-- <el-button @click="resetForm('ruleForm')">重置</el-button>
     <el-button type="danger" :loading="button_loading" @click="onSubmit(form)">立即创建</el-button> -->
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'Form',
  props: {
    formItem:{
      type:Array,
      default:()=>[]
      },
      formHandler:{
        type:Array,
      default:()=>[]
      },
      formData:{
        type:Object,
        default:()=>{}
      },
      rules:{
         type:Object,
        default:()=>{}
      }
  },
  data(){
    return{
      form:{}
    }
  },
  methods: {
    log(){
      console.log('log');
    },
    initFormData(){
      // const formData={}
      this.formItem.forEach(item=>{
        // if(item.prop){formData[item.prop]=item.value || null}
        // 规则验证
        // if(item.required){this.rules(item)}
        // 自定义校验规则
        if(item.validator){item.rules=item.validator}
      })
      this.form.id='0909'
      //  console.log(this.formItem);
    },
    // rules(item){
    // const requiredRules=[{required:true,message:item.required_msg||`${this.type_msg[item.type]}${item.label}`,trigger:'change'}]
    // // 其他的规则
    // if(item.rules&&item.rules.length>0){
    //   item.rules=requiredRules.concat(item.rules)
    // }else{
    //   item.rules=requiredRules
    // }
    // }
  },
  watch: {
    formItem:{
      handler(newValue){
        this.initFormData()
        // console.log(newValue);
      },
      immediate:true
    }
  }
}
</script>