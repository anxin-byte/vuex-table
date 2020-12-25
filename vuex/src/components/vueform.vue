<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item v-for="item in formItem" :key="item.prop" :label="item.label" :prop="item.prop">
      <el-input v-model="form[item.prop]" v-if="item.type==='Input'" :disabled="item.disabled" :style="{width:item.width}" :placeholder="item.placeholder"></el-input>
      <el-radio-group v-model="form[item.prop]" v-if="item.type==='Radio'">
       <el-radio v-for="item in item.options" :label="item.value" :key="item.value"></el-radio>
      </el-radio-group>
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
      }
  },
  data(){
    return{
      form:{}
    }
  },
  methods: {
    initFormData(){
      const formData={}
      this.formItem.forEach(item=>{
        if(item.prop){formData[item.prop]=item.value || null}
      })
      this.form=formData
      //  console.log(formData);
    },
    log(){
      console.log(this.form);
    }
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