<template>
  <div class="hello">
  <el-table height="350px" v-loading="loading_table" :data="table_data" border style="width:100%">
     <el-table-column v-if="table_config.checkbox" type="selection" width="35"></el-table-column>
    
    <template  v-for="item in this.table_config.thead" >
    <!-- 回调 -->
     <el-table-column v-if="item.type==='function'" :key="item.prop"  :prop="item.prop" :label="item.label">
       <template slot-scope="scope">
        <span v-html="item.callback&&item.callback(scope.row,item.prop)"></span>
       </template>
     </el-table-column>
    <!-- 插槽 -->
     <el-table-column v-else-if="item.type==='slot'" :key="item.prop"  :prop="item.prop" :label="item.label">
       <template slot-scope="scope">
        <slot :name="item.slotName" :data="scope.row"></slot>
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
  <el-row>
    <el-col :span="4"><div class="left" style="min-height:30px"></div></el-col>
    <el-col :span="16">
      <div class="left" style="min-height:30px">
          <el-pagination
          v-if="table_config.pagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
      </div>
    </el-col>
    <el-col :span="4"><div class="left" style="min-height:30px"></div></el-col>
  </el-row>
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
     checkbox:'',
     pagination:true,
     data:{}
    //  aaa:'11'
   },
   table_data:[],
   total:0,
   currentPage:1,
   loading_table:false
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
    },
    handleSizeChange(val){
      console.log(val);
    },
    handleCurrentChange(val){
      console.log(val);
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
