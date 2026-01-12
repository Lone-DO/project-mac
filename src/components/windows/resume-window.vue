<script setup lang="ts">
import { usePDF, VuePDF } from '@tato30/vue-pdf';
import { computed, ref } from 'vue';

import { WindowBase } from '@/components';

const { pdf, download } = usePDF('/files/resume.pdf');
const maxPage = ref(2);
const page = ref(1);
const isNextDisabled = computed(() => page.value >= maxPage.value);
const isPrevDisabled = computed(() => page.value <= 1);
const nextPage = () => (!isNextDisabled.value) && (page.value += 1);
const prevPage = () => (!isPrevDisabled.value) && (page.value -= 1);
</script>

<template>
	<WindowBase
		id="resume-window"
		class="sm:min-w-2xl"
		window-key="resume"
		title="Resume"
	>
		<template #controller>
			<div id="resume-window_controls">
				<button :disabled="isPrevDisabled" @click="prevPage">
					&lt; Prev
				</button>
				<button :disabled="isNextDisabled" @click="nextPage">
					Next &gt;
				</button>
				<button @click="() => download('losovoj-resume.pdf')">
					<img
						class="w-4"
						src="/images/icons/download.svg"
						alt="Download"
					>
				</button>
			</div>
		</template>
		<VuePDF
			:pdf
			:page
			fit-parent
		/>
	</WindowBase>
</template>

<style>
#resume-window_controls {
	@apply flex gap-2 items-center text-black text-xs;

	button {
		@apply rounded-lg bg-blue-900/10 px-2 py-1 flex items-center gap-1;

		&:not([disabled]) {
			@apply cursor-pointer hover:bg-blue-200! hover:text-blue-900;
		}
	}
}
</style>
