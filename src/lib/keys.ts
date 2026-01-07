import type { InjectionKey } from 'vue';

import type { TooltipRegistry } from '@/lib/types';

export const $tooltipKey = Symbol('Global Tooltip Registry') as InjectionKey<TooltipRegistry>;
