import type { App } from 'vue';

import { readonly, ref } from 'vue';

import type { TooltipOptions, TooltipTarget } from '@/lib/types';

import { $tooltipKey } from '@/lib/keys.ts';

export default {
	install: (app: App) => {
		if (app) {
			const initialState: TooltipOptions = {
				text: '',
				showArrow: true,
				placement: 'top',
			};
			const target = ref<TooltipTarget>(null);
			const options = ref<TooltipOptions>({ ...initialState });

			function update(newTarget: TooltipTarget, newOpts?: TooltipOptions) {
				if (newTarget) {
					target.value = newTarget;
					options.value = { ...options.value, ...newOpts };
				}
			}

			function reset() {
				target.value = null;
				options.value = { ...initialState };
			}

			app.provide($tooltipKey, {
				/** @ts-expect-error expected */
				target: readonly(target),
				options: readonly(options),
				update,
				reset,
			});
		}
	},
};
