<template>
  <div class="about">
    <h1>{{title}}</h1>
    <h2>333</h2>
    <div class="box">倒计时 <span class="count-number">{{timerCount < 10 ? '0' + timerCount : timerCount}}</span> 秒</div>
    <div class="box">倒计时 <span class="count-number">{{mintue < 10 ? '0' + mintue : mintue}}</span>分</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'About',
  data(){
    return{
      timerCount: 0,
      seconds:120,
      mintue:''
    }
  },
   mounted() {
         this.timing();
     },
     methods: {
         timing() {
             let startTime = localStorage.getItem('startTime1');
             let nowTime = new Date().getTime();
             if(startTime) {
                  let surplus = this.seconds - parseInt((nowTime-startTime) / 1000, 10);
                  this.timerCount = surplus <= 0 ? 0 : surplus;
                  // this.mintue=parseInt(this.timerCount/60)
             } else {
                  this.timerCount = this.seconds;
                  // this.mintue=parseInt(this.timerCount/60)
                  localStorage.setItem('startTime1', nowTime);
             }

             let timer = setInterval(() => {
                  if(this.timerCount > 0 && this.timerCount <= this.seconds) {
                      this.timerCount--;
                    //  this.mintue=parseInt(this.timerCount/60)
             　　  } else {
                      localStorage.removeItem('startTime1');
                      clearInterval(timer);
                  }
             }, 1000);
          // this.timerCount=parseInt(this.timerCount/1000)
         }
         },
         watch: {
           timerCount(val){
            console.log(val);
            this.mintue=parseInt(val/60)
            // nextTick()
           },
          //  mintue(val){
          //    console.log(val);
          //  }
         },
 computed: {
   ...mapState('User',['title'])
 }
}
</script>

<style>

</style>

