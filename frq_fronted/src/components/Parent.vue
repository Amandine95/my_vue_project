<template>
	<div>
		<h5>parent</h5>
		<!-- 子组件标签绑定子组件props中的属性 -->
		<child v-bind:msg="parent_data"></child>
		<hr/>
		<child v-bind:msg="parent_data" v-on:ParentRecEv="showMsg"></child>
		<p>parent-data:{{data}}</p>
	</div>
</template>

<script>
	import Child from './Child.vue';  //引入
	export default{
		name:'parent',
		data(){
			return{
				"parent_data":"data from parent component",  //将传递的值赋给子组件props属性
				data:''
			}
		},
		methods:{
			showMsg(el){
				this.data = el;
			}
		},
		components:{  //注册
			Child
		}
	}
</script>

<style>
</style>
