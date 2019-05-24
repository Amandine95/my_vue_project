// 初始化
const state={
	List:[]
};

const getters={
	renderList(state){
		return state.List;
	}
};

const mutations={
	pushList(state,item){
		state.List.push(item);
	}
};

const actions={
	topushList(context,item){
		context.commit('pushList',item);
	}
};

export default{
	namespaced:true,  // 全局引用这个文件方法时标明这个文件名
	state,
	getters,
	mutations,
	actions
}