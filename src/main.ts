import { createPinia } from 'pinia';

import './assets/styles/index.css';
import { createApp } from 'vue';

import { vTooltip } from '@/lib/directives/v-tooltip.ts';

import App from './app.vue';

const app = createApp(App);

app.use(createPinia());
app.directive('tooltip', vTooltip);
app.mount('#app');
