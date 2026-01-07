import { createApp } from 'vue';

import './assets/styles/index.css';
import { vTooltip } from '@/lib/directives/v-tooltip.ts';
import tooltipRegistry from '@/lib/plugins/tooltip-registry.ts';

import App from './app.vue';

const app = createApp(App);
app.use(tooltipRegistry);
app.directive('tooltip', vTooltip);
app.mount('#app');
