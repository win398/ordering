<template>
  <div class="hello">
    <van-tabs
     v-model="order_active"
     color="rgba(28, 180, 250, 0.753)"
     line-width="20"
     @click="getOrder"
    >
      <van-tab title="全部">
        <div class="omain">
          <div class="omain_title"  v-if="isEmpty">
            <span>您还未购买过任何商品</span>
          </div>
          <div v-for="(order, index) in orderList" :key="index" class="order_card">
            <div @click="goDetail(order.foodList[0].oid)">
              <div class="order_store">
                <div class="sname">
                  <van-image :src="spicIp+order.foodList[0].spic"/>
                  <div><span>{{order.foodList[0].sname}}</span></div>
                </div>
                <div class="order_status">
                  <span>{{otitle[order.ostatus-1]}}</span>
                </div>
              </div>
              <div class="order_food">
                <div class="food_left">
                    <van-image :src="picIp+order.foodList[0].fpic"/>
                    <div class="fname">
                      <span>{{order.foodList[0].fname}}</span>
                    </div>
                </div>
                <div class="food_right">
                  <span>￥{{order.tprice}}</span><br/>
                  <span style="font-size:12px;">共{{order.fsum}}件</span>
                </div>
                
              </div>
            </div>
            
            <div class="func_btn">
                <van-button round type="info" disabled size="small" v-if="order.ostatus === 1">等待商家接单</van-button>
                <van-button round type="info" disabled size="small" v-if="order.ostatus === 2">等待商家发货</van-button>
                <van-button round type="info" size="small" v-if="order.ostatus === 3" @click="orderDelivery(order.oid)">确认送达</van-button>
                <van-button round type="info" size="small" v-if="order.ostatus === 4" @click="goEvaluation(index)">去评价</van-button>
                <van-button round type="info" disabled size="small" v-if="order.ostatus === 5">交易完成</van-button>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待评价">
        <div class="omain">
          <div class="omain_title"  v-if="isEmpty">
            <span>很棒！没有未完成评价订单</span>
          </div>
          <div v-for="(order, index) in orderList" :key="index" class="order_card">
            <div @click="goDetail(order.foodList[0].oid)">
              <div class="order_store">
                <div class="sname">
                  <van-image :src="spicIp+order.foodList[0].spic"/>
                  <div><span>{{order.foodList[0].sname}}</span></div>
                </div>
                <div class="order_status">
                  <span>{{otitle[order.ostatus-1]}}</span>
                </div>
              </div>
              <div class="order_food">
                <div class="food_left">
                    <van-image :src="picIp+order.foodList[0].fpic"/>
                    <div class="fname">
                      <span>{{order.foodList[0].fname}}</span>
                    </div>
                </div>
                <div class="food_right">
                  <span>￥{{order.tprice}}</span><br/>
                  <span style="font-size:12px;">共{{order.fsum}}件</span>
                </div>
              </div>
            </div>
            <div class="func_btn">
              <van-button round type="info" size="small" @click="goEvaluation(index)">去评价</van-button>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-popup v-model="eshow" position="bottom" :style="{ height: '50%' }" >
      <div class="etitle"><span>评价</span></div>
      <div class="ecard" v-for="(efood,eindex) in elist" :key="eindex">
          <div class="efname"><span>{{efood.fname}}</span></div>
          <van-rate allow-half v-model="evalue.star[eindex]" icon="like" void-icon="like-o" />
          <van-field v-model="evalue.econtent[eindex]" type="textarea" maxlength="50" show-word-limit placeholder="说说一下自己的感受吧！" /> 
      </div>
      <div style="margin: 8px;">
          <van-button round block type="info" native-type="submit" @click="submitEva">提交</van-button>
        </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
