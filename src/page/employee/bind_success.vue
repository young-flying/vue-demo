<style>

</style>

<template>
  <div class="weui_msg">
    <div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>
    <div class="weui_text_area">
      <h2 class="weui_msg_title">恭喜您成功完成绑定</h2>
      <p class="weui_msg_desc">点击确定返回</p>
    </div>
    <div class="weui_opr_area">
      <p class="weui_btn_area">
        <a id="check" href="javascript:;" class="weui_btn weui_btn_primary">确定</a>
        <a id="showcode" href="/apply/qrcode/${appId}" class="weui_btn weui_btn_primary">业务员二维码</a>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    created () {
    },
    methods: {

    }
  }
</script>
