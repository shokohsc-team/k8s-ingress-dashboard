<template>
  <div class="video" :data-vbg="videoBackground()" data-vbg-poster="" data-vbg-inline-styles="true" data-vbg-mobile="true"></div>
  <div class="content">
    <ul class="sites">
    <li v-for="(site, index) in sites" :key="index">
      <a target="_blank" :title="site.name" :href="site.url">
        <span :class="iconClass(site)"></span>
        <span class="name">{{ site.name }}</span>
      </a>
    </li>
    </ul>
  </div>
</template>

<script>
import 'youtube-background';
import getEnv from '../utils/env';
import io from 'socket.io-client';

export default {
  data() {
    return {
      sites: []
    }
  },
  created() {
    const socket = io(`ws://${getEnv('API_GATEWAY_HOST')}:${getEnv('API_GATEWAY_PORT')}`)
    socket.on("connect", () => {
    });
    socket.on('sites', (data) => {
      this.sites = data.sites
    });
  },
  mounted() {
    new VideoBackgrounds('[data-vbg]')
  },
  methods: {
    iconClass: function(site) {
      return `mdi mdi-${site.icon}`
    },
    videoBackground: function() {
      return `https://www.youtube.com/watch?v=${getEnv('YOUTUBE_VIDEO_ID')}`
    }
  }
}
</script>

<style>
.sites {
  padding: 0;
  margin: 0;
  list-style-type: none;
  font-size: 14px;
  user-select: none;
}
.sites li {
  padding: 0;
  margin: 0;
  list-style-type: none;
  font-size: 14px;
  user-select: none;
  display: inline-block;
}
.sites li a {
  color: inherit;
  text-decoration: none;
  display: inline-block;
  padding: 12px;
  border-radius: 6px;
  text-shadow: 1px 1px 2px black;
}
.sites li a:hover {
  background-color: rgba(255, 255, 255, 0.0823529412);
  transition: background-color 0.1s;
  text-shadow: 1px 1px 2px white;
}
.sites li a span.mdi {
  font-size: 30px;
}
.sites .icon {
  display: block;
  background-color: #fff;
  width: 80px;
  height: 80px;
  border-radius: 6px;
  border: 0.2em solid #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  padding: 15px;
  margin-bottom: 8px;
  background-image: url(../images/loading.svg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 20px;
}
.sites .icon img {
  width: 100%;
  background: #fff;
}
.sites .name {
  display: block;
  max-height: 3.3em;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6274509804);
  white-space: nowrap;
}

.fixed {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.hidden {
  opacity: 0;
}

.enable {
  display: block !important;
}

.background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  transform: scale(1.07);
  z-index: -2;
}

.content {
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  position: relative;
}

.video {
  height: 100%;
  width: 100%;
  z-index: -1;
  position: fixed !important;
  overflow: hidden;
  inset: 0px;
  pointer-events: none;
  background-image: #000 !important;
}
</style>
