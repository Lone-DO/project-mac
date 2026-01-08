import type { Placement } from '@popperjs/core';
import type { Ref } from 'vue';

export type TooltipTarget = HTMLElement | null;

export type TooltipOptions = {
	text?: string;
	showArrow?: boolean;
	placement?: Placement;
	class?: string;
};

export type TooltipProps = TooltipOptions & {
	target: TooltipTarget;
	offset?: number[];
	toggleBy: (keyof HTMLElementEventMap)[];
	hideBy?: (keyof HTMLElementEventMap)[];
};

export type TooltipRegistry = {
	reset: () => void;
	target: Readonly<Ref<TooltipTarget>>;
	options: Readonly<Ref<TooltipOptions>>;
	update: (newTarget: TooltipTarget, newOpts?: TooltipOptions) => void;
};
