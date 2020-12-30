<template>
<div>
  <VueTable  :config="table_config">
    <!-- 插槽 -->
    <!-- 禁启用 -->
    <template v-slot:status="slotData">
    <el-switch v-model="slotData.data.status" active-value="2" inactive-value="1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </template>

    <!-- 查看地图 -->
     <template v-slot:see="slotData">
     <el-button type="success" @click="seeMap(slotData.data)" size="mini">查看地图</el-button>
     <el-button></el-button>
    </template>

    <!-- 操作 -->
    <template v-slot:operation="slotData">
     <el-button @click="edit(slotData.data.id)" type="primary">编辑</el-button>
      <el-button @click="del(slotData.data.id)" type="danger">删除</el-button>
     <el-button></el-button>
    </template>
  </VueTable>
</div>
</template>

<script>
import VueTable from '@/components/VueTable.vue'
// 引用封装的表格组件
export default {
    name: 'Vuetable',
  data(){
    return{
     table_config:{
       thead:[
         {label:'停车场名称',prop:'parkingName'},
        //  {label:'类型',prop:'type',type:"function",callback:(row,prop)=>{
        //    const data=this.parking_type.filter(item=>item.value==row.[prop])
        //    if(data&&data.length>0){
        //      return data[0].label
        //    }
        // 第二种方法
        //  const data=this.this.parking_type_json[row[prop]]
       
       // if(data){
        //  return data.label
        // } 
            // console.log(data);
        //    console.log(row)}},
         {label:'类型',prop:'type',type:"function",callback:()=>{return '数据被修改了'}}, // 使用时对callback进行封装，在callback里调用公共函数 call(){return this.add(row,prop)}
        //  {label:'区域',prop:'address',type:"images"},
         {label:'区域',prop:'address',type:"function",callback:(row,prop)=>{ if(row[prop]){return row[prop]}else{console.log(row[prop])}}},
         {label:'可停放车辆',prop:'carsNumber'},
         {label:'禁启用',prop:'status',type:"slot"},
         {label:'操作'}
         ],
         checkbox:true,
         url:'/api/data',
      //  aaa:'999'
     },
    //  table_data:[{parkingName:"上海1",type:"公共场地1",address:'浦东8',carsNumber:18,status:0}]
    }
  },
  created () {
    // this.table_data=JSON.parse(loadData().innerList)
    // this.table_data=loadData().innerList
    // console.log(this.table_data)
  },
  methods: {
   edit(val){
      console.log(val);
   },
   del(val){
     console.log(val);
   },
    seeMap(val){
      console.log(val);
    }
  },
components: {
  VueTable
}
}
</script>

<style>

</style>