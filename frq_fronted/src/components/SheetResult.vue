<template>
	<div>
		<h4>the result:</h4>
		{{res.data}}
		<h4>vuex state</h4>
		{{showfooter}}
	</div>
</template>

<script>
	export default{
		name:'sheetresult',
		data(){
			return {
				res:''
			}
		},
		created(){
			this.$ajax({
				method:'get',
				url:'/api/rest/finstate/sheet?id=cd2cbf80-7b9b-11e9-ba18-1c1b0d294a0d'		
			}).then(response=>{
				this.res = response.data;
				// this.res = this.$store.state.showfooter
			}).catch(function(error){
				alert(error);
			});
			this.showfooter=this.$store.state.showfooter;  // 全局获取store的state中的值
		}
	}
</script>

<style scoped>
	div {
	  font-weight: normal;
	}
</style>
