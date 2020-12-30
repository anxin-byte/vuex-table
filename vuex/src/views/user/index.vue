<template>
  <div class="user">
    <h1 >会员列表页面</h1>
    <ul>
    <router-link to="aa" class="aaa">我的账户<i></i></router-link><br>
    <router-link to="aa" class="aaa">我的订单<i></i></router-link><br>
    <router-link to="/indexsafe" class="aaa">安全设置<i></i></router-link><br>
    <router-link to="aa" class="aaa">用户中心<i></i></router-link><br>
    </ul>
    <button class="btn">退出</button>
  </div>
</template>

<script>

export default {

}
</script>

<style scped>
.btn{
  height: 35px;
  line-height: 35px;
  padding: 0px 15px;
}
.user{
  width: 100%;
  color:saddlebrown;
}
</style>