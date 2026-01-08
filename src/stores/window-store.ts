import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { WindowData } from '@/lib/types';

import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '@/lib/constants';
import { deepCopy } from '@/lib/helpers/deep-copy.ts';

export const useWindowStore = defineStore('windowStore', () => {
	const windows = ref<typeof WINDOW_CONFIG>(deepCopy(WINDOW_CONFIG));
	const nextZIndex = ref(INITIAL_Z_INDEX + 1);

	function openWindow(windowKey: string, data?: WindowData) {
		const window = windows.value[windowKey as keyof (typeof WINDOW_CONFIG)];
		if (window) {
			if (window.isOpen) {
				/**
				 * TODO: Check if window is current focus
				 * WHEN current focus, THEN close window
				 * ELSE toggle as focused and update zIndex
				 */
				return closeWindow(windowKey);
			}
			window.isOpen = true;
			window.zIndex = nextZIndex.value;
			window.data = deepCopy(data) || window.data;
			nextZIndex.value++;
		}
	}

	function closeWindow(windowKey: string) {
		const window = windows.value[windowKey as keyof (typeof WINDOW_CONFIG)];
		if (window) {
			window.isOpen = false;
			window.zIndex = INITIAL_Z_INDEX;
			window.data = null;
		}
	}

	function focusWindow(windowKey: string) {
		const window = windows.value[windowKey as keyof (typeof WINDOW_CONFIG)];
		if (window) {
			window.isOpen = true;
			window.zIndex = nextZIndex.value + 1;
		}
	}

	return {
		windows,
		openWindow,
		closeWindow,
		focusWindow,
	};
});
