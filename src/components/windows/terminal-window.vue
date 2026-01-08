<script setup lang="ts">
import { computed } from 'vue';

import MajesticonsCheckLine from '@/components/icones/majesticons-check-line.vue';
import MajesticonsFlag from '@/components/icones/majesticons-flag.vue';
import WindowBase from '@/components/windows/window-base.vue';
import { DOCK_APPS, TECH_STACK } from '@/lib/constants';

const app = computed(() => DOCK_APPS.find(({ id }) => id === 'terminal'));
</script>

<template>
	<WindowBase
		id="terminal"
		title="Tech Stack"
		:window-key="app?.id"
	>
		<div class="terminal-body">
			<p>
				<span class="font-bold">@losovoj % </span>
				<span>show tech stack</span>
			</p>
			<div class="terminal_label">
				<span class="w-32">Category</span>
				<span>Technologies</span>
			</div>
			<ul class="terminal_content">
				<li v-for="set in TECH_STACK" :key="set.category">
					<MajesticonsCheckLine class="terminal_check" />
					<h3>{{ set.category }}</h3>
					<ul>
						<li v-for="(item, index) in set.items" :key="item">
							<span>{{ item }}</span>
							<span v-if="index < (set.items.length - 1)">,</span>
						</li>
					</ul>
				</li>
			</ul>
			<div class="terminal_footnote">
				<p>
					<MajesticonsCheckLine class="terminal_check" />
					<span>5 of 5 loaded Successfully (100%)</span>
				</p>
				<p class="text-black">
					<MajesticonsFlag />
					<span>Render time: 9ms</span>
				</p>
			</div>
		</div>
	</WindowBase>
</template>

<style scoped>
#terminal {
	.terminal-body {
		@apply text-sm font-roboto flex flex-col gap-5;
	}

	.terminal_label {
		@apply flex items-center pl-10;
	}

	.terminal_check {
		@apply fill-[#00A154] w-5;
	}

	.terminal_content {
		@apply py-5 border-y border-dashed flex flex-col gap-1;

		li {
			@apply flex items-center;

			h3 {
				@apply font-semibold text-[#00A154] w-32 ms-5;
			}

			ul {
				@apply flex items-center gap-3;
			}
		}
	}

	.terminal_footnote {
		@apply text-[#00A154] flex flex-col gap-1;

		p {
			@apply flex items-center;

			svg {
				@apply w-5;
			}

			span {
				@apply pl-5;
			}
		}
	}
}
</style>
