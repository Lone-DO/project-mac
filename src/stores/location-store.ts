import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { Location, LocationChild } from '@/lib/types';

import { FINDER_LOCATIONS } from '@/lib/constants';
import { deepCopy } from '@/lib/helpers/deep-copy.ts';
import { useWindowStore } from '@/stores/window-store.ts';

export const useLocationStore = defineStore('locationStore', () => {
	const selectedLocation = ref<Location | LocationChild | null>(deepCopy(FINDER_LOCATIONS.work));
	const windowStore = useWindowStore();

	function setLocation(location: Location | LocationChild) {
		if (location) {
			selectedLocation.value = location;
		}
	}

	function resetLocation() {
		selectedLocation.value = null;
	}

	const checkActive = (category: string | number) => selectedLocation.value?.id === category;

	function openItem(location: LocationChild | Location) {
		if (location?.kind === 'folder') {
			return setLocation(location);
		}
		if (location && 'fileType' in location) {
			if (['fig', 'url'].includes(location.fileType || '')) {
				return window.open(location.href, '_blank');
			}
			if (location.fileType === 'pdf') {
				return windowStore.openWindow('resume');
			}
			return windowStore.openWindow(`${location.fileType}${location.kind}`);
		}
		return null;
	}

	return {
		selectedLocation,
		checkActive,
		setLocation,
		resetLocation,
		openItem,
	};
});
