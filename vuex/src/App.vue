<template>
  <div id="app">
    <el-container class="main">
      <el-header>教务管理系统
        <p style="color:#fff;float:right;" @click="open()"><button>答题</button></p>
        <p style="color:red;float:right;" @click="submit()"><button :class="{'isactive':!current}">{{current?'提交':'未完成'}}</button></p>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航目录</span>
              </template>
                <el-menu-item index="1-1"><router-link to="/">首页</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/about">相关页面</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/table">表格封装</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/add">新增页面</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/map">地图页面</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
   <dialog1/>
  </div>
</template>
<script>
import dialog1 from "@/components/modal.vue"
export default{
  data(){
    return{
      route:'',
      current:true
    }
  },
  components: {
     dialog1
  },
  methods:{
    open(){
      // this.$route
      this.route=this.$route.name
      let message={dialogVisible:true,route:this.route}
      if(sessionStorage.getItem(this.route)){
         message.test=sessionStorage.getItem(this.route)
      }
      this.eventBus.$emit('message',message)
      // console.log(open);
    //  dialogVisible=true
    //  console.log(this.$route);
    },
    submit(){
    //  匹配所有路由信息
    let answer={}
    this.$router.options.routes.map(v=>{
      if(sessionStorage.getItem(v.name)){
        answer[v.name]=JSON.parse(sessionStorage.getItem(v.name))
        sessionStorage.removeItem(v.name)
      }
    })
    // 提交失败改变颜色
    this.current=false
    setTimeout(()=>{this.current=true},3000)
     console.log(this.$router.options.routes);
     console.log(answer);
     console.log('submit');
    },
    handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  // watch: {
  //   dialogVisible(val,li){
  //    deep: true 
  //    console.log(val);
  //    console.log(li);
  //   }
  // }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
html,body{
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}
.isactive{color:red}
.el-header {
    background-color: #303133;
    color: #fff;
    width: 100%;
    overflow: hidden;
    font-weight: 900;
    font-size: 30px;
    text-align: left;
    padding:0px 0px 0px 100px;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #303133;
    color: #ffffff;
    /* text-align: center; */
    height: 100%;
  }
  .el-menu-vertical-demo a{
   outline:none;
   background: none;
   padding-left: 50px;
   text-decoration: none;
   display: block;
   text-align: center;
   color: #fff;
   /* font-size: 20px; */
  }
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    height: 100%;
    overflow-y: scroll !important;
  }
  
 .main {
    height: 100%;
  }
  .el-container .is-vertical{
    height: 100%;
  }
   .el-container{
     height: 100%;
   }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
