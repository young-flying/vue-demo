<style>
  .public-head {
    background-color: red;
    height: 3rem;
    line-height:3rem;
    text-align: center;
    color: #fff;
  }
  .public-head a{
    color: #fff;
    position: absolute;
    left: 3%;
    font-size: 2rem;
  }
</style>

<template>
    <div class="public-head">
      <a @click="back">&lt;</a>
      <h2 >{{titleName}}</h2>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [],
        titleName:'员工绑定'
      }
    },
    methods: {
      back (num) {
        this.$router.go(num);
      },
      reloadTitle () {
        console.log(this.$route);
        var path = this.$route.path;
        if(path === "/home/embindSuccess") {
          this.titleName = '绑定成功';
        } else if (path === "/home/embind") {
          this.titleName = '员工绑定';
        }

      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "reloadTitle"
    }
  }
  </script>
