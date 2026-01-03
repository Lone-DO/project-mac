import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
});
