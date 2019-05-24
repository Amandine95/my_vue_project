import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'  // 引入vuex

Vue.use(Vuex)

// export default store = new Vuex.Store({
// 	state:{},
// 	mutations:{},
// 	actions:{}
// })
const state={  // 自定义全局访问的变量,初始值
	showfooter:true,
	number:0
}

const getters={  // 实时监听state的变化
	isShow(state){  // 自定义方法名,承载变化的showfooter的值
		return state.showfooter
	},
	getchangenum(){
		return state.number
	}
}

const mutations={  // 放改变state初始值的方法,方法传入参数state(可附加其他参数),通过vue双向数据驱动改变值,其中的方法都为同步事务
	show(state){
		state.showfooter = true;
	},
	hide(state){
		state.showfooter = false;
	},
	newnum(state,num){
		state.number += num;
	}
	
}

const action={  // 自定义方法,异步触发mutations的方法，其中方法为异步事务,传入context参数和要变化的形参,context和store实例具有相同的方法和属性,context.commit('')
	getshow(context){
		context.commit('show');
	},
	gethide(context){
		context.commit('hide');
	},
	getnewnum(context,num){
		context.commit('newnum',num);
	}
}
const store = new Vuex.Store({
	state,  // 全局可使用 this.$store.state.showfooter等
	getters,
	mutations, // 其他组件可用 this.$store.commit('show')等修改state值
	actions  // 其他组件全局调用 this.$store.dispatch('getshow')
});  // 实例化
export default store;

