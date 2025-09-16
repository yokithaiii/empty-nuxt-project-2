import Tailwind from '@tailwindcss/vite';

export default defineNuxtConfig({
	ssr: false,
	hooks: {
		'prerender:routes'({ routes }) {
			routes.clear(); // Не создает никаких маршрутов (кроме значений по умолчанию)
		},
	},
	compatibilityDate: '2025-07-15',
	devtools: { enabled: false },
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
