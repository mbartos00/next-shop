import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			lato: ['Lato', 'sans-serif'],
			jost: ['Jost', 'sans-serif'],
		},
		colors: {
			primary: '#272727',
			accent: '#3A3A3A',
			hero: '#EDF1F3',
			secondary: '#72aec8',
			gray: '#848484',
		},
	},
	plugins: [],
};
export default config;