export default {
  name: "UserOrder",
  data() {
    return {
      evalue:{
        econtent: [],
        star: [],
      },
      order_active:0,
      isEmpty: false,
      picIp: "http://localhost:8080/opic/",
      spicIp: "http://localhost:8080/spic/",
      user: {},
      orderList:[],
      getIp:'order/getOrderByUid',
      otitle:['买家下单','商家接单','骑手送货','等待评价','交易完成'],
      eshow: false,
      elist: [],
      fcom: [],
    };
  },
  created() {
    var user=JSON.parse(localStorage.getItem("userInfo"));
    if(user!=null){
      this.user = user;
    }
    this.getOrderByUid();
  },
  methods: {
    submitEva() {
      console.log(this.elist);
      this.fcom = [];
      for (var i = 0; i < this.elist.length; i++) {
        if(this.evalue.econtent[i] == undefined) {
          Toast.fail("请输入评论内容！");
          return;
        }
        if(this.evalue.star[i] == undefined) {
          Toast.fail("请输入评分！");
          return;
        } 
        this.fcom[i] = {
          'uid': this.user.uid,
          'content': this.evalue.econtent[i],
          'fid': this.elist[i].fid,
          'ofid': this.elist[i].oFId,
          'fstar': this.evalue.star[i],
        }
      }
      this.axios.post("fcom/submitEva", {
        'evaList': this.fcom,
        'oid': this.elist[0].oid,
      }).then(response=>{
        if(response.data == 'ok')
          Toast.success('提交成功！');
        else
          Toast.fail('提交失败！');
        this.eshow = false;
        this.getOrderByUid();
      })
    },
    goEvaluation(i){
      this.evalue = {
        econtent: [],
        star: [],
      };
      this.elist = this.orderList[i].foodList;
      this.eshow = true;
    },
    goDetail(oid) {
      this.$router.push({name:'OrderDetail', params:{
        oid: oid,
        sub: '',
      }}) 
    },
    orderDelivery(oid){
      this.axios.post("order/orderDelivery",{
        'oid':oid,
      }).then(response=>{if(response.data === 'ok3') {
          this.getOrderByStoreMan();
          Toast.success('操作成功！');
        }
        else {
          Toast.fail('错误！');
        }
        
      });
    },
    getOrder(name, title) {
      if(name == 0)
        this.allOrder();
      else if(name == 1)
        this.evaluateOrder();
    },
    evaluateOrder() {
      this.orderList = [];
      this.getIp = "order/evaluateOrder";
      this.getOrderByUid();
    },
    allOrder() {
      this.isEmpty = false;
      this.orderList = [];
      this.getIp = "order/getOrderByUid";
      this.getOrderByUid();
    },
    getOrderByUid() {
      this.axios.post(this.getIp,{
        'uid':this.user.uid,
      }).then(response=>{
        this.orderList = response.data;
        if(response.data == '' || response.data == null)
          this.isEmpty = true;
        else 
          this.isEmpty = false;
        for (var i = 0; i < this.orderList.length; i++) {
          var sum = 0;
          for (var j = 0; j < this.orderList[i].foodList.length; j++) {
            sum += this.orderList[i].foodList[j].fnum;
          }
          Vue.set(this.orderList[i], 'fsum', sum);
        }
        console.log(this.orderList);
      });
    },
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.omain{
    width: 96%;
    margin-left: 2%;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 6px;
    border: 0.5px solid rgb(243, 243, 243);
    background-color: white;
    font-size: 14px;
    margin-bottom: 50px;
}
.omain_title{
    text-align: left;
    margin: 4px 8px;
}
.order_food, .order_store{
    display: flex;
    justify-content: space-between;
}
.order_store{
    height: 30px;
    line-height: 30px;
}
.order_food{
    height: 60px;
    line-height: 50px;
}
.sname{
  font-weight: 700;
  display: flex;
}
.sname .van-image{
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 3px;
}
.food_left{
  margin-top: 5px;
  display: flex;
}
.food_left .van-image{
  height: 50px;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 3px;
}
.food_right{
  line-height: 20px;
  padding-top: 10px;
}
.order_card{
  width: 92%;
  padding: 0 2%;
  margin-left: 2%;
  margin-top: 2px;
  margin-bottom: 20px;
  border: 0.5px solid rgb(243, 243, 243);
}
.func_btn{
  text-align: right;
  padding-bottom: 5px;
}
.etitle, .efname{
  height: 20px;
  line-height: 20px;
  font-weight: 700;
  margin: 5px;
}
.ecard{
  margin-bottom: 8px;
}
</style>
