<template>
  <div class="wave" />
  <div class="wave" />
  <div class="wave" />
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
body::-webkit-scrollbar {
  display: none;
}
html {
  background-color: #0a0a0a;
  height: 100%;
}

body {
  z-index: -5;
  position: fixed;
  height: 100vh;
  width: 100vw;
  font-family: "Code New Roman";
  text-align: center;
  color: #fff;

  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  overflow: auto;
  background: linear-gradient(315deg, #8ecccc 3%, #212121 38%, #3a4042 68%, #50717b 98%);
  animation: gradient 15s ease infinite;
  background-size: 400% 400%;
  background-attachment: fixed;
}

@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

.wave {
  background: #0c0846 25%;
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 15em;
  animation: wave 10s -3s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.3;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.wave:nth-of-type(2) {
  bottom: -1.25em;
  animation: wave 18s linear reverse infinite;
  opacity: 0.8;
}

.wave:nth-of-type(3) {
  bottom: -2.5em;
  animation: wave 20s -1s reverse infinite;
  opacity: 0.9;
}

@keyframes wave {
  2% {
    transform: translateX(1);
  }

  25% {
    transform: translateX(-25%);
  }

  50% {
    transform: translateX(-50%);
  }

  75% {
    transform: translateX(-25%);
  }

  100% {
    transform: translateX(1);
  }
}
</style>
