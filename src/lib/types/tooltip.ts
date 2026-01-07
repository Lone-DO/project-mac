import type { Placement } from '@popperjs/core';
import type { Ref } from 'vue';

export type TooltipTarget = HTMLElement | null;

export type TooltipOptions = {
	text?: string;
	showArrow?: boolean;
	isVisible?: boolean;
	placement?: Placement;
};

export type TooltipProps = TooltipOptions & {
	target: TooltipTarget;
};

export type TooltipRegistry = {
	reset: () => void;
	target: Readonly<Ref<TooltipTarget>>;
	options: Readonly<Ref<TooltipOptions>>;
	update: (newTarget: TooltipTarget, newOpts?: TooltipOptions) => void;
};
