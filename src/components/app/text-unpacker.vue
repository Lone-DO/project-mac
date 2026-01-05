<script lang='ts' setup>
import { defineProps, withDefaults } from 'vue';

withDefaults(defineProps<{
	text: string;
	className?: string;
	baseWeight?: number;
}>(), {
	baseWeight: 400,
});
</script>

<template>
	<span
		v-for="(char, index) in text"
		:key="index"
		:class="className"
		:style="{ 'font-variation-settings': `whgt ${baseWeight}` }"
	>
		{{ char === ' ' ? '\u00A0' : char }}
	</span>
</template>
