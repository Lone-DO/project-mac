import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindAutoReference from 'vite-plugin-vue-tailwind-auto-reference';

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindAutoReference('./src/assets/styles/index.css'), tailwindcss(), vue(), vueDevTools()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: {
				additionalData: `
          @reference '@/assets/styles/index.css';
        `,
				api: 'modern-compiler', // or "modern"
			},
		},
	},
});
