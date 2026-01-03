<script lang='ts' setup>
function unpackText(text: string, className: string, baseWeight: number = 400) {
	const res = [...text].map((char, index) => `
    <span key='${index}' class='${className}' style='font-variation-settings: "whgt" ${baseWeight}'>
      ${char === ' ' ? '\u00A0' : char}
    </span>`);
	return res.join('\n');
}

// const titleRef = ref(null);
// const subTitleRef = ref(null);
</script>

<template>
	<section id="welcome" class="w-full">
		<p
			v-html="unpackText('Hey, I\'m Leon! Welcome to my', 'text-3xl font-georama', 100)"
		/>
		<h1
			class="m-7"
			v-html="unpackText('portfolio', 'text-9xl italic font-georama')"
		/>
		<p class="small-screen">
			This Portfolio is designed for desktop/tablet screens only.
		</p>
	</section>
</template>
