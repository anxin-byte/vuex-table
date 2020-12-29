<template>
<div class="import">
  <!-- <Carts/> -->
  <Index/>
  <NavBar/> 
  <!-- <div class="child" :class="[show?'open':'']"> -->
  <div id="childer" class="child" :class="{open:show}">
  <router-view></router-view>
  </div>
</div>
</template>

<script>
import Index from '@/views/home/index.vue'
import Carts from '@/views/carts/index.vue'
import NavBar from '@/views/navbar/index.vue'

export default {
 name:"index",
 components: {
   Index,Carts,NavBar
 },
 data(){
  return {
    // show:false
  }
 },
 mounted () {
   document.addEventListener("mouseup",(e)=>{
     const userCon=document.getElementById("childer")
     if(userCon){
       if(userCon&&!userCon.contains(e.target)){
         this.$router.push({name:"index"})
       }
    //  console.log(e);
     }
   })
 },
 computed: {
   show(){
     const router=this.$route
     return router.name === "indexUser" ? true : false
     console.log(router);
   }
 },
 watch: {
  //  监听路由的变化
  //  "$route":{
  //    handler(newValue){
  //      const routerName = newValue.name;
  //      this.show = routerName === "indexUser" ? true : false
  //      console.log(this.show);
  //    }
  //  }
 }
}
</script>

<style lang="scss" scoped>
// [E=Attr] //获取所有以Attr='开头的所有元素
.import{
  position: relative;
  height: 100%;
  width: 100%;
  .child {
    position: absolute;
    bottom: 0px;
    right: -300px;
    width: 20%;
    height: 100%;
    background:skyblue;
    transition: all .3s ease 0s;
    &.open{
      right: 0;
    }
  }
}
</style>