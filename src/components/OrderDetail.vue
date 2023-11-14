<template>
  <div class="hello">
    <div class="bg">
      <div class="onav">
        <div class="onav_left" @click="goBack">
          <van-icon name="arrow-left" />
        </div>
        <div class="onav_status">
          <span>{{otitle[active].title}}</span>
        </div>
        <div class="onav_right">
          <van-icon name="contact" size="20"/><br/>
          <span>客服</span>
        </div>
      </div>
      <div class="ostep">
        <van-steps :active="active" active-icon="success" active-color="#38f">
          <van-step v-for="(item, index) in otitle" :key="index">{{item.title}}</van-step>
        </van-steps>
        <div class="ocontact">
          <van-icon name="chat-o" size="20"/>
          <span>联系商家</span>
        </div>
      </div>

      <div class="order_list">
        <div class="sname">
          <span>{{store.sname}}</span>
        </div>
        <div v-for="(foods, index) in order.foodList" :key="index">
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
          <span>总计￥<span style="font-size:18px;font-weight:700">{{sumPrice}}</span></span>
        </div>
        <div class="o_more">
          <div class="o_more_card">
            <div class="oleft">
              <span>收货信息</span>
            </div>
            <div class="oright">
              <span>{{userAddress.address}}</span><br/>
              <span>{{userAddress.name}}({{userAddress.sex}})&nbsp;{{userAddress.phoneNum}}</span>
            </div>
          </div>
          <div class="o_more_card">
            <div class="oleft">
              <span>订单号码</span>
            </div>
            <div class="oright">
              <span>{{order.ono}}</span>
            </div>
          </div>
          <div class="o_more_card">
            <div class="oleft">
              <span>送达时间</span>
            </div>
            <div class="oright">
              <span>尽快送达</span>
            </div>
          </div>
          <div class="o_more_card">
            <div class="oleft">
              <span>配送方式</span>
            </div>
            <div class="oright">
              <span>商家配送</span>
            </div>
          </div>
          <div class="o_more_card">
            <div class="oleft">
              <span>支付方式</span>
            </div>
            <div class="oright">
              <span>在线支付</span>
            </div>
          </div>
          <div class="o_more_card">
            <div class="oleft">
              <span>下单时间</span>
            </div>
            <div class="oright">
              <span>{{order.otime | dateformat}}</span>
            </div>
          </div>
        </div> 
      </div>

      
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue';
import { Step, Steps } from 'vant';

Vue.use(Step);
Vue.use(Steps);
export default {
  name: "OrderDatail",
  data() {
    return {
      otitle:[{
        title:'买家下单',
      },
      {
        title:'商家接单',
      },
      {
        title:'骑手送货',
      },
      {
        title:'交易完成',
      }],
      userAddress: {
        address: '湖北理工学院腾龙学生公寓',
        name: '黎明',
        sex: '先生',
        phoneNum: '158027'
      },
      picIp: "http://localhost:8080/opic/",
      oid: this.$route.params.oid,
      sub: this.$route.params.sub,
      active: 1,
      order: '',
      store: '',
      sumPrice:'',
      store: {
        dfee:'',
        sname:'',
      },
    };
  },
  created() {
    this.getOrder();
  },
  methods: {
    goBack() {
      if(this.sub === 'submit')
        this.$router.go(-2);
      else
        this.$router.go(-1);
    },
    getOrder() {
      this.axios.post("order/getOrder",{
        'oid':this.oid,
      }).then(response=>{
        this.order = response.data;
        this.sumPrice = response.data.tprice;
        if(response.data.ostatus == 5)
          this.active = 3;
        else
          this.active = response.data.ostatus - 1;
        this.store.dfee = response.data.foodList[0].dfee;
        this.store.sname = response.data.foodList[0].sname;
      });
    },
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/orderDetail.css">

</style>
