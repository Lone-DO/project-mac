<script lang='ts' setup>
import type { Instance, Placement } from '@popperjs/core';

import { createPopper } from '@popperjs/core';
import { onUnmounted, ref, useTemplateRef, watch } from 'vue';

const $props = withDefaults(defineProps<{
	text: string;
	showArrow?: boolean;
	placement?: Placement;
	target: HTMLElement | null;
}>(), { showArrow: true, placement: 'top' });

const initialized = ref(false);
const showTooltip = ref(false);
const tooltip = useTemplateRef('tooltip');
const popperInstance = ref<Instance | null>(null);

const showEvents = ['mouseover', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

const show = () => (showTooltip.value = true);
const hide = () => (showTooltip.value = false);

function init(target = $props.target) {
	if (!target || !tooltip.value || initialized.value) {
		return;
	}
	const options = { placement: $props.placement };

	showEvents.forEach((event) => {
		target?.addEventListener(event, show);
	});

	hideEvents.forEach((event) => {
		target?.addEventListener(event, hide);
	});

	popperInstance.value = createPopper(target, tooltip.value, options);
	initialized.value = true;
}

/**
 * on Target Valid, Initialize PopperJs
 * TODO: Update Tooltip Target onChange, for future v-tooltip directive
 * Required destroying previous instance and building fresh based on updated target
 * I.E popperInstance.destroy() && init()
 * https://share.google/aimode/W4N8sKEAcSf8XgGs3
 */
watch(() => $props.target, init);
watch(showTooltip, (bool) => {
	/** https://popper.js.org/docs/v2/tutorial/#performance */
	if (bool) {
		/** Update its position */
		popperInstance.value?.update();
	}
	/** Toggle the event listeners based on tooltip visibility */
	popperInstance.value?.setOptions(options => ({
		...options,
		modifiers: [
			...(options?.modifiers || []),
			{ name: 'eventListeners', enabled: bool },
		],
	}));
});

onUnmounted(() => {
	showEvents.forEach((event) => {
		$props.target?.removeEventListener(event, show);
	});

	hideEvents.forEach((event) => {
		$props.target?.removeEventListener(event, hide);
	});
});
</script>

<template>
	<div
		ref="tooltip"
		class="tooltip"
		role="tooltip"
		aria-describedby="tooltip"
		:data-show="showTooltip || null"
	>
		<div class="tooltip-body">
			<slot>
				<span v-if="text">{{ text }}</span>
			</slot>
		</div>
		<div
			v-if="showArrow"
			class="tooltip-arrow"
			data-popper-arrow
		/>
	</div>
</template>

<style scoped>
.tooltip {
	position: relative;
	display: none;
	background-color: #333;
	color: white;
	padding: 5px 10px;
	border-radius: 4px;
	font-size: 13px;
}

.tooltip[data-show] {
	display: block;
}

.tooltip[data-popper-placement^='top'] > .tooltip-arrow {
	bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {
	top: -4px;
}

.tooltip[data-popper-placement^='left'] > .tooltip-arrow {
	right: -4px;
}

.tooltip[data-popper-placement^='right'] > .tooltip-arrow {
	left: -4px;
}

.tooltip-arrow,
.tooltip-arrow::before {
	position: absolute;
	width: 8px;
	height: 8px;
	background: inherit;
}

.tooltip-arrow {
	visibility: hidden;
}

.tooltip-arrow::before {
	visibility: visible;
	content: '';
	transform: rotate(45deg);
}
</style>
