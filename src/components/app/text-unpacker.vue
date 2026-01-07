<script lang='ts' setup>
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
		:class="`${className} font-georama`"
		:style="{ fontWeight: baseWeight }"
	>
		{{ char === ' ' ? '\u00A0' : char }}
	</span>
</template>
