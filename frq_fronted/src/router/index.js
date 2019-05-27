import Vue from 'vue'
import Router from 'vue-router'
import SheetResult from '@/components/SheetResult'
// import ShowTab from '@/components/ShowTab'
import Parent from '@/components/Parent'



Vue.use(Router)

export default new Router({
  routes: [

// 		{
// 			path:'/',
// 			name:'SheetResult',
// 			component:SheetResult
// 		},
		{
			path:'/',
			name:'Parent',
			component:Parent
		}
		
  ]
})
