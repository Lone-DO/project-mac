<script setup lang="ts">
import type { Location, LocationChild } from '@/lib/types/index.ts';

import { useLocationStore } from '@/stores/location-store.ts';

defineProps<{
	label: string;
	items: Location[] | LocationChild[];
}>();

defineEmits<{
	(e: 'selectItem', value: Location | LocationChild): void;
}>();

const locationStore = useLocationStore();

function getStyles(id: string) {
	const active = locationStore.checkActive(id);
	return active ? 'text-blue-900 bg-blue-200' : 'hover:text-blue-900 hover:bg-blue-200';
}
</script>

<template>
	<div class="px-4 pb-2 text-sm">
		<label class="text-neutral-400 font-bold">{{ label }}</label>
		<menu>
			<li
				v-for="(item, index) in items"
				:key="item?.id + index"
				class="p-2 flex gap-1 cursor-pointer rounded-lg "
				:class="getStyles(item.id)"
				@click="$emit('selectItem', item)"
			>
				<img
					:src="item.icon"
					alt=" "
					class="w-4"
				>
				<span class="font-medium text-ellipsis max-w-[20ch] overflow-hidden text-nowrap">{{ item.label }}</span>
			</li>
		</menu>
	</div>
</template>
