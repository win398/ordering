<template>
  <div class="hello">
    <div class="bg">
      <div class="onav">
        <div class="onav_left" @click="goBack">
          <van-icon name="arrow-left" />
        </div>
        <div class="onav_status">
          <span>订单管理</span>
        </div>
        <div class="onav_right">
          <van-icon name="contact" size="20"/><br/>
          <span>客服</span>
        </div>
      </div>
      <div class="omain" v-if="isExist">
        <div class="omain_title">
          <span>您还有如下未完成的订单：</span>
        </div>
        <div v-for="(order, index) in orderList" :key="index">
          <div class="order_card" @click="goDetail(order.foodList[0].oid)">
            <div class="order_sname">
            <span>{{order.foodList.sname}}</span>
          </div>
          <div class="order_foods" v-for="(food, index1) in order.foodList" :key="index1">
            <div class="oleft">
              <span>{{food.fname}}</span>
            </div>
            <div class="oright">
              <span>数量：{{food.fnum}}</span>
            </div>
            </div>
            <div class="order_price">
              <div class="oleft">
                <span>总金额</span>
              </div>
              <div class="oright">
                <span>￥{{order.tprice}}</span>
              </div>
            </div>
            <div class="order_num">
              <div class="oleft">
                <span>订单号码</span>
              </div>
              <div class="oright">
                <span>{{order.ono}}</span>
              </div>
            </div>
            <div class="order_time">
              <div class="oleft">
                <span>订单创建时间</span>
              </div>
              <div class="oright">
                <span>{{order.otime | dateformat}}</span>
              </div>
            </div>
          </div>
          <div class="delivery_btn" v-if="order.ostatus === 1">
            <van-button round type="info" size="small" @click="orderDelivery(order.foodList[0].oid)">接受订单</van-button>
          </div>
          <div class="delivery_btn" v-if="order.ostatus === 2">
            <van-button round type="info" size="small" @click="orderDelivery(order.foodList[0].oid)">订单发货</van-button>
          </div>
          <div class="delivery_btn" v-if="order.ostatus === 3">
            <van-button round type="info" size="small" @click="orderDelivery(order.foodList[0].oid)">确认送达</van-button>
          </div>
        </div>
        
      </div>
      <div class="omain" v-else>
        <div class="omain_title">
          <span>真棒！所有订单已经完成。</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "OrderManagement",
  data() {
    return {
      uid: this.$route.query.uid,
      oid:'',
      orderList: '',
      store: '',
      sumPrice:'',
      store: {
        dfee:'',
        sname:'',
      },
      isExist: true,
    };
  },
  created() {
    this.getOrderByStoreMan();
  },
  methods: {
    orderDelivery(oid){
      this.axios.post("order/orderDelivery",{
        'oid':oid,
      }).then(response=>{
        if(response.data === 'ok1') {
          this.getOrderByStoreMan();
          Toast.success('接单成功！');
        }
        else if(response.data === 'ok2') {
          this.getOrderByStoreMan();
          Toast.success('发货成功！');
        }
        else if(response.data === 'ok3') {
          this.getOrderByStoreMan();
          Toast.success('确认送达成功！');
        }
        else {
          Toast.fail('发货失败！');
        }
        
      });
    },
    goDetail(oid) {
      console.log(oid);
      this.$router.push({name:'OrderDetail', params:{
        oid: oid,
        sub: '',
      }}) 
    },
    goBack() {
      this.$router.go(-1);
    },
    getOrderByStoreMan() {
      this.axios.post("order/getOrderByStoreMan",{
        'uid':this.uid,
      }).then(response=>{
        this.orderList = response.data;
        if(response.data == '' || response.data == null)
          this.isExist = false;
      });
    },

  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/orderMan.css">

</style>
