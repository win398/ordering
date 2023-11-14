<template>
  <div id="app">
    <van-tabbar v-model="active"  active-color="#47bff7" inactive-color="#000" v-if="func_show">
      <van-tabbar-item to="/"><span class="iconfont">&#xe607;</span><br>首页</van-tabbar-item>
      <van-tabbar-item to="/"><span class="iconfont">&#xe620;</span><br>推荐</van-tabbar-item>
      <van-tabbar-item to="/UserOrder"><span class="iconfont">&#xe626;</span><br>订单</van-tabbar-item>
      <van-tabbar-item to="/Mine"><span class="iconfont">&#xe618;</span><br>我的</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
     if (this.$route.name==='Index' || this.$route.name === 'Mine' || this.$route.name === 'UserOrder' )
        this.func_show = true
  },
  data() {
    return {
      func_show:false,
      active:0,
    };
  },
   watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "fetchDate"
    },
    methods:{
      fetchDate(){
        if (this.$route.name !== 'Index' && this.$route.name !== 'Mine' && this.$route.name !== 'UserOrder'){
          this.func_show = false
        }else {
          this.func_show = true
        }
 
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
