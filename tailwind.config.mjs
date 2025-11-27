import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/preline/preline.js'
	],
	// manually select dark mode
	darkMode: "selector",
	theme: {
		extend: {
			fontFamily: {
				// Display font: Inter Tight for headlines - tighter, more designed feel
				display: ['Inter Tight', 'Inter', ...defaultTheme.fontFamily.sans],
				// Primary font: Inter - clean, professional, highly legible
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				// Mono font: JetBrains Mono for technical content
				mono: ['JetBrains Mono', 'SF Mono', ...defaultTheme.fontFamily.mono],
			},
			fontSize: {
				// Fluid typography scale using clamp()
				'hero': ['clamp(2.75rem, 5vw + 1rem, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
				'display': ['clamp(2rem, 3.5vw + 0.75rem, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
				'title': ['clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
				'subtitle': ['clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem)', { lineHeight: '1.35', letterSpacing: '-0.015em' }],
			},
			colors: {
				// Standardized orange - single source of truth
				// Using orange-600 (#ea580c) as the primary brand color
				brand: {
					50: '#fff7ed',
					100: '#ffedd5',
					200: '#fed7aa',
					300: '#fdba74',
					400: '#fb923c',
					500: '#f97316',
					600: '#ea580c',  // PRIMARY - use this for most brand applications
					700: '#c2410c',
					800: '#9a3412',
					900: '#7c2d12',
				},
				// Refined neutral scale - softer, more sophisticated
				neutral: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
					950: '#0a0a0a',
				},
			},
			spacing: {
				// Extended spacing for generous whitespace
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
			},
			boxShadow: {
				// Premium card shadows
				'card': '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
				'card-hover': '0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.04)',
				'brand-glow': '0 4px 12px rgb(234 88 12 / 0.3)',
			},
			transitionTimingFunction: {
				'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
			transitionDuration: {
				'DEFAULT': '300ms',
			},
		},
	},
	plugins: [
		require("preline/plugin"),
		require('@tailwindcss/typography'),
	],
}
