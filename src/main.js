// import * as Sentry from "@sentry/browser";
// import * as Integrations from "@sentry/integrations";
import getEnv from './utils/env';
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// if (getEnv('USE_SENTRY') === 'true') {
//   Sentry.init({
//     app,
//     dsn: getEnv('SENTRY_DSN'),
//     integrations: [new Integrations.Vue({
//       attachProps: true,
//       logErrors: true,
//     })]
//   });
// }

app.mount('#app')
