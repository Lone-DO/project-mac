<script lang='ts' setup>
import gsap from 'gsap';
import { onMounted, useTemplateRef } from 'vue';

import TextUnpacker from '@/components/app/text-unpacker.vue';
import { FONT_WEIGHTS } from '@/constants';

const titleRef = useTemplateRef('title');
const subTitleRef = useTemplateRef('subtitle');

function setupTextHover(container: HTMLElement | null, type: 'title' | 'subtitle') {
	if (container) {
		const letters = [...container.children];
		const { min, max, default: baseWeight } = FONT_WEIGHTS[type];

		const animateLetter = (letter: Element, weight: number, duration = 0.25) => {
			return gsap.to(letter, {
				duration,
				ease: 'power2.out',
				fontWeight: weight,
			});
		};

		const handleMouseMove = (event: MouseEvent) => {
			const { left } = container.getBoundingClientRect();
			const mouseX = event.clientX - left;
			letters.forEach((letter) => {
				const { left: l, width: w } = letter.getBoundingClientRect();
				const distance = Math.abs(mouseX - (l - left + w / 2));
				const intensity = Math.exp(-(distance ** 2) / 20000);
				animateLetter(letter, min + (max - min) * intensity);
			});
		};
		const handleMouseLeave = () => {
			letters.forEach(letter => animateLetter(letter, baseWeight, 0.3));
		};
		container.addEventListener('mousemove', handleMouseMove);
		container.addEventListener('mouseleave', handleMouseLeave);
		return () => {
			container.removeEventListener('mousemove', handleMouseMove);
			container.removeEventListener('mouseleave', handleMouseLeave);
		};
	}
}

onMounted(() => {
	const titleCleanup = setupTextHover(titleRef.value, 'title');
	const subtitleCleanup = setupTextHover(subTitleRef.value, 'subtitle');

	return () => {
		titleCleanup?.();
		subtitleCleanup?.();
	};
});
</script>

<template>
	<section id="welcome" class="w-full">
		<p ref="subtitle">
			<TextUnpacker :base-weight="100" text="Hey, I'm Leon! Welcome to my" />
		</p>
		<h1 ref="title" class="text-6xl">
			<TextUnpacker text="portfolio" class-name="italic" />
		</h1>
		<p class="small-screen">
			This Portfolio is designed for desktop/tablet screens only.
		</p>
	</section>
</template>

<style>
#welcome {
	@apply text-gray-200 flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none max-sm:h-full max-sm:w-full max-sm:px-10;

	.small-screen {
		@apply sm:hidden m-7 bg-red-300/20 backdrop-blur-lg p-3 rounded-md absolute top-10 font-roboto gap-4;
	}

	p:not(.small-screen) {
		@apply text-[16px] text-center  text-gray-400;
	}
}
</style>
