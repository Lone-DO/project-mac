<script setup lang="ts">
import { computed, inject, watch } from 'vue';

import type { TooltipProps, TooltipRegistry } from '@/lib/types';

import { AppTooltip } from '@/components';
import { $tooltipKey } from '@/lib/keys.ts';

const $tooltip = inject<TooltipRegistry>($tooltipKey);

watch(() => $tooltip, (newValue) => {
	console.log(newValue);
}, { immediate: true });

function setTarget(e: MouseEvent) {
	$tooltip?.update(e.target as HTMLElement, { text: 'Hello World' });
}

const tooltipProps = computed<TooltipProps>(() => ({
	text: $tooltip?.options.value.text || '',
	showArrow: $tooltip?.options.value.showArrow || false,
	placement: $tooltip?.options.value.placement,
	target: $tooltip?.target.value || null,
}));
</script>

<template>
	<AppTooltip v-bind="tooltipProps" />
</template>
