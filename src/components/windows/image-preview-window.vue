<script lang='ts' setup>
import { computed } from 'vue';

import { WindowBase } from '@/components';
import { useWindowStore } from '@/stores/index.ts';

const windowStore = useWindowStore();
const data = computed(() => windowStore.windows.imgfile.data);
</script>

<template>
	<WindowBase
		id="preview-img-window"
		:title="`Preview ${data?.label}`"
		window-key="imgfile"
	>
		<div class="p-4">
			<img
				class="max-h-200"
				:src="data?.imgSrc"
				:alt="data?.label"
				loading="lazy"
			>
		</div>
	</WindowBase>
</template>
