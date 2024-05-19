/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			mineshaft: "#232121",
			tundora: "#434040",
			dovegray: "#656464",
			silver: "#CDCBCB",
			pampas: "#F5F3F0",
			cararra: "#EDEBE8",
		},
		screens: {
			xxs: "320px",
			xs: "375px",
			xsl: "400px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"3xl": "1920px",
			"4xl": "2560px",
			"5xl": "3840px",
			iphone12: "360px",
			iphone12pro: "390px",
		},
	},
	plugins: [],
};
