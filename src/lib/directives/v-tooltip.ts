import type { Directive } from 'vue';

import type { TooltipOptions } from '@/lib/types';

import { useTooltipStore } from '@/stores';

let listener: null | (() => any) = null;

export const vTooltip: Directive = {
	mounted(el: HTMLElement, binding) {
		const $tooltip = useTooltipStore();
		let opts: TooltipOptions = { text: '' };
		if (typeof binding.value === 'string') {
			opts.text = binding.value;
		}
		else if (binding.value && typeof binding.value === 'object') {
			opts = binding.value as TooltipOptions;
		}
		listener = () => {
			$tooltip?.update(el, opts);
		};
		el?.addEventListener('mouseover', listener);
		el?.setAttribute('aria-title', opts.text || '');
	},
	unmounted(el: HTMLElement) {
		if (listener) {
			el?.removeEventListener('mouseover', listener);
		}
	},
};
