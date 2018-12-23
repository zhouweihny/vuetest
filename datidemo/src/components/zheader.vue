<template>
  <div class="zpage">
    <mt-header title="答题">
      <router-link to="/" slot="left" v-if="showBack">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" v-if="showMore"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'zheader',
  data () {
    return {
      showBack: true,
      showMore: true
    }
  },
  mounted () {
    if(this.$route.path === '/page1'){
      
    }
    
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.zpage .mint-header {
  background-image: linear-gradient(90deg, #5efce8 10%, #65cef0 100%);
  color: #333;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
</style>
