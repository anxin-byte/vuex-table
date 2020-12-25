<template>
  <div class="hello">
  <el-table :data="table_data" border style="width:100%">
     <el-table-column v-if="table_config.checkbox" type="selection" width="35"></el-table-column>
    
    <template  v-for="item in this.table_config.thead" >
    <!-- 回调 -->
     <el-table-column v-if="item.type==='function'" :key="item.prop"  :prop="item.prop" :label="item.label">
       <template slot-scope="scope">
        <span v-html="item.callback&&item.callback(scope.row,item.prop)"></span>
       </template>
     </el-table-column>
    
    <!-- <el-table-column v-else-if="item.type==='images'" :key="item.prop"  :prop="item.prop" :label="item.label">
       <template slot-scope="scope">
        <el-input></el-input>
       </template>
     </el-table-column> -->

     <!-- 纯文本 -->
     <el-table-column v-else :key="item.prop"  :prop="item.prop" :label="item.label"></el-table-column>

    </template>
  </el-table>
  </div>
</template>

<script>
import {loadData} from "@/api/data.js"

export default {
  // 表格组件封装
  name:'TableComponent',
  props:{
    config:{
      type:Object,
      default:()=>{}
    }
  },
  data(){
  return{
    // 建议接收的值从新配置
   table_config:{
     thead:[],
     url:'',
     checkbox:''
    //  aaa:'11'
   },
   table_data:[]
  }
  },
  beforeMount () {
    // this.getData()
  },
  methods: {
    initConfig(){
      for(let key in this.config){
        if(Object.keys(this.table_config).includes(key)){
          this.table_config[key]=this.config[key]
        }
      }
      // 初始化完成调取数据
    this.getData() //url
    console.log(this.table_config);
    },
    getData(){
    this.table_data=loadData().innerList
    }
  },
watch: {
  config:{
    // 监听传入值，执行操作并在table_config中换掉重新生成
    handler(newValue){
      this.initConfig()
      // console.log(newValue);
    },
    immediate:true
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
