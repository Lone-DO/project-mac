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
				const intensity = Math.exp(-(distance ** 2) / 10000);
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
			<TextUnpacker
				:base-weight="100"
				text="Hey, I'm Leon! Welcome to my"
				class-name="text-3xl font-georama"
			/>
		</p>
		<h1 ref="title" class="m-7">
			<TextUnpacker
				text="portfolio"
				class-name="text-9xl italic font-georama"
			/>
		</h1>
		<p class="small-screen">
			This Portfolio is designed for desktop/tablet screens only.
		</p>
	</section>
</template>
