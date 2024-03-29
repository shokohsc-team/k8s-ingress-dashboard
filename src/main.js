import "../node_modules/bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";
import getEnv from './utils/env';
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

if (getEnv('USE_SENTRY') === 'true') {
  Sentry.init({
    app,
    dsn: getEnv('SENTRY_DSN'),
    integrations: [
      new BrowserTracing({
        tracePropagationTargets: [window.location.host, /^\//],
      }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    sampleRate: 1.0,
    attachStacktrace: true,
    maxBreadcrumbs: 50,
    autoSessionTracking: true,
  });
}

app.mount('#app')
