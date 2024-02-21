import { defineConfig } from 'vite';
import { resolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig(({ command }) => ({
	plugins: [command === 'build' ? svelte() : sveltekit()],

	// REF: https://stackoverflow.com/questions/75832641/how-to-compile-svelte-3-components-into-iifes-that-can-be-used-in-vanilla-js
	build: {
		lib: {
			entry: resolve(__dirname, 'src/lib/index.js'),
			name: 'Components',
			fileName: 'components',
		},
		outDir: 'build',
	},
}));
