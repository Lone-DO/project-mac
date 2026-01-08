<script setup lang="ts">
import { computed } from 'vue';

import type { TooltipProps } from '@/lib/types';

import { AppTooltip } from '@/components';
import { DEFAULT_TOOLTIP_HIDE, DEFAULT_TOOLTIP_SHOW } from '@/lib/constants';
import { useTooltipRegistry } from '@/stores/tooltip-registry.ts';

const $tooltip = useTooltipRegistry();

const tooltipProps = computed<TooltipProps>(() => ({
	target: $tooltip?.target,
	hideBy: DEFAULT_TOOLTIP_HIDE,
	toggleBy: DEFAULT_TOOLTIP_SHOW,
	text: $tooltip?.options.text || '',
	placement: $tooltip?.options.placement,
	showArrow: $tooltip?.options.showArrow || false,
	class: $tooltip?.options.class || 'cat',
}));
</script>

<template>
	<AppTooltip v-bind="tooltipProps" class="z-99" />
</template>
