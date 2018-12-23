import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
	state:{
	  main: {
	    tit: '这是main的store',
	    zheaderFlag: 1,
	    curUrlPage: ''
	  }
	},
	mutations:{
	  main_changetit(state){//这里的state对应着上面这个state
	    console.log(state.main.tit)
	  },
	  main_changeheaderflag(state, val){
	  	state.main.zheaderFlag = val;
	  },
	  main_getcurUrlPage(state, val){
	  	state.main.curUrlPage = val;
	  }
	},
	actions:{
		
	},
	getters:{
	  main_gettit(state){
	    return state.main.tit;
	  },
	  main_getheaderflag(state){
	  	return state.main.zheaderFlag;
	  },
	  main_getcurUrlPage(state){
	  	return state.main.curUrlPage;
	  }
	},
  modules: {}
})