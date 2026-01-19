<script lang='ts' setup>
import type { SocialLink } from '@/lib/types/index.ts';

import { WindowBase } from '@/components';
import { SOCIALS } from '@/lib/constants/index.ts';

function navigate(item: SocialLink) {
	if (item?.href) {
		return window.open(item.href, '_blank');
	}
	return null;
}
</script>

<template>
	<WindowBase
		window-key="contact"
		title="Contact Me"
	>
		<div class="p-4 flex flex-col gap-2 items-center">
			<div class="max-w-32 max-h-64 rounded-full overflow-hidden flex items-center justify-center">
				<img
					class="w-full"
					src="/images/me/profile.jpg"
					alt="me"
				>
			</div>
			<h3 class="text-lg font-bold">
				Let's Connect
			</h3>
			<p>Got an idea? Need a bug hunter, a Code Migration specialist? or just wanna nerd out?</p>
			<menu class="flex gap-4 w-full">
				<li
					v-for="item in SOCIALS"
					:key="item.label"
					v-tooltip="{ text: `Navigate to - ${item.href}`, placement: 'bottom' }"
					:class="item.class"
					class="flex-1 h-30 flex flex-col justify-between p-4 rounded-lg cursor-pointer"
					@click="navigate(item)"
				>
					<img
						class="w-10 fill-black"
						:src="item.imgSrc"
						alt=" c"
					>
					<span>{{ item.label }}</span>
				</li>
			</menu>
		</div>
	</WindowBase>
</template>
