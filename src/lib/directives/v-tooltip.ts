import type { Directive } from 'vue';

// const showEvents = ['mouseover', 'focus'];
// const hideEvents = ['mouseleave', 'blur'];

export const vTooltip: Directive = {
	mounted(el: HTMLElement) {
		console.log('mounted', el);
		// const $tooltip = inject<TooltipRegistry>($tooltipKey);
		// el?.addEventListener('mouseover', (element) => {
		// 	$tooltip?.update(element.target as HTMLElement);
		// });
	},
	unmounted(el: HTMLElement) {
		console.log('unmounted', el);
	},
};
