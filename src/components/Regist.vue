<template>
  <div class="hello">
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="goback"
    />
    <van-form class="form" @submit="onSubmit"> 
            <van-field
              v-model = "user.uname"
              clearable
              name="uname"
              label="用户名"
              placeholder="用户名"
              :rules="[{required:true, message:'请输入用户名'},
              {pattern:usernamePattern,  message:'用户名应由3-16位英文字母下划线或数字组成'}]"
              @blur="checkUsername"
            />
            <van-field
              v-model = "user.paswd"
              clearable
              type="paswd"
              name="paswd"
              label="密码"
              placeholder="密码"
              :rules="[{required:true, message:'请输入密码'},
              {pattern:passwordPattern, message:'密码应由6-18位英文字母下划线或数字组成'}]"
            />
            <van-field
              v-model = "user.paswd1"
              clearable
              type="paswd"
              name="paswd1"
              label="确认密码"
              placeholder="确认密码"
              :rules="[{required:true, message:'请输入密码'},
              {pattern:passwordPattern, message:'密码应由6-18位英文字母下划线或数字组成'}]"
            />
            <van-field
              v-model = "user.email"
              clearable
              name="email"
              label="邮箱"
              placeholder="邮箱"
              :rules="[{required:true, message:'请输入邮箱'},
              {pattern:emailPattern, message:'请输入正确的邮箱'}]"
            />
            <van-field name="uploader" label="头像">
              <template #input>
              <van-uploader v-model="uploader" multiple :max-count="1" :before-read="beforeRead"/>
              </template>
            </van-field>
            <div style="margin:16px;">
              <van-button round block type="info" native-type="submit" >
                提交
              </van-button>
            </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { Notify } from 'vant';
import { Toast } from "vant";
import { NavBar } from 'vant';

Vue.use(NavBar);
Vue.use(Toast)
Vue.use(Notify)
export default {
  name: "Regist",
  data() {
    return {
      picIp: "http://localhost:8080/pic/",
      user: {
        uname: '',
        paswd: '',
        paswd1: '',
        email: '',
        uid: 0,
      },
      uploader:[],
      usernamePattern: /^[a-zA-Z0-9_-]{3,16}$/,
      passwordPattern: /^[a-zA-Z0-9_-]{6,18}$/,
      emailPattern: /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    };
  },
  created() {
    
  },
  methods: {
    checkUsername(){
      this.axios.post("user/checkUsername",{
        uname:this.user.uname,
      }).then(response=>{
        if(response.data=="exist"){
          Notify({ type: 'danger', message: '用户名已存在' });
          this.user.uname=''
        }
      })
    },
    onSubmit(values){
      if(this.user.paswd!=this.user.paswd1){
        Toast.fail('两次输入的密码不一致！');
        return;
      }
      var form = document.querySelector(".form");
      var formData = new FormData(form);
      var upload = this.uploader[0];
      if (upload == undefined) {
        Notify({ type: 'danger', message: '请上传头像！' });
        return;
      }
      formData.set('imgFile', this.uploader[0].file);
      this.axios.post("user/regist",formData,{
        "content-type":'multipart/form-data'
      }).then(response=>{
        if(response.data=="ok"){
          Toast.success('注册成功');
          this.$router.push("/Mine");
        }else{
          Toast.fail('注册失败');
        }
      })
    },
    goback(){
      this.$router.go(-1);
    },
    beforeRead(file) {
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        Toast('请上传 jpg 或 png 格式图片');
        return false;
      }
      return true;
    },
  },

  watch:{
      'uploader':function(newVal, oldVal){
        if(newVal.length == 1){
          Notify({ type: 'success', message: '上传成功！' });
        }
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
