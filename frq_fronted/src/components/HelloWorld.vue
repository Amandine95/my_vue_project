<template>
  <div class="hello">
    <div>
		 hello world!
		</div>     
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
	created() {
	  this.$ajax({
			method:'get',
			url : 'http://localhost:9999/rest/finstate/sheet?&id=cd2cbf80-7b9b-11e9-ba18-1c1b0d294a0d&_r=0.4630277420332338',
		}).then(response =>{
			var resp = response.data;
		})
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
