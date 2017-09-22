<<template>
  <div>
    <myHeader></myHeader>
    <div class="article_list">
    <!--  <router-link :to="'/home/embind'">
       hha
      </router-link>-->
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import myHeader from '../components/header.vue'
  import Footer from '../components/footer.vue'
  export default {
    components: { myHeader, Footer },
    data () {
      return {
        list: []
      }
    },
    created () {
      //this.getData()
      this.$router.push('/home/embind');
    },
    methods: {
      getData () {
        this.$api.get('topics', null, r => {
          this.list = r.data
        })
      }
    }
  }
</script>
<style>
  .article_list {margin: auto;}
</style>
