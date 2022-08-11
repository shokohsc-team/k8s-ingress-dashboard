# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

    docker run -ti --rm \
      -v `pwd`:/workspace \
      -v `pwd`/config.json:/kaniko/.docker/config.json:ro \
      gcr.io/kaniko-project/executor:latest \
      --destination=shokohsc/k8s-ingress-dashboard:TO_CHANGE \
      --dockerfile Dockerfile \
      --context dir:///workspace/ \
      --cache \
      --cache-repo shokohsc/k8s-ingress-dashboard
