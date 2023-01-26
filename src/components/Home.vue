<template>
  <div class="video" :data-vbg="videoBackground()" data-vbg-poster="" data-vbg-inline-styles="true" data-vbg-mobile="true"></div>
  <div class="container">
    <ul>
      <li v-for="(site, index) in sites">
        <a target="_blank" :title="site.key" :href="site.url">
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
      sites: {}
    }
  },
  created() {
    const socket = io(`ws://${getEnv('API_GATEWAY_HOST')}:${getEnv('API_GATEWAY_PORT')}`)
    socket.on("connect", () => {
    });
    socket.on('sites', (data) => {
      const sites = []
      for (const [key, value] of Object.entries(data.sites)) {
        sites.push({key: key, ...value})
      }
      this.sites = sites.sort((a, b) => { return a.key === b.key ? 0 : a.key > b.key ? 1 : -1 })
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
.video {
  height: 100%;
  width: 100%;
  z-index: -1 !important;
  position: fixed !important;
  overflow: hidden;
  inset: 0px;
  pointer-events: none;
  background-image: #000 !important;
  background-attachment: fixed !important;
}
.container ul li {
  display: inline-block;
}
.container ul li a {
  color: inherit;
  text-decoration: none;
  display: inline-block;
  padding: 12px;
  border-radius: 6px;
  text-shadow: 1px 1px 2px black;
}
.container ul li a:hover {
  background-color: rgba(255, 255, 255, 0.0823529412);
  transition: background-color 0.1s;
  text-shadow: 1px 1px 2px white;
}
.container ul li a span.mdi {
  font-size: 30px;
}
.container ul .icon {
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
.container ul .icon img {
  width: 100%;
  background: #fff;
}
.container ul .name {
  display: block;
  max-height: 3.3em;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6274509804);
  white-space: nowrap;
}
</style>
