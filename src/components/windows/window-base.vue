<script lang='ts' setup>
import { computed } from 'vue';

import type { WINDOW_CONFIG } from '@/lib/constants';

import { useWindowStore } from '@/stores';

const $props = defineProps<{
	title: string;
	windowKey?: (keyof (typeof WINDOW_CONFIG));
}>();

const windowStore = useWindowStore();

const window = computed(() => $props.windowKey && windowStore.windows[$props.windowKey]);
</script>

<template>
	<section
		v-if="window"
		class="app-window absolute"
		:style="{ zIndex: `${window.zIndex}` }"
	>
		<header class="app-window_header">
			<div class="app-window_controls">
				<span class="app-window_close" />
				<span class="app-window_minimize" />
				<span class="app-window_maximize" />
			</div>
			<h3 class="app-window_title">
				{{ title }}
			</h3>
		</header>
		<div class="p-4">
			<slot />
		</div>
	</section>
</template>

<style scoped>
.app-window {
	@apply max-w-2xl absolute sm:top-40 sm:left-1/6 bg-white shadow-2xl drop-shadow-2xl rounded-xl overflow-hidden;

	.app-window_controls {
		@apply flex gap-2;
	}

	.app-window_close {
		@apply size-3.5 rounded-full bg-[#ff6157] cursor-pointer;
	}

	.app-window_minimize {
		@apply size-3.5 rounded-full bg-[#ffc030];
	}

	.app-window_maximize {
		@apply size-3.5 rounded-full bg-[#2acb42];
	}

	.app-window_header {
		@apply flex items-center px-4 py-3 rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-sm text-gray-400;
	}

	.app-window_title {
		@apply flex-1 text-center text-neutral-400 font-bold;
	}
}
</style>
