<template>
  <div class="zfoot">
  <p>© zhouweihny Vue Learn</p>
  </div>
</template>

<script>
export default {
  name: 'zfooter',
  data () {
    return {
      
    }
  },
  mounted () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zfoot {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 32px;
  line-height: 32px;
  text-align: center;
}
.zfoot p {
  margin: 0;
  padding: 0;
  font-size: 12px;
  z-index: 99;
}
</style>
