<template>
  <div class="hello">
    <div class="searchNav">
      <div class="back" @click="goBack">
        <van-icon name="arrow-left" size="20" />
      </div>
      <div class="search">
        <van-search
          v-model="value"
          shape="round"
          clearable
          background="rgba(28, 180, 250, 0.753)"
          placeholder="请输入搜索关键词"
          @search="onSearch"
        >
        </van-search>
      </div>
      <div class="search_button">
        <van-button round type="info" size="small" @click="onSearch(value)">搜索</van-button>
      </div>
    </div>

    <div class="history">
      <div class="func">
        <div class="title">
          <span>历史搜索</span>
        </div>
        <div class="clear" @click="clearHistory">
          <svg
            t="1636095963174"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4175"
            width="12"
            height="24"
          >
            <path
              d="M768 153.6h230.4a25.6 25.6 0 1 1 0 51.2H921.6v716.8a102.4 102.4 0 0 1-102.4 102.4H204.8a102.4 102.4 0 0 1-102.4-102.4V204.8H25.6a25.6 25.6 0 0 1 0-51.2H256V102.4a102.4 102.4 0 0 1 102.4-102.4h307.2a102.4 102.4 0 0 1 102.4 102.4v51.2z m-51.2 0V102.4a51.2 51.2 0 0 0-51.2-51.2H358.4a51.2 51.2 0 0 0-51.2 51.2v51.2h409.6zM153.6 204.8v716.8a51.2 51.2 0 0 0 51.2 51.2h614.4a51.2 51.2 0 0 0 51.2-51.2V204.8H153.6z"
              fill="#000000"
              p-id="4176"
            ></path>
          </svg>
        </div>
      </div>

      <div class="item">
        <van-row>
          <van-col v-for="(item, index) in list" :key="index" @click="goResult(item)" class="itemList">
            <span>{{item}}</span>
          </van-col>
          <van-col class="open" ><van-icon name="arrow-down" size="20"/></van-col>
          </van-row>
      </div>


    </div>

    <div class="group_search">
      <div class="gtitle">
        <span>组合搜索选项</span>
      </div>
      <van-radio-group v-model="radio" :max="1">
        <van-radio v-for="(item, index) in klist" :key="index" :name="item.kid">{{item.content}}</van-radio>
      </van-radio-group>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      value: "",
      list: [],
      radio: '0',
      klist: [{kid: "0", content:"不使用组合搜索"}],
    };
  },
  created() {
    var history=localStorage.getItem("history");
    if(history!=null){
      this.list=history.split(",");
    }
    this.axios
        .post("skind/getSkindList")
        .then((response) => {
          this.klist = this.klist.concat(response.data)
        })
        .catch((err) => {
          console.log(err);
        });
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    onSearch(val){
      if (val == null || val == '') {
        this.goResult(val);
        return;
      }
      for(var i = 0; i < this.list.length; i++){
        if(this.list[i] == val){
          this.list.splice(i,1);
        }
      }
      this.list.splice(0, 0, val);
      localStorage.setItem("history", this.list.toString());
      this.goResult(val);
    },
    clearHistory(){
      localStorage.removeItem("history");
      this.list=[];
    },
    goResult(val){
      this.$router.push({name: 'SearchResult', params: {
        keyword: val,
        kid: this.radio,
        }});
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchNav {
  display: flex;
  justify-content: space-between;
}
.back {
  width: 5%;
  padding-top: 17px;
  padding-left: 8px;
  background:rgba(28, 180, 250, 0.753);
  color: white;
}
.search{
  width: 81%;
}
.search_button{
  width: 14%;
  background-color: rgba(28, 180, 250, 0.753);
  line-height: 42.66px;
}
.func {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
}
.title {
  font-weight: 700;
  margin-left: 8px;
}
.clear {
  margin-right: 8px;
}
.item{
  display: flex;
  justify-content: left; 
}
.itemList{
  display: inline-block;
  color: black;
  background: rgb(243, 243, 239);
  padding: 4px 6px;
  border-radius: 10px;
  max-width: 100px;
  text-overflow: ellipsis;  /* ellipsis:显示省略符号来代表被修剪的文本  string:使用给定的字符串来代表被修剪的文本*/ 
  white-space: nowrap;   /* nowrap:规定段落中的文本不进行换行   */ 
  overflow: hidden; /*超出部分隐藏*/
  margin-left: 8px;
  margin-top: 5px;
}
.open{
  margin-left: 10px;
  padding: 2px;
  background: rgb(243, 243, 239);
  border-radius: 50%;
  margin-top: 5px;
}
.group_search{
  margin-left: 8px;
  text-align: left;
  margin-top: 10px;
  border-top: solid 0.5px rgb(241, 238, 238);
  padding-top: 8px;
}
.gtitle{
  font-weight: 700;
}
.van-radio{
  margin-top: 3px;
}
</style>
