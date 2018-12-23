<template>
  <div>
    <zheader v-if="!hideHead"></zheader>
    <mt-button type="default" @click="setRouter(1)">示例1</mt-button>
    <mt-button type="default" @click="setRouter(2)">示例2</mt-button>
    <router-view></router-view>
    <zfooter v-if="!hideFoot"></zfooter>
  </div>
</template>

<script>
import zheader from '@/components/zheader';
import zfooter from '@/components/zfooter';

export default {
  name: 'mainpage',
  data () {
    return {
      hideHead: false,
      hideFoot: false
    }
  },
  computed: {
    
  },
  watch: {
    '$route.path': function(newVal, oldVal){
      if(newVal == '/')
        this.hideHead = true;
      else
        this.hideHead = false;
    }
  },
  created () {
    
  },
  mounted () {
    this.hideHead = true;
  },
  methods: {
    setRouter (type) {
      this.hideHead = false;
      this.$router.push('page'+type);
    }
  },
  components: {zheader, zfooter}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
