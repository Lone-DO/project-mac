<script setup lang="ts">
import { AppHeader, AppWelcome } from '@/components';
</script>

<template>
	<section>
		<AppHeader />
		<main>
			<AppWelcome />
		</main>
	</section>
</template>

<style>
body {
	background-image: url('/images/wallpaper/default.webp');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
</style>
