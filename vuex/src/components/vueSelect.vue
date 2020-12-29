<template>
  <el-form :rules="rules"  ref="form1" :model="formData">
    <el-form-item v-for="item in formItem" :key="item.prop" :label="item.label" :prop="item.prop" :rules="item.rules">
      <template v-if="item.type==='Radio'">
          <div v-for="(v,index) in data" :key="index" >
          <p>{{index+1}}、{{v.title}}</p>
          <br>
          <el-radio-group   v-model="formData.right[index]">
                <el-radio label="A">{{v.A}}</el-radio><br>
                <el-radio label="B">{{v.B}}</el-radio><br>
                <el-radio label="C">{{v.C}}</el-radio><br>
                <el-radio label="D">{{v.D}}</el-radio><br>
          </el-radio-group>
          </div>
      </template>
    </el-form-item>
     <el-form-item v-if="false">
     <el-button v-for="item in formHandler" @click="item.handler && item.handler(val);log()" :key="item.key" :type="item.type">{{item.label}}</el-button>
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
      form:{},
      data:[
        {title:'你最喜欢哪个城市？',A:'北京',B:'上海',C:'广州',D:'深圳'},
        {title:'你最喜欢哪个城市2？',A:'北京',B:'上海',C:'广州',D:'深圳'},
        {title:'你最喜欢哪个城市3？',A:'北京',B:'上海',C:'广州',D:'深圳'},
        {title:'你最喜欢哪个城市4？',A:'北京',B:'上海',C:'广州',D:'深圳'},
        {title:'你最喜欢哪个城市5？',A:'北京',B:'上海',C:'广州',D:'深圳'},
        {title:'你最喜欢哪个城市6？',A:'北京',B:'上海',C:'广州',D:'深圳'}
        ]
    }
  },
  methods: {
    log(){
      console.log('222');
    },
    initFormData(){
      this.formItem.forEach(item=>{
        if(item.validator){item.rules=item.validator}
      })
    },
  },
  watch: {
    formItem:{
      handler(newValue){
        this.initFormData()
      },
      immediate:true
    }
  }
}
</script>