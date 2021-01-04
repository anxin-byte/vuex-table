<template>
<div>
    <!-- <div id="map" class="map"></div> -->
    <div>
       <el-cascader
    v-model="value"
    :show-all-levels="false"
    :options="options"
    :placeholder="placeholder"
    :props="{ expandTrigger: 'hover' }"
    @change="handleChange"></el-cascader>
    </div>
</div>
</template>
 
<script>
import 'ol/ol.css'
import olMap from 'ol/Map'
import olView from 'ol/View'
import ollayerTile from 'ol/layer/Tile'
import olsourceOSM from 'ol/source/OSM'
import {get as getProjection} from 'ol/proj';
export default {
    name: 'Map',
    data () {
        return {
            value: ["dingbudaohang"],
            map:null,
            view:null,
            placeholder:'w微博拜拜',
             options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
          },
          {
            value: 'shejiyuanze',
            label: '设计原则',
          }],  
         },
         {
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
    },
    methods:{
       handleChange(value) {
        console.log(value);
      }
    },
    // mounted(){
    //     var projection = getProjection('EPSG:4326');
    //     this.map = new olMap({
    //         target:'map',
    //         layers:[
    //             new ollayerTile({
    //                 source:new olsourceOSM()
    //             })
    //         ],
    //         view:new olView({
    //             center: [108,30],
    //             projection: projection,
    //             zoom:5
    //         })
    //     });
    //     var l1 = new ol.layer.Tile({
    //         source: new ol.source.XYZ({
    //           url: "http://t3.tianditu.com/DataServer?T=cta_w&x={x}&y={y}&l={z}"// 注记
    //         })
    //       });
    //       var l2 = new ol.layer.Tile({
    //         source: new ol.source.XYZ({
    //           url: "http://t3.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}"  // 行政区划
    //         })
    //       });
    //       var map = new ol.Map({
    //         target: 'map',
    //         view: new ol.View({
    //           center: ol.proj.fromLonLat([108.532, 34.145]),
    //           zoom:5,
    //           // minZoom: 5
    //         }),
    //         controls: [
 
    //         ]
 
    //       });
    //       map.addLayer(l1);
    //       map.addLayer(l2);
    // }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .map {
        height: 100px;
        width: 100px;
    }
</style>