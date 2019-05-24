const state={
	status:true,
	num:0
};

const getters={
	getStatus(state){
		return state.status;
	},
	getNum(state){
		return state.num;
	}
};

const mutations={
	show(state){
		state.status=true;
	},
	hide(state){
		state.status=false;
	},
	setnum(state,i){
		state.num += i;
	}
};

const actions={
	toshow(context){
		context.commit('show');
	},
	tohide(context){
		context.commit('hide');
	},
	tosetnum(context,i){
		context.commit('setnum',i);
	}
};

export default{
	namespaced:true,
	state,
	getters,
	mutations,
	actions
}