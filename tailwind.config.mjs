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
				// default font oxanium
				sans: ['Oxanium Variable', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		require("preline/plugin")
	],
}
