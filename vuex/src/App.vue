<template>
  <div id="app">
    <el-container class="main">
      <el-header>教务管理系统</el-header>
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
              <!-- <el-menu-item-group> -->
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item index="1-1"><router-link to="/">首页</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/about">相关页面</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/map">地图页面</router-link></el-menu-item>
              <!-- </el-menu-item-group> -->
              <!-- <el-submenu index="1-4">
                <template slot="title">分组二</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu> -->
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
    <!-- <div id="nav">
     
      <router-link to="/about">About</router-link>|
      <router-link to="/map">Map</router-link>
    </div>
    <router-view/> -->
  </div>
</template>
<script>
export default{
  data(){
    return{

    }
  },
  methods:{
    handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
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
