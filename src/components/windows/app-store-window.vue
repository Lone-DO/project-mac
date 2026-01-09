<script setup lang="ts">
import { computed, ref } from 'vue';

import WindowBase from '@/components/windows/window-base.vue';
import { DOCK_APPS, PROJECTS, STORE_CATEGORIES } from '@/lib/constants/index.ts';

const app = computed(() => DOCK_APPS.find(({ id }) => id === 'store'));
const selectedCategory = ref('Develop');
</script>

<template>
	<WindowBase
		id="app-store-window"
		:window-key="app?.id"
		:title="selectedCategory"
	>
		<template #menu>
			<div class="app-store-window_menu">
				<div class="app-store_search">
					<img
						src="/images/icons/search.svg"
						alt=""
						loading="lazy"
					>
					<span>Search</span>
				</div>
				<menu>
					<li
						v-for="opt in STORE_CATEGORIES"
						:key="opt.label"
						:data-selected="selectedCategory === opt.label || null"
					>
						<img
							:src="`/images/${opt.imgSrc}`"
							:alt="opt.imgSrc"
							loading="lazy"
						>
						<span>{{ opt.label }}</span>
						<span v-if="opt.subLabel" class="app-store_subLabel">{{ opt.subLabel }}</span>
					</li>
				</menu>
				<div class="app-store-window_menu-footer">
					<img src="/images/icons/user.svg" alt="">
					<p>
						<span class="font-bold text-gray-700">Shawn Losovoj</span>
						<span class="text-gray-400">04.51&#x20AC; Credit</span>
					</p>
				</div>
			</div>
		</template>
		<section class="py-4 px-8 h-full flex flex-col gap-8">
			<article v-for="opt in PROJECTS" :key="opt.label">
				<h3 class="font-bold select-none text-lg mb-2">
					{{ opt.label }} &gt;
				</h3>
				<menu class="flex flex-col gap-4">
					<li
						v-for="item in opt.items"
						:key="item.name"
						class="flex gap-2 items-start min-h-10 flex-wrap"
					>
						<div class="h-10 w-10 rounded-2xl overflow-hidden shrink-0">
							<img
								:src="`/images/${item.imgSrc}`"
								alt=" "
								class="mx-auto h-full"
							>
						</div>
						<p class="flex flex-col">
							<span class="font-bold text-nowrap text-ellipsis">{{ item.name }}</span>
							<span
								class="text-ellipsis max-w-60 text-nowrap overflow-hidden text-gray-600 text-sm"
								:title="item.description"
							>{{ item.description }}</span>
						</p>
						<button
							class="md:ml-auto max-md:mr-auto rounded-3xl bg-blue-200! text-blue-900! px-4 py-1 cursor-pointer text-sm"
						>
							View
						</button>
					</li>
				</menu>
			</article>
		</section>
	</WindowBase>
</template>

<style scoped>
.app-store_search {
	@apply mx-4 flex items-center justify-center gap-2 rounded-lg border-2 border-gray-400 text-gray-400;
}

.app-store_subLabel {
	@apply ml-auto rounded-2xl px-4 bg-black text-white;
}

.app-store-window_menu-footer {
	@apply flex items-center justify-center gap-2 p-4 text-sm mt-auto;

	& > p {
		@apply flex flex-col;
	}

	img {
		@apply w-8 h-8 rounded-full;
	}
}

.app-store-window_menu {
	@apply flex flex-col gap-4 select-none flex-1;

	menu {
		img {
			@apply w-5 h-5 fill-gray-400;
		}

		li {
			@apply flex gap-2 py-2 px-4 items-center;

			&[data-selected] {
				@apply bg-gray-300;
			}
		}
	}
}
</style>
