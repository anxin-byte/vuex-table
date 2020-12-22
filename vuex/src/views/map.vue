<template>
    <div id="map" class="map"></div>
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
            map:null,
            view:null
        }
    },
    mounted(){
        var projection = getProjection('EPSG:4326');
        this.map = new olMap({
            target:'map',
            layers:[
                new ollayerTile({
                    source:new olsourceOSM()
                })
            ],
            view:new olView({
                center: [108,30],
                projection: projection,
                zoom:5
            })
        });
        var l1 = new ol.layer.Tile({
            source: new ol.source.XYZ({
              url: "http://t3.tianditu.com/DataServer?T=cta_w&x={x}&y={y}&l={z}"// 注记
            })
          });
          var l2 = new ol.layer.Tile({
            source: new ol.source.XYZ({
              url: "http://t3.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}"  // 行政区划
            })
          });
          var map = new ol.Map({
            target: 'map',
            view: new ol.View({
              center: ol.proj.fromLonLat([108.532, 34.145]),
              zoom:5,
              // minZoom: 5
            }),
            controls: [
 
            ]
 
          });
          map.addLayer(l1);
          map.addLayer(l2);
    }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .map {
        height: 400px;
    }
</style>