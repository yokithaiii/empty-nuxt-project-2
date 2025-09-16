import Tailwind from '@tailwindcss/vite';

export default defineNuxtConfig({
	spaLoadingTemplate: 'spa-loading-template.html',
	compatibilityDate: '2025-07-15',
	future: {
		compatibilityVersion: 4,
	},
	runtimeConfig: {
		public: {
			twaToken: process.env.TELEGRAM_BOT_TOKEN,
			apiUrl: process.env.BACKEND_API_URL,
		},
	},
	app: {
		rootTag: 'main',
		head: {
			title: 'Bodyline - marathons app',
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
