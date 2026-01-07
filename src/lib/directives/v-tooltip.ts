import type { Directive } from 'vue';

import type { TooltipOptions } from '@/lib/types';

import { useTooltipRegistry } from '@/stores/tooltip-registry.ts';

let listener: null | (() => any) = null;

export const vTooltip: Directive = {
	mounted(el: HTMLElement, binding) {
		const $tooltip = useTooltipRegistry();
		listener = () => {
			let opts: TooltipOptions = { text: '' };
			if (typeof binding.value === 'string') {
				opts.text = binding.value;
			}
			else if (binding.value && typeof binding.value === 'object') {
				opts = binding.value as TooltipOptions;
			}
			$tooltip?.update(el, opts);
		};
		el?.addEventListener('mouseover', listener);
	},
	unmounted(el: HTMLElement) {
		if (listener) {
			el?.removeEventListener('mouseover', listener);
		}
	},
};
