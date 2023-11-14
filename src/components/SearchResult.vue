<template>
  <div class="hello">
    <div class="search">
      <van-search
        shape="round"
        v-model="value"
        show-action
        background="rgba(28, 180, 250, 0.753)"
        placeholder="请输入搜索关键词"
        @click="goSearch"
      >
        <template #action>
          <div @click="goSearch">搜索</div>
        </template>
      </van-search>
    </div>

    <div class="main">
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
</template>

<script>
export default {
  name: "SearchResult",
  data() {
    return {
      value:'',
      keyword:this.$route.params.keyword,
      kid:this.$route.params.kid,
      storeList: [],
      picIp: "http://localhost:8080/spic/",
      pageNo: 1,
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  created() {},
  methods: {
    goSearch() {
      this.$router.push("/Search");
    },
    goList(sid){
      this.$router.push('../FoodsList/'+sid)
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.pageNo = 1;
      this.onLoad();
    },
    onLoad() {
      if (this.refreshing) {
        this.storeList = [];
        this.refreshing = false;
      }
      this.axios
        .post("store/storeSearch",{
          keyword: this.keyword,
          kid: this.kid,
          pageNum: this.pageNo,
        })
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
