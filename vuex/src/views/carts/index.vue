<template>
<div class="cart">
   <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
    <CartList/>
    </swiper-slide>
    <swiper-slide>
       <CartList/>
    </swiper-slide>
    <swiper-slide>
        <CartList/>
    </swiper-slide>
    <swiper-slide>
        <CartList/>
    </swiper-slide>
  
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
  <span @click="push">车辆列表</span>
</div>
</template>

<script>
import CartList from '../cardlist/index.vue'
 import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
 import 'swiper/swiper-bundle.css'
  
export default {
 name:"carts",
  components: {
      Swiper,
      SwiperSlide,
      CartList
    },
    data(){
      return {
        swiperOptions: {
                slidesPerView:3,
                spaceBetween:30,
                pagination: {
                  el: '.swiper-pagination',
                  clickable:true
                },
                // Some Swiper option/callback...
              }
      }
    },
 methods: {
   push(){
     this.$router.push({name:"indexUser"})
   }
 }
}
</script>

<style lang="scss" scoped>
@import url(./index.scss);

</style>