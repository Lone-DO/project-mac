import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindAutoReference from 'vite-plugin-vue-tailwind-auto-reference';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return defineConfig({
		define: {
			'process.env': env,
		},
		plugins: [
			tailwindAutoReference('./src/assets/styles/index.css'),
			tailwindcss(),
			vue(),
			vueDevTools(),
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
			},
		},
		css: {
			devSourcemap: true,
		},
		optimizeDeps: {
			include: ['vue-pdf'],
		},
		build: {
			commonjsOptions: {
				esmExternals: true,
				transformMixedEsModules:
					true,
			},

			// lib: {
			// 	entry: resolve(__dirname, 'src/main.ts'),
			// 	name: 'MacOs',
			// 	fileName: 'project-macos',
			// },
			// rollupOptions: {
			// 	external: ['vue', 'pinia'],
			// 	output: {
			// 		globals: {
			// 			vue: 'Vue',
			// 			pinia: 'pinia',
			// 		},
			// 	},
			// },
		},
	});
});
