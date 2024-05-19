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
			// => @media (min-width: 320px) { ... }
			xs: "375px",
			// => @media (min-width: 375px) { ... }
			xsl: "400px",
			// => @media (min-width: 400px) { ... }
			sm: "640px",
			// => @media (min-width: 640px) { ... }
			md: "768px",
			// => @media (min-width: 768px) { ... }
			lg: "1024px",
			// => @media (min-width: 1024px) { ... }
			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
			"iphone12": "360px",
		},
	},
	plugins: [],
};
