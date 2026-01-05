import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), vue(), vueDevTools()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
});
