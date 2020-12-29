<template>
  <div class="nav">
    <ul class="select">
      <li>选择车辆1</li>
      <li>选择车辆2</li>
      <li @click="Touser">选择车辆3</li>
    </ul>
  </div>
</template>

<script>
export default {
name:"navbar",
data(){
  return{}
},
methods: {
  Touser(){
    this.$router.push({name:"indexUser"})
  }
}
}
</script>

<style lang="scss" scoped>
.nav{
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
}
.select{
  li{
    float: left;
    margin-right:30px ;
    display: block;
    flex: 1;
    margin-bottom: 30px;
  }
}
</style>