<template>
   <el-cascader v-model="value" :options="cascader_options" @change="handleChange" :props="cascader_props" ></el-cascader>
</template>

<script>
export default {
  name:'city', 
  props:{cityArea:{
    type:String,
    default:''
  }},
  data () {
  return {
   value:'',
    cascader_options:[
      {
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }
    ],
     cascader_props: {
          lazy: true,
          lazyLoad (node, resolve) {
            const { level } = node;
            // const level  = node;
            const requestData={}
            const jsonType = { 
              0:{type:"rovince"},
              1:{type:"city",code:"province"},
              2:{type:"area",code:"city"}
            }

           if(jsonType[level].code){requestData[`${jsonType[level].code}_code`]=node.value}
           requestData.type=jsonType[level].type
          //  接口请求返回requestData 定义变量处理数据
           
              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
              resolve(node);
          }
        }
  }
},
methods: {
      handleChange(value) {
            this.$emit("update:cityArea",value.join(','))
        // console.log(value.join(','));
      }
    }
}
</script>

<style>

</style>