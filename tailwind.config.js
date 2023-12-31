/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			primaryBlack: "#18181a",
			secondaryOrange: "#fe6238",
			thirdSpringGreen: "#00ffc0",
			fourthMakeup: "#f9d390",
			bodyBg: "#121213",
			navBg: "#262426",
			friendActivityBg: "#1a1b1e",
			textWhite: "#ffffff",
			bodyColor: "#b7b0b0",
			cardColor: "#1B1C20",
			mainContentColor: "rgb(22,22,25)",
		},

		fontSize: {
			xs: ".75rem", // Extra small
			sm: ".875rem", // Small
			base: "1rem", // Base
			lg: "1.125rem", // Large
			xl: "1.25rem", // Extra large
			"2xl": "1.5rem", // 2 times extra large
			"3xl": "1.875rem", // 3 times extra large
			"4xl": "2.25rem", // 4 times extra large
			"5xl": "3rem", // 5 times extra large
			"6xl": "4rem", // 6 times extra large.
		},
		screens: {
			...defaultTheme.screens,
			xs: "440px",
			customxl: "1536px",
		},
		// screens: {
		// 	sm: "640px",
		// 	// => @media (min-width: 640px) { ... }

		// 	md: "768px",
		// 	// => @media (min-width: 768px) { ... }

		// 	ml: "992px",
		// 	// => @media (min-width: 992px) { ... }

		// 	lg: "1024px",
		// 	// => @media (min-width: 1024px) { ... }

		// 	xl: "1280px",
		// 	// => @media (min-width: 1280px) { ... }

		// 	"2xl": "1536px",
		// 	// => @media (min-width: 1536px) { ... }
		// },
		extend: {},
	},
	plugins: [],
};
