<template>
  <div class="hello">
    <div class="bg">
      <div class="order_nav">
        <div class="back" @click="goBack">
          <van-icon name="arrow-left" size="20"/>
        </div>
        <div class="order_title">
          <span>确认订单</span>
        </div>
      </div>

      <div class="order_tips">
        <van-icon name="volume-o" />
        <span>温馨提示：请适量点餐、避免浪费</span>
      </div>

      <div class="order_address">
        <div class="address">
          <div class="address_left">
            <span style="font-weight: 700;">{{userAddress.address}}</span><br/>
            <span style="font-size:12px;color:rgb(184, 172, 172);">{{userAddress.name}}({{userAddress.sex}})&nbsp;{{userAddress.phoneNum}}</span>
          </div>
          <div class="address_right">
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="delivery_time">
          <div class="delivery_time_left">
            <span>配送时间</span>
          </div>
          <div class="delivery_time_right">
            <span style="font-size:12px;color:rgb(34, 172, 236);">立即送达</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="delivery_time">
          <div class="delivery_time_left">
            <span>支付方式</span>
          </div>
          <div class="delivery_time_right">
            <span style="font-size:12px;color:rgb(34, 172, 236);">支付宝</span>
            <van-icon name="arrow" />
          </div>
        </div>
      </div>

      <div class="order_list">
        <div class="sname">
          <span>{{store.sname}}</span>
        </div>
        <div v-for="(foods, index) in shoplist" :key="index">
          <div v-if="foods.fnum !== 0" class="food_list">
            <div class="fleft">
              <van-image :src="picIp+foods.fpic" lazy-load></van-image>
            </div>
            <div class="fright">
              <div class="ftile_and_price">
                <span>{{foods.fname}}</span>
                <span>￥{{foods.price}}</span>
              </div>
              <div class="fnum">
                <span>x{{foods.fnum}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="delivery_fee">
          <span>配送费</span>
          <span>￥{{store.dfee}}</span>
        </div>
        <div class="sum_price">
          <span>小计￥<span style="font-size:18px;font-weight:700">{{sumPrice}}</span></span>
        </div>
      </div>

    </div>
    <div class="submit_cell">
      <div class="submit_price">
        <span><span style="color:black;">合计:</span>￥<span style="font-size:18px;font-weight:700">{{sumPrice}}</span></span><br/>
        <span>已优惠￥0</span>
      </div>
      <div class="sub_btn">
        <van-button round type="info" @click="submit">提交订单</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import {getDateNums} from "../assets/utils.js";
import Vue from 'vue';
import { Toast } from 'vant';
export default {
  name: "Order",
  data() {
    return {
      picIp: "http://localhost:8080/opic/",
      shoplist:this.$route.params.shoplist,
      store: this.$route.params.store,
      sumPrice: this.$route.params.sumPrice,
      user: this.$route.params.user,
      userAddress: {
        address: '湖北理工学院腾龙学生公寓',
        name: '黎明',
        sex: '先生',
        phoneNum: '158027'
      },
      outTradeNo: '',
      foodlist: [],
    };
  },
  created() {
    this.sumPrice += this.store.dfee;
    var j = 0;
    for (var i = 0; i < this.shoplist.length; i++) {
      if (this.shoplist[i].fnum !== 0) {
        Vue.set(this.foodlist, j++, {
          "fid": this.shoplist[i].fid,
          "fnum": this.shoplist[i].fnum,
        });
      }
    }
    console.log(this.foodlist);
  },
  methods: {
    submit() {
      this.outTradeNo = this.order_nums();
      this.axios
        .post("order/orderStart",{
          'uid': this.user.uid,
          'sid': this.store.sid,
          'ostatus': 1,
          'tprice': this.sumPrice,
          'ono': this.outTradeNo,
          'foodList': this.foodlist,
        })
        .then(response=>{
          if (response.data !== '0' && response.data !== 0) {
            this.$router.push({name:'OrderDetail', params:{
              oid: response.data,
              sub: 'submit',
            }}) 
          }
          else {
            Toast.fail("提交订单失败！请重试");
          }
        })
    },
    goBack() {
      this.$router.go(-1);
    },
    order_nums() {
      var that = this;
      var outTradeNo = ""; //订单号    
        //从vuex中或者userinfo信息
      var userinfo = that.user;
      if (userinfo) {
        for (var i = 0; i < 6; i++) //6位随机数，用以加在时间戳后面。
        {
          outTradeNo += Math.floor(Math.random() * 10);
        }
        outTradeNo = String(getDateNums(new Date())) + String(outTradeNo) + String(userinfo.uid);
        return outTradeNo;
      } else {
          that.$dialog.confirm({
            title: '温馨提示',
            message: '您还未登录或登录状态失效，请登录后再来操作'
          }).then(() => {
            that.$router.push('/Mine')
          }).catch(() => {
            // on cancel
          })
        }
      },
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/order.css">
</style>
