<template>
  <div class="hello">
    <div style="position: relative;">
      <div class="background">
        <div class="nav">
          <div class="back" @click="goBack">
            <van-icon name="arrow-left" size="30"/>
          </div>
          <div class="func">
            <van-icon name="search" size="30" style="margin-right:18px;"/>
            <van-icon name="like-o" size="30" /><span style="margin-right:18px;margin-left:3px;">收藏</span>
            <van-icon name="ellipsis" size="30"/>
          </div>
        </div>
      </div>

      <div class="FL_card">
        <div class="card_info">
          <div class="card_left">
            <div class="name"><span>{{store.sname}}</span></div>
            <div class="infor"><span>蜂鸟快送约45分钟 · 月售4586 · 食安险</span></div>
          </div>

          <div class="card_right">
            <div><img :src="spicIp+store.spic" alt=""></div>
          </div>
        </div>

        <div class="notice"><span>公告：用心闷出不一样的米饭！有问题小主请及时与我们联系喔~外卖不易，不要轻易给差评</span></div>

        <div class="red_packet">
          <div class="p1">
            <svg t="1636262535450" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1873" width="20" height="20"><path d="M648.76 241.138l-90.186-90.819c-25.795-25.976-67.614-25.976-93.407 0l-90.184 90.819c-17.097 17.214-42.163 23.647-65.355 16.774l-113.057-33.518c-42.306-12.543-84.701 19.395-84.701 63.807v489.137c0 36.734 29.57 66.511 66.049 66.511h667.906c36.475 0 66.045-29.777 66.045-66.511V288.2c0-44.412-42.391-76.35-84.701-63.807l-113.054 33.518c-23.191 6.874-48.261 0.441-65.355-16.773z" fill="#FFA820" p-id="1874"></path><path d="M111.87 713.307v64.03c0 36.734 29.57 66.511 66.049 66.511H217c-43.002-36.083-78.855-80.406-105.13-130.541zM911.87 288.2c0-44.412-42.391-76.35-84.701-63.807l-10.64 3.155c44.992 50.723 78.197 112.134 95.341 179.941V288.2zM911.87 777.338V619.483c-22.52 89.068-72.761 167.095-141.01 224.366h74.965c36.474 0 66.045-29.777 66.045-66.511zM111.87 288.2v25.464a432.178 432.178 0 0 1 64.793-92.008c-34.746 0.61-64.793 29.155-64.793 66.544z" fill="#FEAC33" p-id="1875"></path><path d="M911.87 619.483V407.489c-17.144-67.807-50.349-129.218-95.341-179.941l-62.82 18.625c58.4 65.7 93.874 152.231 93.874 247.049 0 161.755-103.239 299.392-247.419 350.627H770.86c68.249-57.271 118.49-135.297 141.01-224.366zM213.342 229.366l-16.772-4.972c-6.69-1.983-13.382-2.852-19.908-2.737a432.178 432.178 0 0 0-64.793 92.008v101.058c15.384-71.613 51.379-135.569 101.473-185.357zM111.87 571.721v141.586c26.275 50.135 62.128 94.457 105.129 130.542h133.987C230.812 801.144 139.084 698.413 111.87 571.721z" fill="#FEB133" p-id="1876"></path><path d="M604.972 197.042l-46.398-46.723c-25.795-25.976-67.614-25.976-93.407 0l-9.654 9.721c0.57-0.003 1.137-0.022 1.708-0.022 53.44 0 103.743 13.408 147.751 37.024zM847.584 493.222c0-94.818-35.475-181.349-93.874-247.049l-39.594 11.739a65.547 65.547 0 0 1-27.626 2.081c51.91 55.858 83.672 130.697 83.672 212.966 0 172.832-140.108 312.94-312.94 312.94s-312.94-140.108-312.94-312.94c0-92.64 40.267-175.864 104.239-233.163l-35.178-10.429c-50.095 49.789-86.09 113.745-101.473 185.357v156.999c27.214 126.692 118.942 229.423 239.116 272.128h249.179c144.179-51.237 247.419-188.875 247.419-350.629z" fill="#FEB633" p-id="1877"></path><path d="M144.282 472.958c0 172.832 140.108 312.94 312.94 312.94s312.94-140.108 312.94-312.94c0-82.269-31.762-157.108-83.672-212.966a65.847 65.847 0 0 1-37.729-18.855l-43.788-44.096c-44.008-23.615-94.311-37.023-147.75-37.023-0.571 0-1.138 0.019-1.708 0.022l-39.544 39.822a256.808 256.808 0 0 1 22.898-1.039c140.209 0 253.871 113.662 253.871 253.871S579.076 706.565 438.867 706.565 184.996 592.903 184.996 452.694c0-82.425 39.292-155.662 100.154-202.039l-36.63-10.86c-63.971 57.299-104.238 140.523-104.238 233.163z" fill="#FFBC34" p-id="1878"></path><path d="M184.996 452.694c0 140.209 113.662 253.871 253.871 253.871s253.871-113.662 253.871-253.871-113.662-253.871-253.871-253.871c-7.72 0-15.353 0.365-22.898 1.039l-40.987 41.275a66.355 66.355 0 0 1-2.631 2.495c15.404-3.918 31.538-6.005 48.161-6.005 107.586 0 194.802 87.216 194.802 194.802S528.1 627.232 420.513 627.232 225.711 540.016 225.711 432.43c0-74.37 41.681-138.998 102.952-171.82a65.561 65.561 0 0 1-19.035-2.698l-24.477-7.257c-60.863 46.377-100.155 119.614-100.155 202.039z" fill="#FFC134" p-id="1879"></path><path d="M225.711 432.43c0 107.586 87.216 194.802 194.802 194.802s194.802-87.216 194.802-194.802S528.1 237.628 420.513 237.628a195.188 195.188 0 0 0-48.161 6.005 65.795 65.795 0 0 1-43.689 16.977c-61.271 32.822-102.952 97.45-102.952 171.82z m176.448-155.998c74.964 0 135.734 60.77 135.734 135.734S477.123 547.9 402.159 547.9s-135.734-60.77-135.734-135.734 60.771-135.734 135.734-135.734z" fill="#FFC634" p-id="1880"></path><path d="M402.159 412.166m-135.734 0a135.734 135.734 0 1 0 271.468 0 135.734 135.734 0 1 0-271.468 0Z" fill="#FFCB34" p-id="1881"></path><path d="M511.87 148.837c12.81 0 24.861 5.031 33.932 14.165l90.186 90.819c15.88 15.992 37.005 24.798 59.483 24.798a83.602 83.602 0 0 0 23.761-3.45l113.054-33.518c4.494-1.332 9.089-2.008 13.658-2.008 26.427 0 47.926 21.783 47.926 48.557v489.137c0 26.749-21.553 48.511-48.045 48.511H177.919c-26.494 0-48.049-21.762-48.049-48.511V288.2c0-13.181 5.112-25.483 14.395-34.64 9.099-8.976 21.007-13.919 33.531-13.917 4.572 0.001 9.168 0.676 13.659 2.008l113.059 33.519a83.571 83.571 0 0 0 23.758 3.45c22.475 0 43.6-8.806 59.483-24.799l90.185-90.819c9.07-9.135 21.12-14.165 33.93-14.165m0-18c-16.903 0-33.806 6.494-46.703 19.482l-90.184 90.819c-12.567 12.653-29.442 19.482-46.711 19.482a65.572 65.572 0 0 1-18.644-2.708l-113.057-33.518a65.985 65.985 0 0 0-18.773-2.75c-35.226-0.003-65.927 28.759-65.927 66.557v489.137c0 36.734 29.57 66.511 66.049 66.511h667.906c36.475 0 66.045-29.777 66.045-66.511V288.2c0-37.795-30.702-66.557-65.926-66.557-6.167 0-12.471 0.881-18.774 2.75l-113.054 33.518a65.572 65.572 0 0 1-18.644 2.708c-17.271 0-34.145-6.828-46.711-19.482l-90.186-90.819c-12.899-12.987-29.803-19.481-46.706-19.481z" fill="#FFA820" p-id="1882"></path><path d="M585.301 373.906H438.442c-16.753 0-32.823 7.077-44.67 19.67L292.602 501.14c-9.41 10.005-9.41 26.23 0 36.237l196.687 209.115c12.473 13.261 32.69 13.261 45.16 0l196.687-209.115c9.414-10.007 9.414-26.231 0-36.237l-101.17-107.565c-11.844-12.593-27.914-19.669-44.665-19.669z" fill="#FFE3B4" p-id="1883"></path><path d="M172.303 386.606c-9.941 0-18-8.059-18-18v-46.524c0-15.617 7.112-30.018 19.513-39.51 12.402-9.492 28.16-12.597 43.235-8.521l26.401 7.141c9.596 2.595 15.271 12.479 12.676 22.075-2.595 9.596-12.478 15.271-22.075 12.676l-26.401-7.141a13.667 13.667 0 0 0-11.954 2.356 13.656 13.656 0 0 0-5.395 10.924v46.524c0 9.941-8.059 18-18 18zM172.303 456.211c-9.941 0-18-8.059-18-18v-10.545c0-9.941 8.059-18 18-18s18 8.059 18 18v10.545c0 9.941-8.059 18-18 18z" fill="#FFFFFF" p-id="1884"></path></svg>
            <span style="font-size:10px;">￥<span style="font-size:16px;font-weight:700;">4</span></span>
            <span style="font-size:12px;">无门槛</span>
          </div>
          <div class="p1_dui"><span style="font-size:12px;">兑</span></div>

          <div class="p2">
            <span style="font-size:10px;">￥<span style="font-size:16px;font-weight:700;">3</span></span>
          </div>
          <div class="p2_dui"><span style="font-size:12px;">兑</span></div>
        </div>

      </div>
    </div>
    
      
    <div class="FL_main">
      <div class="slabel">
          <van-tabs 
            v-model="active"
            animated
            swipeable
            color="rgba(28, 180, 250, 0.753)"
            title-active-color="black"
            line-width="30"
            @click="getInfo">
            <van-tab title="点餐">
              <div class="order">
                <van-sidebar v-model="activeKey" style="width:18%;" >
                  <van-sidebar-item title="推荐" @click="label1"/>
                  <van-sidebar-item title="热销" @click="label2"/>
                </van-sidebar>
                <div class="foods">
                  <div class="title">
                    <span style="font-weight:700">{{labelList[activeKey].lname}}</span>
                    <span style="color:rgba(141, 148, 153, 0.76);margin-left:5px;">{{labelList[activeKey].lcontent}}</span>
                  </div>
                  <div
                    class="food_card"
                    v-for="(foods, index) in foodList"
                    :key="index"
                  >
                      <div class="fleft" @click="goDetail(foods.fid)">
                        <img :src="picIp+foods.fpic" alt="">
                      </div>
                      <div class="fright">
                        <div class="fname" @click="goDetail(foods.fid)">
                          <span>{{foods.fname}}</span>
                        </div>
                        <div class="ftitle" @click="goDetail(foods.fid)">
                          <span>{{foods.ftitle}}</span>
                        </div>
                        <div class="fsales">
                          <span>月售 {{foods.fsales}}</span>
                        </div>
                        <div class="shop">
                          <div class="fprice">
                            <span style="color:red">￥<span style="font-size:20px">{{foods.price}}</span></span>
                            <span style="text-decoration: line-through;margin-left:2px">￥{{foods.pprice}}</span>
                          </div>
                          <div class="shopping_list">
                            <div class="dec" @click="decFood(foods.fid, foods.index)"  v-if="shoplist[foods.index].fnum != 0">
                              <van-icon name="minus" size="16"/>
                            </div>
                            <div class="num"  v-if="shoplist[foods.index].fnum != 0">
                              <span>{{shoplist[foods.index].fnum}}</span>
                            </div>
                            <div class="add" @click="addFood(foods.fid, foods.index)">
                              <van-icon name="plus" size="16"/>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                  </div>

                </div>
              </div>
            </van-tab>
            <van-tab title="评价">
              <div class="eva_main">
                <div class="eva_card">
                  <div class="eleft">
                    <span>{{store.evaluate}}<span style="font-size:16px">分</span></span>
                  </div>
                  <div class="eright">
                    <div class="erdetail">
                      <span>味道</span><br/>
                      <span style="font-size:16px;color:black;">{{store.evaluate}}</span>
                    </div>
                    <div class="erdetail" style="padding-right:16px">
                      <span>包装</span><br/>
                      <span style="font-size:16px;color:black;">{{store.evaluate}}</span>
                    </div>
                    <div class="erdetail" style="border-left:solid 2px rgb(245, 238, 238);padding-left:16px;">
                      <span>配送满意度</span><br/>
                      <span style="font-size:16px;color:black;">100%</span>
                    </div>
                    
                  </div>
                </div>
                <div class="eva_block">
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
                    <div class="eva_detail">
                      <div class="ed_left">
                        <div class="eva_food">
                          <span>已购：{{eva.fname}}</span>
                        </div>
                        <div class="eva_content">
                          <span>{{eva.content}}</span>
                        </div>
                      </div>
                      <div class="ed_right">
                        <van-image :src="picIp+eva.fpic" lazy-load></van-image>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
                
              </div>
              
            </van-tab>
            <van-tab title="商家">
              <div class="info_main">
                <div class="icards">
                  <div class="info_card">

                    <div class="address">
                      <div class="aleft">
                        <span style="font-weight: 600;">{{store.sname}}</span><br/>
                        <span style="font-size:12px;color: rgb(77, 79, 82);">{{store.site}}</span>
                      </div>
                      <div class="aright">
                        <svg t="1636416171650" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2509" width="40" height="40"><path d="M419.6 344l-88 89.6c45.8 101.7 143 215 255.7 253.1l76.1-75.8s180.3 31.5 220.8 51.1c35.2 17 46.8 54.8 41.3 101.4-5.8 50.1-71.5 160.5-189.7 161.7-118.2 1.2-292.3-87.9-417-219.2-124.7-131.5-235.9-298.1-218-439.5C118.5 124.9 241.7 99.6 272.5 97.3c31.2-2.3 55.9 6.8 74.7 30.1 24.2 30.1 72.4 216.6 72.4 216.6z" fill="#1375FF" p-id="2510"></path></svg>
                      </div>
                    </div>
                    <div class="more_info">
                      <span style="font-size:14px;font-weight: 600;">商家信息</span><br/>
                      <span style="font-size:12px;color: rgb(77, 79, 82);">商家品类：{{store.type}}</span><br/>
                      <span style="font-size:12px;color: rgb(77, 79, 82);">营业时间：7:30-21:30</span>
                    </div>
                    <div>
                      <div class="ibutton">查看营业资质</div>
                    </div>
                  
                  </div>
                  <div class="info_card">
                    <div class="report"><span>举报商家</span></div>
                  </div>
                </div>
                
              </div>
            </van-tab>
          </van-tabs>
      
      </div>


    </div>

    <van-popup
          v-model="list_show"
          position="bottom"
          :style="{ display: 'inline-block'}"
    >
    <div class="shoplist_nav" v-if="list_show">
      <div class="shoplist_nav_left">
        <span>已选商品</span>
      </div>
      <div class="shoplist_nav_right" @click="clear">
        <van-icon name="delete-o" />
        <span style="font-size:12px;">清空</span>
      </div>
    </div>
    <div class="shoplist_main" style="margin-top:36px" v-if="list_show">
      <div v-for="(item, index) in shoplist" :key="index">
        <div class="shoplist_fcard" v-if="item.fnum !== 0">
          <div class="shoplist_fcard_left">
            <van-image :src="picIp+item.fpic" lazy-load></van-image>
          </div>
          <div class="shoplist_fcard_right">
            <div class="fcard_title">
              <span>{{item.fname}}</span>
            </div>
            <div class="fcard_price">
              <div>
                <span>￥{{item.price*item.fnum}}</span>
              </div>

              <div class="shopping_list">
                <div class="dec" @click="decFood(item.fid, item.index)"  v-if="shoplist[item.index].fnum != 0">
                  <van-icon name="minus" size="16"/>
                </div>
                <div class="num"  v-if="shoplist[item.index].fnum != 0">
                  <span>{{shoplist[item.index].fnum}}</span>
                </div>
                <div class="add" @click="addFood(item.fid, item.index)">
                  <van-icon name="plus" size="16"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </van-popup>
    <div class="shopping_car" v-if="sumPrice - store.smin >= 0">
       <div class="cleft"  @click="showPopup">
         <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cs-xchz-1"></use>
        </svg>
        <div class="sum_price">
          <span style="font-size:20px;"><span style="font-size:14px;">￥</span>{{sumPrice}}</span><br/>
          <span  style="font-size:12px;" v-if="store.dfee === 0">免配送费</span>
          <span  style="font-size:12px;" v-else>预估加配送费￥{{store.dfee}}</span>
        </div>
       </div>
       <div class="cright">
         <van-button round type="info" @click="goOrder">去结算</van-button>
       </div>
    </div>

    <div class="shopping_car" v-else>
       <div class="cleft" style="color: rgb(136, 127, 127);" v-if="sumPrice === 0">
         <span class="iconfont" style="font-size: 50px;">&#xe62d;</span>
        <div class="sum_price">
          <span style="font-size:20px;"><span style="font-size:14px;">￥</span>{{sumPrice}}</span><br/>
          <span  style="font-size:12px;" v-if="store.dfee === 0">免配送费</span>
          <span  style="font-size:12px;" v-else>预估加配送费￥{{store.dfee}}</span>
        </div>
       </div>
       <div class="cleft" style="color: rgb(136, 127, 127);" v-else @click="showPopup">
         <span class="iconfont" style="font-size: 50px;">&#xe62d;</span>
        <div class="sum_price">
          <span style="font-size:20px;"><span style="font-size:14px;">￥</span>{{sumPrice}}</span><br/>
          <span  style="font-size:12px;" v-if="store.dfee === 0">免配送费</span>
          <span  style="font-size:12px;" v-else>预估加配送费￥{{store.dfee}}</span>
        </div>
       </div>
       <div class="cright" v-if="sumPrice === 0">
         <van-button round disabled type="info" style="background-color: rgb(136, 127, 127);">去结算</van-button>
       </div>
       <div class="cright" v-else>
         <van-button round disabled type="info" style="background-color: rgb(136, 127, 127);">还差￥{{store.smin - sumPrice}}元起送</van-button>
       </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
  name: "FoodsList",
  data() {
    return {
      sid:this.$route.params.value,
      active: 0,
      activeKey: 0,
      spicIp: "http://localhost:8080/spic/",
      picIp: "http://localhost:8080/opic/",
      hpicIp: "http://localhost:8080/hpic/",
      foodIp: "food/getListBySid",
      foodList:[],
      labelList:[
        {"lname":"推荐", "lcontent":"精选好菜"},
        {"lname":"热销", "lcontent":"大家喜欢吃，才叫真好吃"}
      ],
      store:[],
      shoplist:[],
      ifInit: false,
      sumPrice: 0,
      list_show: false,
      user: null,
      islogin: false,
      evaList: [],
    };
  },
  created() {
    this.loadStore();
    this.getFoodList();
    var user=JSON.parse(localStorage.getItem("userInfo"));
    if(user!=null){
      this.user = user;
      this.islogin = true;
    }
  },
  methods: {
    getInfo(name, title) {
      if(name == 1)
        this.getEvaList();
    },
    getEvaList() {
      this.axios.post("fcom/getEvaList",{
        'sid': this.store.sid,
      }).then(response=>{
        this.evaList = response.data;
      })
    },
    goOrder() {
      this.$router.push({name: 'Order', params: {
        shoplist: this.shoplist,
        sumPrice: this.sumPrice,
        store: this.store,
        user: this.user,
      }});
    },
    clear() {
      Dialog.confirm({
        message: '清除购物车？',
        beforeClose,
      }).then(()=>{
        this.clearList();
        this.list_show = false;
      }).catch(()=>{
      });
    },
    clearList() {
      for (var i = 0; i < this.shoplist.length; i++) {
        this.shoplist[i].fnum = 0;
        this.sumPrice=0;
      }
    },
    showPopup() {
      this.list_show = true;
    },
    decFood(fid, i) {
        if (this.shoplist[i].fid === fid && this.shoplist[i].fnum !== 0) {
          this.shoplist[i].fnum--;
          this.sumPrice -= this.shoplist[i].price;
        }
        if (this.sumPrice === 0) {
          this.list_show = false;
        }
    },
    addFood(fid, i) {
      if(!this.islogin) {
        Toast.fail('请先登录!');
        this.$router.push('../Mine');
      }
      if(this.user.uid === this.store.uid) {
        Toast.fail('不能在自己店铺购买！');
        return;
      }
      if(this.shoplist[i].fid === fid) {
        if(this.shoplist[i].fnum > 999) return;
        this.shoplist[i].fnum++;
        this.sumPrice += this.shoplist[i].price;
      }
    },
    initShopList() {
      for (var i = 0; i < this.foodList.length; i++) {
        Vue.set(this.foodList[i], "index", i);
        Vue.set(this.shoplist, i, {
          "fpic": this.foodList[i].fpic,
          "fname": this.foodList[i].fname,
          "price": this.foodList[i].price,
          "index": i,
          "fid": this.foodList[i].fid,
          "fnum": 0,
        });
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    loadStore(){
      this.axios
        .post("store/getStoreInfo",{
          sid: this.sid,
        })
        .then(response=>{
          this.store = response.data;
        })
    },
    getFoodList(){
      this.axios
        .post(this.foodIp,{
          sid: this.sid,
        })
        .then(response=>{
          this.foodList = response.data;
          if(!this.isInit) {
            this.initShopList();
            this.isInit = true;
          }
          else {
            this.setIndex();
          }
          //console.log(this.foodList);
        })
    },
    setIndex() {
      for (var i = 0; i < this.foodList.length; i++) {
        for(var j = 0; j < this.shoplist.length; j++) {
          if(this.shoplist[j].fid === this.foodList[i].fid)
            Vue.set(this.foodList[i], "index", this.shoplist[j].index);
        }
      }
    },
    label1(){
      this.foodIp = "food/getListBySid";
      this.getFoodList();
    },
    label2(){
      this.foodIp = "food/getFoodsOrderBySales";
      this.getFoodList();
    },
    goDetail(fid){
      this.$router.push("../FoodDetail/"+fid)
    }
  },
  
};
function beforeClose(action, done) {
  if (action === 'confirm') {
    setTimeout(done, 600);
  } else {
    done();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/foodlist.css">
</style>
