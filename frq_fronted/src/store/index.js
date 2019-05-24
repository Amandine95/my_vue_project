import Vue from 'vue'
import Vuex from 'vuex'
import collections from './modules/collections'
import footerstatus from './modules/footerstatus'

Vue.use(Vuex)

const state={
	showfooter:true,
}

export default new Vuex.Store({
	state,
	modules:{
		collections,
		footerstatus
	}
});