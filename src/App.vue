<template>
  <router-view></router-view>
</template>
<script>
export default {
  created() {
    sessionStorage.removeItem('color')
  }
}
</script>

<style>
body{
  margin: 0;
}
html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f9f9f9;
}
.aki-page-main{
  padding: 1rem;
}
.demo{
  padding: 2rem;
  border: solid 1px #eee;
}
</style>
