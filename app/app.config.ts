export default defineAppConfig({
	ui: {
		colors: {
			primary: 'emerald',
			neutral: 'zinc',
		},

		carousel: {
			variants: {
				active: {
					true: {
						dot: 'bg-[var(--color-emerald-300)]',
					},
				},
			},
		},

		slideover: {
			slots: {
				overlay: '!pointer-events-none',
				title: 'text-emerald-400',
				close: 'text-emerald-400'
			},
		},
	},
});
