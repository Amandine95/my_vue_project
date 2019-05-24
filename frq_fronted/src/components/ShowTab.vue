<!-- modules和mapActions,mapState -->
<template>
  <div>
    <FooterBar v-if="isShow" />
  </div>
</template>


<script>
	import {mapActions,mapState} from 'vuex'
	export default{
		name:'showtab',
		data(){
			return {
				
			}
		},
		created:{
			...mapState({
				isShow:state =>state.footerstatus.status
			})
		},
		methods:{
			...mapActions([])
		}
	}
	
</script>
 