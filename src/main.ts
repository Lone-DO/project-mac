import { createPinia } from 'pinia';

import './assets/styles/index.css';
import { createApp } from 'vue';

import { vDraggable } from '@/lib/directives/v-draggable.ts';
import { vTooltip } from '@/lib/directives/v-tooltip.ts';

import App from './app.vue';

const app = createApp(App);

app.use(createPinia());
app.directive('tooltip', vTooltip);
app.directive('draggable', vDraggable);
app.mount('#app');
