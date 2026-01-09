<script lang='ts' setup>
import { computed, useSlots } from 'vue';

import type { WINDOW_CONFIG } from '@/lib/constants';

import WindowController from '@/components/windows/window-controller.vue';
import { useWindowStore } from '@/stores';

const $props = defineProps<{
	title: string;
	windowKey?: (keyof (typeof WINDOW_CONFIG));
}>();

const windowStore = useWindowStore();
const $slots = useSlots();
const window = computed(() => $props.windowKey && windowStore.windows[$props.windowKey]);

function onMaximize() {
	// console.log('Maximize Window');
}

const hideMenu = computed(() => {
	return !$slots.menu;
});
</script>

<template>
	<section
		v-if="window?.isOpen"
		class="window absolute sm:max-w-full sm:max-h-full max-sm:w-full max-sm:h-full"
		:style="{ zIndex: `${window.zIndex}` }"
	>
		<aside v-if="!hideMenu" class="window_menu">
			<WindowController
				class="p-4"
				@close="windowStore.closeWindow(windowKey)"
				@maximize="onMaximize"
			/>
			<slot name="menu" />
		</aside>
		<div class="window_body">
			<header class="window_header">
				<WindowController
					v-if="hideMenu"
					@close="windowStore.closeWindow(windowKey)"
					@maximize="onMaximize"
				/>
				<h3 class="window_title">
					{{ title }}
				</h3>
			</header>
			<div class="window_content">
				<slot />
			</div>
		</div>
	</section>
</template>

<style scoped>
.window {
	@apply max-w-2xl absolute sm:top-40 sm:left-1/6 bg-white shadow-2xl drop-shadow-2xl rounded-xl overflow-hidden flex;

	.window_body {
		@apply flex flex-col overflow-hidden;
	}

	.window_content {
		@apply overflow-y-auto overflow-x-hidden;
	}

	.window_menu {
		@apply flex flex-col gap-4 border-r-2 border-gray-200 shrink-0;
	}

	.window_header {
		@apply px-4 py-3 text-sm flex items-center rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-gray-400;
	}

	.window_title {
		@apply flex-1 text-center text-neutral-400 font-bold;
	}
}
</style>
