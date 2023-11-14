<template>
  <div class="hello">
    <div class="fdimg">
      <img :src="picIp+food.fpic" alt="">
    </div>
    <div class="fdnav">
      <div class="fdnleft" @click="goBack">
        <van-icon name="arrow-left" />
      </div>
      <div class="fdnright">
        <van-icon name="share-o" />
      </div>
    </div>
    <div class="fd_card">
      <div class="fname">
        <span>{{food.fname}}</span>
      </div>
      <div class="fsales">
        <span>月售 {{food.fsales}}</span>
        <span>好评率 100%</span>
      </div>
      <div class="fprice">
        <div class="fp_left">
          <span style="color:red">￥<span style="font-size:20px">1.5</span></span>
          <span style="text-decoration: line-through;margin-left:2px">￥3</span>
        </div>
        <div class="fp_right">
          <van-icon name="plus" /><span>加入购物车</span>
        </div>
      </div>
    </div>
    <div class="fd_card">
      <div class="fd_tilte">
        <span>商品介绍</span>
      </div>
      <div class="fd_content">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{food.content}}</span>
      </div>
    </div>

    <div class="eva_card">
      <div class="evaList" v-for="(eva, eindex) in evaList" :key="eindex">
        <div class="eva_nav">
          <div class="eva_nav_left">
            <van-image :src="hpicIp+eva.image" lazy-load/>
            <div style="margin-left:8px"><span style="font-weight:700">{{eva.uname}}</span><br/><span style="font-size:12px">评分：{{eva.fstar}}分</span></div>
          </div>
          <div class="eva_nav_right">
            <span>{{eva.time | dateformatEasy}}</span>
          </div>
        </div>
          <div class="eva_food">
            <span>已购</span>
          </div>
          <div class="eva_content">
            <span>{{eva.content}}</span>
          
        </div>
        
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "FoodDetail",
  data() {
    return {
      fid:this.$route.params.value,
      food:[],
      picIp: "http://localhost:8080/opic/",
      hpicIp: "http://localhost:8080/hpic/",
      evaList: [],
    };
  },
  created() {
    this.getFoodById();
    this.getEvaList();
  },
  methods: {
    getEvaList() {
      this.axios.post("fcom/getEvaListByfid",{
        'fid': this.fid,
      }).then(response=>{
        this.evaList = response.data;
      })
    },
    getFoodById(){
      this.axios
        .post("food/getDetailByfid",{
          fid:this.fid,
        })
        .then(response=>{
          this.food = response.data;
        })
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color: rgb(250, 245, 245);
  height: 750px;
}
.fdimg img{
  width: 100%;
}
.fdnav{
  position: absolute;
  top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.fdnleft,.fdnright{
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  color: white;
  padding: 3px;
  font-size: 20px;
  margin:14px;
}
.fd_card{
  text-align: left;
  width: 94%;
  background-color: white;
  margin-left: 3%;
  margin-top: 8px;
  border-radius: 5px;
  border: rgb(243, 239, 239) solid 1px;
}
.fname, .fprice, .fsales{
  margin-left: 8px;
}
.fname{
  margin-top: 8px;
  font-size: 16px;
  font-weight: 700;
}
.fsales{
  margin-top: 5px;
  font-size: 12px;
  color: rgb(133, 138, 141);
}
.fprice{
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.fp_left{
  font-size: 12px;
  color: rgba(141, 148, 153, 0.76);
}
.fp_right{
  background-color: rgb(23, 170, 228);
  color: white;
  padding: 2px 5px;
  border-radius: 24.8px;
  font-size: 14px;
  margin-right: 8px;
}
.fd_tilte, .fd_content{
  margin-left: 8px;
  font-size: 14px;
  color: black;
}
.fd_tilte{
  margin-top: 10px;
  font-weight: 700;
  text-align: center;
}
.fd_content{
  margin-top: 8px;
  margin-bottom: 10px;
}

.eva_card{
    background-color: white;
    border-radius: 5px;
    margin-top: 8px;
    border: solid 0.5px rgb(248, 242, 242);
    width: 96%;
    margin-left: 2%;
  }
.eva_nav{
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 0.5px solid rgb(240, 233, 233);
  }
  .eva_nav_left{
    display: flex;
    height: 40px;
    text-align: left;
  }
  .eva_nav_left .van-image{
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 5px;
    margin-left: 8px;
  }
  .eva_nav_right{
    line-height: 40px;
    font-size: 14px;
    color: rgb(204, 186, 186);
    margin-right: 8px;
  }
  .eva_content{
    height: 40px;
    line-height: 40px;
    text-align: left;
    margin-left: 8px;
  }
  
  .eva_food{
    text-align: left;
    font-size: 12px;
    margin-left: 8px;
    font-family: '楷体';
  }
</style>
