<template>
  <div class="hello">
    <div class="mnav">
      <div class="mn_left" v-if="islogin">
        <img :src="hpicIp+user.image" alt="头像">
        <div class="uname"><span>{{user.uname}}</span></div>
      </div>
      <div class="mn_left" v-else>
        <img :src="hpicIp+user.image" alt="头像">
        <div class="uname"><span @click="login">点击此处登录</span></div>
      </div>
      <div class="mn_right">
        <svg t="1636425777798" style="margin-right:8px" class="icon" viewBox="0 0 1036 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3315" width="20" height="20"><path d="M1017.6 467.2c0-19.2 0-38.4-6.4-51.2 0-25.6-12.8-44.8-38.4-51.2-38.4-6.4-70.4-25.6-96-70.4-19.2-38.4-25.6-76.8-12.8-115.2 6.4-19.2 0-38.4-12.8-64-44.8-44.8-102.4-76.8-166.4-96-19.2-6.4-38.4 0-64 12.8-25.6 32-64 44.8-108.8 44.8-38.4 0-76.8-19.2-108.8-44.8-25.6-25.6-51.2-19.2-64-12.8-44.8 32-96 57.6-153.6 102.4-25.6 12.8-32 38.4-25.6 57.6 12.8 38.4 6.4 83.2-12.8 121.6-12.8 32-44.8 57.6-89.6 70.4H44.8c-12.8 6.4-25.6 19.2-32 44.8v19.2c-6.4 25.6-12.8 51.2-12.8 70.4 0 32 0 70.4 12.8 96 0 25.6 19.2 44.8 44.8 51.2 38.4 6.4 70.4 25.6 96 70.4 19.2 38.4 25.6 76.8 12.8 115.2-6.4 19.2 0 38.4 12.8 64 38.4 38.4 89.6 70.4 166.4 102.4h12.8c12.8 0 32-6.4 44.8-19.2 25.6-32 64-44.8 108.8-44.8 38.4 0 76.8 19.2 108.8 44.8 12.8 12.8 25.6 19.2 44.8 19.2h19.2c57.6-25.6 108.8-51.2 166.4-96 19.2-12.8 32-38.4 19.2-57.6-12.8-38.4-6.4-83.2 12.8-121.6 19.2-32 51.2-57.6 96-70.4h12.8c19.2-6.4 32-25.6 38.4-44.8l6.4-19.2c-19.2-32-12.8-51.2-12.8-76.8 0-19.2-6.4-32-6.4-51.2z m-224 384c-32 32-76.8 57.6-134.4 76.8-38.4-38.4-96-64-153.6-64-57.6 0-115.2 25.6-153.6 64-51.2-19.2-96-51.2-128-76.8 19.2-57.6 12.8-115.2-19.2-160-32-57.6-70.4-89.6-128-102.4V512c0-25.6 0-51.2 6.4-83.2 57.6-19.2 96-51.2 128-96 32-57.6 38.4-115.2 19.2-160 32-32 76.8-57.6 134.4-76.8 44.8 44.8 96 70.4 153.6 70.4 57.6 0 115.2-25.6 153.6-64 51.2 19.2 96 51.2 128 76.8-19.2 57.6-12.8 115.2 19.2 160 32 57.6 70.4 89.6 128 102.4 6.4 25.6 6.4 51.2 6.4 83.2 0 19.2 0 38.4-6.4 70.4-57.6 19.2-102.4 57.6-128 102.4-32 51.2-38.4 108.8-25.6 153.6z" p-id="3316"></path><path d="M691.2 428.8c-12.8-6.4-19.2-6.4-32-6.4-19.2 12.8-25.6 25.6-25.6 44.8 12.8 25.6 6.4 51.2 0 76.8v6.4c-19.2 76.8-89.6 108.8-160 89.6-32-12.8-64-32-76.8-64s-19.2-64-6.4-102.4c25.6-70.4 96-102.4 160-83.2 6.4 6.4 19.2 6.4 25.6 0 12.8-6.4 19.2-12.8 25.6-19.2 6.4-6.4 6.4-19.2 0-25.6-6.4-12.8-12.8-19.2-25.6-25.6-102.4-38.4-211.2 12.8-256 121.6-12.8 51.2-12.8 102.4 12.8 153.6 25.6 44.8 64 83.2 115.2 102.4 12.8 6.4 38.4 12.8 64 12.8 83.2 0 153.6-51.2 185.6-134.4 12.8-38.4 12.8-83.2 0-128 0-12.8-6.4-19.2-6.4-19.2z" p-id="3317"></path></svg>
        <svg t="1636425820982" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4151" width="20" height="20"><path d="M864 64H160C107.072 64 64 107.072 64 160v608c0 52.928 43.072 96 96 96h61.92v123.232L443.84 864H864c52.928 0 96-43.072 96-96V160c0-52.928-43.072-96-96-96z m32 704a32 32 0 0 1-32 32H443.84c-10.912 0-21.664 2.816-31.072 8.064l-126.88 70.4V864c0-35.296-28.704-64-64-64H160c-17.632 0-32-14.336-32-32V160c0-17.632 14.368-32 32-32h704c17.664 0 32 14.368 32 32v608z" p-id="4152"></path><path d="M640 520H256a32 32 0 1 0 0 64h384a32 32 0 1 0 0-64zM768 296H256a32 32 0 0 0 0 64h512a32 32 0 1 0 0-64z" p-id="4153"></path></svg>
      </div>
    </div>
    <div class="mcard">
      <div class="vip_card">
        <div class="vleft">
          <span style="font-weight:600;margin-right:8px">吃货卡</span>
          <span style="font-size:12px;border-left:white solid 0.5px;padding-left:8px">吃货豆：<span style="font-size:16px;">16</span></span><br/>
          <span style="font-size:12px;font-weight:100;">升级超级吃货卡，每月得无门槛红包，下单5倍返吃货豆</span>
        </div>
        <div class="vright">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    
    <div class="mcard">
      <div class="main_func_card">
        <div class="mftitle">
          <span>常用功能</span>
        </div>
        <div class="mfcontent">
          <van-grid>
            <van-grid-item
              ><svg t="1636428786429" style="font-size:30px;color:rgb(0, 162, 255);" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12251" width="200" height="200"><path d="M701.6 424c1 7.9 2.4 15.8 2.4 24 0 106-86 192-192 192s-192-86-192-192c0-8.2 1.4-16 2.4-24-56.6-36.5-102.2-88.5-130.4-150.3l0 536.9c0 47.1 38.2 85.3 85.3 85.3l469.3 0c47.1 0 85.3-38.2 85.3-85.3L831.9 273.8C803.8 335.5 758.1 387.6 701.6 424z" p-id="12252"></path><path d="M342.8 359.1C375 298.1 438.2 256 512 256s137 42.1 169.2 103.1c66.1-49 111.1-124.9 116.9-212.1-14.4-11.2-31.7-19-51.4-19L277.3 128c-19.7 0-37 7.8-51.4 19C231.7 234.1 276.7 310.1 342.8 359.1z" p-id="12253"></path><path d="M611.8 459c10.1 0 17.4-7.3 17.4-17.4s-7.3-17.4-17.4-17.4l-68.8 0 68.9-68.9c6.9-6.9 6.9-17.6 0-24.5-6.9-6.9-17.6-6.9-24.5 0l-75.2 75.1-75.4-77.4c-6.9-6.9-17.6-6.9-24.5 0-3.4 3.4-5.2 7.8-5.2 12.3 0.1 4.6 1.9 8.9 5.2 12.1l69.2 71.2-69.1 0c-10.1 0-17.4 7.3-17.4 17.4s7.3 17.4 17.4 17.4l82.3 0 0 31.6-82.3 0c-10.1 0-17.4 7.4-17.4 17.5s7.3 17.4 17.4 17.4l82.3 0 0 49.1c0 10.1 7.3 17.4 17.4 17.4s17.4-7.3 17.4-17.4l0-49.1 82.3 0c10.1 0 17.4-7.3 17.4-17.4s-7.3-17.5-17.4-17.5l-82.3 0L529.5 459 611.8 459z" p-id="12254"></path></svg>
              <span style="font-size: 12px">红包卡券</span></van-grid-item
            >
            <van-grid-item
              ><svg t="1636428646451" style="font-size:30px;color:rgb(0, 162, 255);" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11247" width="200" height="200"><path d="M667.786667 117.333333C832.864 117.333333 938.666667 249.706667 938.666667 427.861333c0 138.250667-125.098667 290.506667-371.573334 461.589334a96.768 96.768 0 0 1-110.186666 0C210.432 718.368 85.333333 566.112 85.333333 427.861333 85.333333 249.706667 191.136 117.333333 356.213333 117.333333c59.616 0 100.053333 20.832 155.786667 68.096C567.744 138.176 608.170667 117.333333 667.786667 117.333333z" p-id="11248"></path></svg>
              <span style="font-size: 12px;">店铺关注</span></van-grid-item
            >
            <van-grid-item
              ><svg t="1636428848808" style="font-size:30px;color:rgb(0, 162, 255);" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13077" width="200" height="200"><path d="M352.972955 831.860239c-35.434907 0-63.989249 28.554342-63.989249 63.989249 0 35.434907 28.554342 63.989249 63.989249 63.989249s63.989249-28.554342 63.989249-63.989249C416.962204 860.414581 388.407862 831.860239 352.972955 831.860239L352.972955 831.860239z" p-id="13078"></path><path d="M801.069713 831.860239c-35.434907 0-63.989249 28.554342-63.989249 63.989249 0 35.434907 28.554342 63.989249 63.989249 63.989249s63.989249-28.554342 63.989249-63.989249C865.058962 860.414581 836.332605 831.860239 801.069713 831.860239L801.069713 831.860239z" p-id="13079"></path><path d="M937.304888 188.527465C920.963548 169.949941 898.429699 159.973123 874.003696 159.973123L232.907106 159.973123l-2.236183-13.073072c-5.676466-46.615824-46.615824-82.910801-93.231648-82.910801L97.015958 63.989249c-17.717453 0-31.994625 14.277171-31.994625 31.994625s14.277171 31.994625 31.994625 31.994625l40.251302 0c13.933143 0 28.210314 12.729044 29.930455 28.210314l30.96254 178.550647 54.356459 382.043339c5.676466 46.615824 46.099782 83.082815 92.371577 83.082815l520.17067 0c17.717453 0 31.994625-14.277171 31.994625-31.994625s-14.277171-31.994625-31.994625-31.994625L344.716278 735.876365c-13.589115 0-27.006215-12.55703-28.898371-27.522258l-5.332437-37.327062 507.61364-31.306568c46.099782 0 86.695112-36.466991 92.027549-81.362674L960.870821 270.062154C964.483118 239.271628 956.054426 209.513187 937.304888 188.527465z" p-id="13080"></path></svg>
              <span style="font-size: 12px">购物车</span></van-grid-item
            >
            <van-grid-item @click="goOrderMan"
              ><svg t="1640082388251" style="font-size:30px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2602" width="200" height="200"><path d="M1024 824c0 110-90 200-200 200H200C90 1024 0 934 0 824V200C0 90 90 0 200 0h624c110 0 200 90 200 200v624z" fill="#44A7DF" p-id="2603"></path><path d="M780.619 657.775l38.243-24.231-14.337-34.825-44.038 10.244c-6.149-8.538-13.993-16.382-22.531-22.869l9.906-44.037-34.481-14.338-23.55 37.894c-10.925-1.706-21.856-1.706-32.431-0.344l-23.551-38.225-34.824 13.993 9.563 43.688c-8.538 6.494-16.382 13.994-23.213 22.875l-43.356-10.243-14.337 34.481 37.55 24.23c-1.706 10.919-1.706 21.844 0 32.432l-37.888 23.544 14.338 34.825 43.693-9.557c6.487 8.531 13.994 16.381 22.869 22.869L598 803.881l34.481 14.338 24.575-37.894c10.918 1.7 21.506 1.7 32.094 0l24.23 38.225 34.819-14.325-10.244-44.043c8.538-6.15 16.044-13.988 22.875-22.531l44.031 9.906 14.338-34.481-38.237-23.894c1.025-10.239 1.025-20.826-0.343-31.407z m-43.338 42.668c-14.682 35.5-55.644 52.219-90.807 37.207-35.506-14.676-52.225-55.638-37.212-90.794 14.688-35.507 55.644-51.894 90.806-37.213 35.157 14.682 51.888 55.3 37.213 90.8zM348.478 397.666h258.403v46.422H348.478v-46.422z m0 130.397h178.184v46.081H348.478v-46.081z m0 115.38h129.028v46.082H348.478v-46.082z m0 0" fill="#FFFFFF" p-id="2604"></path><path d="M526.662 779.3H296.928c-25.6 0-50.522-26.294-50.522-51.55l0.341-310.969c0-22.872 27.313-26.969 50.181-26.969h69.297c12.628 0 23.212-10.241 23.212-23.209v-70.322c0-20.481-0.344-47.109 16.381-51.544h195.937c25.601 0 50.869 26.969 50.869 52.566v192.188h41.3V297.303c0-50.859-41.3-92.503-92.513-92.503H389.094c-24.575 0-48.128 22.869-87.731 63.15-5.456 5.803-11.262 11.266-17.063 17.065-5.803 5.803-11.606 11.266-17.068 17.069-40.281 39.6-63.15 63.153-63.15 87.728V727.75c0 50.862 41.307 92.513 92.503 92.513h229.734V779.3h0.343z m0 0" fill="#FFFFFF" p-id="2605"></path></svg>
              <span style="font-size: 12px">订单管理</span></van-grid-item
            >
          </van-grid>
        </div>
      </div>
    </div>

    <div class="mcard">
      <div class="wallet">
        <div class="wtilte">
          <div class="wt_left">
            <span>我的钱包</span>
          </div>
          <div class="wt_right">
            <van-icon name="arrow" />
          </div>
        </div>
        <van-grid :column-num="3">
          <van-grid-item style="font-size:12px">
            <span>借钱</span>
            <span style="margin-top:3px"><span style="font-size:14px;font-weight:600">10</span>万</span>
            <span style="margin-top:3px">最高可借</span>
          </van-grid-item>
          <van-grid-item style="font-size:12px">
            <span>干饭神器</span>
            <span style="margin-top:3px"><span style="font-size:14px;font-weight:600">7</span>元</span>
            <span style="margin-top:3px">外卖红包</span>
          </van-grid-item>
          <van-grid-item style="font-size:12px">
            <span>银行活动</span>
            <span style="margin-top:3px"><span style="font-size:14px;font-weight:600">157</span>元</span>
            <span style="margin-top:3px">享优惠</span>
          </van-grid-item>
        </van-grid>

      </div>
    </div>

    <div class="mcard">
      <div class="mmore">   
        <div class="mtitle">
          <span>更多推荐</span>
        </div>
        <van-grid square>
          <van-grid-item
            ><svg class="icon" aria-hidden="true" style="font-size: 30px">
              <use xlink:href="#icon-dingwei"></use></svg
            ><span style="font-size: 12px;margin-top:3px;">我的地址</span></van-grid-item
          >
          <van-grid-item
            ><svg class="icon" aria-hidden="true" style="font-size: 30px">
              <use xlink:href="#icon-kefu"></use></svg
            ><span style="font-size: 12px;margin-top:3px;">我的客服</span></van-grid-item
          >
          <van-grid-item
            ><svg class="icon" aria-hidden="true" style="font-size: 30px">
              <use xlink:href="#icon-xianjinmingxi"></use></svg
            ><span style="font-size: 12px;margin-top:3px;">签到领现金</span></van-grid-item
          >
          <van-grid-item
            ><svg class="icon" aria-hidden="true" style="font-size: 30px">
              <use xlink:href="#icon-dingcan"></use></svg
            ><span style="font-size: 12px;margin-top:3px;">企业订餐</span></van-grid-item
          >
          <van-grid-item
            ><svg class="icon" aria-hidden="true" style="font-size: 30px">
              <use xlink:href="#icon-candou"></use></svg
            ><span style="font-size: 12px;margin-top:3px;">瓜分吃货豆</span></van-grid-item
          >
          <van-grid-item
            ><svg class="icon" aria-hidden="true" style="font-size: 30px">
              <use xlink:href="#icon-gougou"></use></svg
            ><span style="font-size: 12px;margin-top:3px;">冲吧饿小宝</span></van-grid-item
          >
          <van-grid-item
            ><svg class="icon" aria-hidden="true" style="font-size: 30px">
              <use xlink:href="#icon-fapiao"></use></svg
            ><span style="font-size: 12px;margin-top:3px;">领券中心</span></van-grid-item
          >
          <van-grid-item
            ><svg class="icon" aria-hidden="true" style="font-size: 30px">
              <use xlink:href="#icon-huiyuan"></use></svg
            ><span style="font-size: 12px;margin-top:3px;">品牌会员</span></van-grid-item
          >
          <van-grid-item
            ><svg class="icon" aria-hidden="true" style="font-size: 30px">
              <use xlink:href="#icon-qinghuiyuan"></use></svg
            ><span style="font-size: 12px;margin-top:3px;">尊享权益</span></van-grid-item
          >
          <van-grid-item
            ><svg class="icon" aria-hidden="true" style="font-size: 30px">
              <use xlink:href="#icon-qishou"></use></svg
            ><span style="font-size: 12px;margin-top:3px;">骑手招募</span></van-grid-item
          >
          <van-grid-item
            ><svg class="icon" aria-hidden="true" style="font-size: 30px">
              <use xlink:href="#icon-gongyi"></use></svg
            ><span style="font-size: 12px;margin-top:3px;">公益3小时</span></van-grid-item
          >
          <van-grid-item @click="logout"
            ><svg class="icon" aria-hidden="true" style="font-size: 30px">
              <use xlink:href="#icon-tuichu"></use></svg
            ><span style="font-size: 12px;margin-top:3px;">退出登录</span></van-grid-item
          >
        </van-grid>
      </div>
    </div>
    <van-overlay :show="show" @click="show=false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <div class="wtitle">  
            <span style="font-weight:700;font-size:26px;margin-left:45%;">登录</span>
            <van-icon name="cross" style="margin-left:30%;" size="20" @click="cancelLogin"/>
          </div>
          <van-form @submit="onSubmit"> 
            <van-field
              v-model = "user.uname"
              clearable
              name="username"
              label="用户名"
              placeholder="请输入用户名"
              :rules="[{required:true, message:''}]"
            /> 
            <van-field
              v-model = "user.paswd"
              clearable
              type="password"
              name="password"
              label="密码"
              placeholder="请输入密码"
              :rules="[{required:true, message:''}]"
            />
            <div style="margin: 16px">
              <van-button round block type="info" native-type="submit">
                提交
              </van-button> 
            </div>
          </van-form>
          
          <div @click="goRegist">
            <span style="font-size:16px;">单击此处注册</span>
          </div>
          
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast)
export default {
  name: "Mine",
  data() {
    return {
      islogin: false,
      show: false,
      hpicIp: "http://localhost:8080/hpic/",
      user: {
        uname: '',
        paswd: '',
        image: 'default.png',
        uid: 0,
      },
      
    };
  },
  created() {
    var user=JSON.parse(localStorage.getItem("userInfo"));
    if(user!=null){
      this.user = user;
      this.show = false;
      this.islogin = true;
    }
  },
  methods: {
    goOrderMan(){
      if(this.user.uid === 0) {
        Toast.fail("请先登录！");
      }
      else if(this.user.type === 2) {
        this.$router.push({name: 'OrderManagement', query:{
          uid:this.user.uid,
        }})
      }
      else {
        Toast.fail("请先注册店铺！");
      }
    },
    login(){
      this.show = true;
    },
    cancelLogin(){
      this.show = false;
    },
    onSubmit(values){
      this.axios.post("user/login",this.user).then(response=>{
        if(response.data!=null){
          Toast('登录成功！');
          console.log(response.data.image);
          this.show=false;
          this.islogin=true;
          this.user=response.data;
          localStorage.setItem("userInfo", JSON.stringify(this.user));
        }else{
          Toast('用户名或密码错误，登录失败！');
          return;
        }
      })
    },
    logout(){
      this.user= {
        username: '',
        password: '',
        image: 'default.png',
        uid: 0,
      };
      this.login = false;
      localStorage.removeItem("userInfo");
      Toast.success('已退出登录');
      location.reload();
    },
    goRegist(){
      this.$router.push("/Regist");
    },
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color: rgb(248, 239, 239);
  height: 700px;
}
.mnav{
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  background-color: white;
}
.mn_left{
  display: flex;
  margin-left: 8px;
}
.uname{
  line-height: 40px;
  margin-left: 3px;
  color: black;
  font-size: 14px;
}
.mn_left img{
  width: 40px;
  border-radius: 50%;
}
.mn_right{
  line-height: 40px;
  margin-right: 8px;
  font-size: 20px;
}
.mcard{
  width: 96%;
  margin-left: 2%;
  margin-top: 6px;
}
.vip_card{
  color: white;
  display: flex;
  justify-content: space-between;
  background-color: rgb(0, 162, 255);
  border-radius: 5px;
}
.vleft{
  margin: 8px;
  flex:9;
  text-align: left;
}
.vright{
  flex:1;
  line-height: 55px;
}
.main_func_card{
  background-color: white;
  border-radius: 5px;
  text-align: left;
}
.mftitle{
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
  padding-top: 8px;
}
.wallet{
  background-color: white;
  border-radius: 5px;
  text-align: left;
}
.wtilte{
  display: flex;
  justify-content: space-between;
}
.wt_left{
  font-weight: 600;
  font-size: 14px;
  margin: 8px;
  margin-bottom: 0;
}
.wt_right{
  font-size: 12px;
  margin: 8px;
  margin-bottom: 0;
}
.mtitle{
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  padding-top: 8px;
  margin: 8px;
  margin-bottom: 0;
}
.mmore{
  background-color: white;
  border-radius: 5px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 100%;
  height: 300px;
  background-color: #fff;
  text-align:left;
}
.wtitle{
  margin-top: 15px;
  margin-bottom: 25px;

}
</style>
