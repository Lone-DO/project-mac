import type { Placement } from '@popperjs/core';
import type { Ref } from 'vue';

export type TooltipTarget = HTMLElement | null;

export type TooltipOptions = {
	text?: string;
	showArrow?: boolean;
	placement?: Placement;
};

export type TooltipProps = TooltipOptions & {
	target: TooltipTarget;
	toggleBy: (keyof HTMLElementEventMap)[];
	hideBy?: (keyof HTMLElementEventMap)[];
};

export type TooltipRegistry = {
	reset: () => void;
	target: Readonly<Ref<TooltipTarget>>;
	options: Readonly<Ref<TooltipOptions>>;
	update: (newTarget: TooltipTarget, newOpts?: TooltipOptions) => void;
};
