<style xmlns:v-va="http://www.w3.org/1999/xhtml" xmlns:v-va="http://www.w3.org/1999/xhtml">
  .content {
    margin-top:0.5rem;
  }
  .content .security-code{
    width:30% !important;
  }
  .content input[type="text"] {
    margin-left:15%;
  }
  .content .mbtn {
    display: block;
    width: 50%;
    height: 2rem;
    line-height: 2rem;
    color: #fff;
    background-color: red;
    margin-left: 25%;
    text-decoration: none;
    text-align: center;
  }

</style>

<template>

  <div class="content">
    <div class="content1">
      <form autocomplete="off" id="bind_form"   method="post" action="/employee/submitBindEmployeeWechat">
        <div class="pwd">
          <i></i>
          <input type="text" name="user_id" v-va:Password tag="登陆密码" id="uid" placeholder="工号">

          <p class="tip empty" id="" style="display: block;"></p>
        </div>
        <div class="user">
          <i></i>
          <input type="text" name="user_name" id="uname" placeholder="姓名">
          <p class="tip empty"  style="display: block;"></p>
        </div>
        <div class="user">
          <i></i>
          <input type="text" name="user_idno" id="user_idno" placeholder="身份证号">
          <p class="tip empty"  style="display: block;"></p>
        </div>
        <div class="tel">
          <i></i>
          <input type="text" name="mobile" id="mobile" placeholder="请填您本人手机号">
          <p class="tip empty" style="display: block;"></p>
        </div>
        <div class="identify">
          <input type="text" name="security_code" class="security-code" placeholder="请输入验证码" >
          <a class="yzm" id="yanzhenma">获取验证码</a>
        </div>
        <div class="hqyzm">
          <p class="tip" id="security_code_tip" style="display: none;"></p>
        </div>
        <router-link :to="'/home/embindSuccess'" class="mbtn">
          绑定
        </router-link>
        <button class="btn btn-info" @click="$refs.model.show = true">按 钮</button>
      </form>
    </div>
  </div>

</template>
<script>
  export default {
    data () {
      return {}
    },
    created () {
      this.$toast("ggah");
      this.$confirm({
        title:'提示2',
        content:'这里是提示内容2',
        submitText:'提交',
        cancelText:'返回'
      }).then((r)=>{
        if(r) {
          this.$alert({
            title:'提示2',
            content:'点击了确定'
          });
        } else {
          this.$alert({
            title:'提示2',
            content:'点击了取消'
          });
        }
      }).catch(error => console.log(error));
    },
    methods: {
      back (num) {
        this.$router.go(num);
      }
    }
  }
</script>
