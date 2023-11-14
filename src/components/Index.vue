<template>
  <div class="hello">
    <div class="header">
      <div class="nav">
        <div>
          <van-icon name="location-o" size="20" />
          <span>湖北理工学院</span>
        </div>
        <div class="nav_right">
          <van-icon name="scan" size="20" />
          <van-icon name="cart-o" size="20" />
          <van-icon name="comment-o" size="20" />
        </div>
      </div>

      <div class="search">
        <van-search
          shape="round"
          background="rgba(28, 180, 250, 0.753)"
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @click="goSearch"
        >
          <template #action>
            <div @click="goSearch">搜索</div>
          </template>
        </van-search>
      </div>
    </div>

    <div class="more">
      <van-grid square>
        <van-grid-item
          ><svg class="icon" aria-hidden="true" style="font-size: 40px">
            <use xlink:href="#icon-jitui"></use></svg
          ><span style="font-size: 14px">美食外卖</span></van-grid-item
        >
        <van-grid-item
          ><svg class="icon" aria-hidden="true" style="font-size: 40px">
            <use xlink:href="#icon-fuwuchaoshi"></use></svg
          ><span style="font-size: 14px">超市便利</span></van-grid-item
        >
        <van-grid-item
          ><svg class="icon" aria-hidden="true" style="font-size: 40px">
            <use xlink:href="#icon-chazi-"></use></svg
          ><span style="font-size: 14px">美食团购</span></van-grid-item
        >
        <van-grid-item
          ><svg class="icon" aria-hidden="true" style="font-size: 40px">
            <use xlink:href="#icon-paotuiAPP"></use></svg
          ><span style="font-size: 14px">跑腿代购</span></van-grid-item
        >

        <van-grid-item
          ><svg class="icon" aria-hidden="true" style="font-size: 40px">
            <use xlink:href="#icon-yule"></use></svg
          ><span style="font-size: 14px">休闲玩乐</span></van-grid-item
        >
        <van-grid-item
          ><svg class="icon" aria-hidden="true" style="font-size: 40px">
            <use xlink:href="#icon-wancan"></use></svg
          ><span style="font-size: 14px">晚餐</span></van-grid-item
        >
        <van-grid-item
          ><svg class="icon" aria-hidden="true" style="font-size: 40px">
            <use xlink:href="#icon-shuiguo"></use></svg
          ><span style="font-size: 14px">水果</span></van-grid-item
        >
        <van-grid-item
          ><svg class="icon" aria-hidden="true" style="font-size: 40px">
            <use xlink:href="#icon-yinpin"></use></svg
          ><span style="font-size: 14px">甜品饮品</span></van-grid-item
        >

        <van-grid-item
          ><svg class="icon" aria-hidden="true" style="font-size: 40px">
            <use xlink:href="#icon-qingcai"></use></svg
          ><span style="font-size: 14px">买菜</span></van-grid-item
        >
        <van-grid-item
          ><svg class="icon" aria-hidden="true" style="font-size: 40px">
            <use xlink:href="#icon-hongbao"></use></svg
          ><span style="font-size: 14px">红包膨胀</span></van-grid-item
        >
        <van-grid-item
          ><svg class="icon" aria-hidden="true" style="font-size: 40px">
            <use xlink:href="#icon-yao"></use></svg
          ><span style="font-size: 14px">送药上门</span></van-grid-item
        >
        <van-grid-item
          ><svg class="icon" aria-hidden="true" style="font-size: 40px">
            <use xlink:href="#icon-quanbu"></use></svg
          ><span style="font-size: 14px">全部</span></van-grid-item
        >
      </van-grid>
    </div>

    <div class="main">
      <div class="tab">
        <van-tabs
          v-model="active"
          animated
          swipeable
          background="rgb(222, 233, 233)"
          color="rgba(28, 180, 250, 0.753)"
          title-active-color="black"
          line-width="20"
          @click="getStoreListByKid"
        >
          <van-tab
            v-for="kind in kindList"
            :title="kind.content"
            :key="kind.kid"
          >
          </van-tab>
        </van-tabs>

        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <div
              class="store_card"
              v-for="(stores, index) in storeList"
              :key="index"
              @click="goList(stores.sid)"
            >
              <div class="card_left">
                <img v-lazy="picIp + stores.spic" />
              </div>
              <div class="card_right">
                <div class="right_header">
                  <div class="RH_title">
                    <span>{{ stores.sname }}</span>
                  </div>
                  <div class="RH_more">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-gengduo-shuxiang"></use>
                    </svg>
                  </div>
                </div>

                <div class="right_detail">
                  <div class="RD_evaluate">
                    <span style="font-size: 16px; color: rgb(231, 133, 41)">{{
                      stores.evaluate
                    }}</span>
                    <span style="font-size: 14px; color: rgb(231, 133, 41)"
                      >分</span
                    >
                    <span>月售4586</span>
                  </div>
                  <div class="RD_distribution">
                    <span>35分钟</span>
                    <span>152m</span>
                  </div>
                </div>

                <div class="right_price">
                  <span>起送￥{{ stores.smin }}</span>
                  <span style="margin-left: 5px"
                    >配送费￥{{ stores.dfee }}</span
                  >
                </div>

                <div class="right_title">
                  <span>“{{ stores.title }}”</span>
                </div>
              </div>
            </div>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
Vue.use(Lazyload);
export default {
  name: "Index",
  data() {
    return {
      value: "",
      active: 0,
      kindList: [{ kid: 0, content: "附近推荐" }],
      storeList: [],
      picIp: "http://localhost:8080/spic/",
      getListIp: "",
      pageNo: 1,
      loading: false,
      finished: false,
      refreshing: false,
      kid: 1,
    };
  },
  created() {
    this.getKindList();
    this.getStoreList();
    this.pageNo = 1;
  },
  methods: {
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.pageNo = 1;
      this.onLoad();
    },
    kindInit(){
      this.finished = false;
      this.pageNo = 1;
      this.storeList = [];
    },
    goSearch() {
      this.$router.push("/Search");
    },
    getStoreList() {
      this.kindInit();
      this.getListIp =
        "store/getAll";
      this.onLoad();
    },
    getStoreListByKid(name) {
      if (name == 0) {
        this.getStoreList();
      } else {
        this.kindInit();
        this.getListIp =
          "store/getByKind";
        this.kid = name;
        this.onLoad();
      }
    },
    getKindList() {
      this.axios
        .get("skind/getSkindList")
        .then((response) => {
          this.kindList = this.kindList.concat(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onLoad() {
      if (this.refreshing) {
        this.storeList = [];
        this.refreshing = false;
      }
      this.axios
        .post(this.getListIp,{
          pageNum:this.pageNo,
          kid:this.kid,})
        .then((response) => {
          this.storeList = this.storeList.concat(response.data.list);
          this.loading = false;
          //判断是否为最后一页
          if (this.pageNo > response.data.pages) {
            this.finished = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.pageNo++;
    },
    goList(sid){
      this.$router.push('FoodsList/'+sid)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
  background-color: rgba(28, 180, 250, 0.753);
}
/* 导航栏样式 */
.nav {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
}
.nav_right .van-icon {
  margin-right: 5px;
}

.main .tab {
  margin: 5px 5px 5px 5px;
}
</style>
