<template>
  <div class="page1">
    <mt-swipe :show-indicators="false" :auto="0" :defaultIndex="dcurIndex" @change="handleChange">
      <mt-swipe-item v-for="(v, k) in items" :key="k">
        <div class="zcard">
          <h3 class="tit">{{v.cindex}}，{{v.tit}}（{{v.type==1?"多选":"单选"}}）</h3>
          <div class="card_con">
            <mt-checklist
              align="right"
              class="page-part"
              v-model="value1"
              :options="v.item"
              v-if="v.type==1"
              >
            </mt-checklist>

            <mt-radio
              align="right"
              class="page-part"
              v-model="value2"
              :options="v.item"
              v-else
            ></mt-radio>
          </div>
        </div>

        <mt-button size="large" type="danger" :disabled="isdisable" class="J_sbtn" @click="goNext($event, false)" v-if="k<tempTotal-1">下一题</mt-button>
        <mt-button size="large" type="danger" :disabled="isdisable" class="J_sbtn" @click="goNext($event, true)" v-else>提交</mt-button>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Toast, MessageBox} from 'mint-ui';
export default {
  data () {
    return {
      tempTotal: 10,
      curIndex: 3,
      // 选项目录
      items: null,
      // 多选结果
      value1: [],
      // 单选结果
      value2: ''
    }
  },
  computed: {
    isdisable () {
      if(this.curitem.type == 1)
        return this.value1.length == 0 ? true : false;
      else
        return this.value2 ? false : true;
    },
    curitem () {
      return this.items[this.curIndex];
    },
    dcurIndex () {
      return this.curIndex;
    }
  },
  created () {
    window.localStorage.removeItem("w_zdati");
    // 使用 Mock
    var Mock = require('mockjs');
    var Random = Mock.Random;

    var citem = Mock.mock({
      'data|10':[{
        'id|+1':1,
        'cindex|+1':1,
        'type': '@integer(1,2)',
        'tit':'@ctitle(3,8)',
        'item|2-5':[
          {
            'value': 'A@natural(101, 1000)',
            'label': '@csentence(5, 13)'
          }
        ]
      }]
    })
    this.items = citem.data;
  },
  mounted () {
    var _store = this.$store;
    // 公用方法里的调用
    this.zutil.utilAlert();

  },
  methods: {
    handleChange(index) {
      this.curIndex = index;
    },
    goNext (e, flag) {
      // 把已答题数据存至本地
      let w_zdati = window.localStorage.getItem("w_zdati") || [];
      if(w_zdati && w_zdati.length)
        w_zdati = JSON.parse(w_zdati);

      this.curitem.answer = [];
      if(this.curitem.type == 1){
        this.value1.forEach(v=>{
          this.curitem.answer.push(v);
        })
      }else{
        this.curitem.answer.push(this.value2);
      }
      w_zdati.push(this.curitem);
      window.localStorage.setItem("w_zdati", JSON.stringify(w_zdati));

      // 清空数据，返回下一条
      this.value1 = [];
      this.value2 = '';
      if(flag){
        // 提交
        MessageBox.confirm('已完成作答，是否提交?').then(action => {
          Toast('提交成功');
          window.localStorage.removeItem("w_zdati");
        }).catch(e => {
          Toast('取消提交');
          window.localStorage.removeItem("w_zdati");
        })
        this.curIndex = 0;
      }else{
        this.curIndex++;
      }
      console.log(this.dcurIndex)
      console.log(JSON.stringify(w_zdati))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.page1 {
  background-image: linear-gradient( 135deg, #5EFCE8 10%, #736EFE 100%);
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  .zcard {
    padding: 10px 10px 30px;
    border-radius: 5px;
    background: #fff;
    color: #333;
    margin: 30px 10px 0;
    .tit {
      font-size: 16px;
      min-height: 50px;
      margin-top: 20px;
    }
    .card_con {
      .mint-cell {
        &:last-child {
          background: none;
        }
        .mint-cell-wrapper {
          background: none;
          border: 1px solid #ddd;
          margin-bottom: 15px;
          border-radius: 50px;
          font-size: 14px;
          .mint-checkbox-core {
            border-radius: 0;
          }
          .mint-checkbox-label {
            vertical-align: -5px;
          }
          .mint-radio-label {
            vertical-align: -3px;
          }
        }
      }
    }
  }
  .J_sbtn {
    width: calc(100% - 20px);
    margin: 30px auto 0;
    &.is-disabled {
      background: #ddd;
      opacity: 1;
    }
  }
}
</style>
