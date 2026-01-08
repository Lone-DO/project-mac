<script setup lang="ts">
import { AppDock, AppHeader, AppRootTooltip, AppWelcome } from '@/components';
</script>

<template>
	<section class="flex flex-col h-screen">
		<AppHeader />
		<AppRootTooltip />
		<main class="flex-1 relative">
			<AppWelcome />
			<AppDock />
		</main>
	</section>
</template>

<style>
@layer base {
	html,
	body {
		width: 100dvw;
		overflow: hidden;
		height: 100dvh;
	}

	main {
		@apply w-dvw h-dvh overflow-hidden;
	}

	body {
		background-image: url('/images/wallpaper/default.webp');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
}
</style>
