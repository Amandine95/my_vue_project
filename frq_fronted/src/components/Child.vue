<template>
	<div>
		<h5>child</h5>
		<p>{{msg}}</p>
		<hr/>
		<h5>子——>父</h5>
		<p>
			<input type="button" value="send data to parent" v-on:click="send"/>
		</p>
	</div>
</template>

<script>
	export default{
		props:['msg'],  // props添加属性,接收父组件传递的值
		methods:{
			send(){
				this.$emit('ParentRecEv','data from child')  //第二个参数为传递数据
			}
		}
	}
</script>

<style>
</style>
