import type { Placement } from '@popperjs/core';

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
