<template>
	<div id="d">
		<table>
			<thead>
				<tr>
				<th>科目</th>
				<th>start</th>
				<th>end</th>
				<th>total</th>
			</tr>
			</thead>	
			<tbody>
				<tr v-for="(item,key) in sites">
					<td>{{key}}</td>
					<td v-if="'start' in item">{{item.start}}</td>
					<td v-if="'end' in item">{{item.end}}</td>
					<td>{{item.total}}</td>
				</tr>
			</tbody>
			</table>
	</div>
</template>

<script>
	export default{
		name:'sheetresult',
		data(){
			return {
				sites:[],
			}
		},
		created(){
			this.$ajax({
				method:'get',
				url:'/api/rest/finstate/sheet?id=cd2cbf80-7b9b-11e9-ba18-1c1b0d294a0d'		
			}).then(response=>{
				this.sites = response.data.data;
				// this.res = this.$store.state.showfooter
			}).catch(function(error){
				alert(error);
			});
			// this.showfooter=this.$store.state.showfooter;  // 全局获取store的state中的值
		}
	}
</script>
<style scoped>
	* {
            padding: 0;
            margin: 0;
        }

        table {
            margin: 100px auto;
            border: 1px solid #000;
            border-collapse: collapse; /*设置表格的边框是否被合并为一个单一的边框*/
            border-spacing: 0; /*设置相邻单元格的边框间的距离*/
        }

        tr {
            width: 300px;
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #000;
        }

        td, th {
            width: 99px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-right: 1px solid #000;
        }
</style>


