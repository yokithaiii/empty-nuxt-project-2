import Tailwind from '@tailwindcss/vite';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: false },
	app: {
		head: {
			meta: [
				{ 'http-equiv': 'cache-control', content: 'no-cache' },
        		{ 'http-equiv': 'expires', content: '0' }
			]
		}
	},
	modules: [
		'@nuxt/ui',
		'@nuxt/eslint',
	],
	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [Tailwind()],
	},
	ui: {
		theme: {
			colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error'],
		},
	},
})
