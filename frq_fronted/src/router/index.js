import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SheetResult from '@/components/SheetResult'

Vue.use(Router)

export default new Router({
  routes: [

		{
			path:'/',
			name:'SheetResult',
			component:SheetResult
		}
  ]
})
