<template>
  <Home />
</template>

<script>
import Home from './components/Home.vue';
import 'virtual:fonts.css'

export default {
  components: {
    Home
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: "Code New Roman";
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
  background-attachment: fixed;
}
body::-webkit-scrollbar {
  display: none;
}
html {
  background-color: #0a0a0a;
  height: 100%
}
</style>
