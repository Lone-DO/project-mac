<script lang='ts' setup>
import TextUnpacker from '@/components/app/text-unpacker.vue';

// const titleRef = ref(null);
// const subTitleRef = ref(null);
</script>

<template>
	<section id="welcome" class="w-full">
		<p>
			<TextUnpacker
				:base-weight="100"
				text="Hey, I'm Leon! Welcome to my"
				class-name="text-3xl font-georama"
			/>
		</p>
		<h1 class="m-7">
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
