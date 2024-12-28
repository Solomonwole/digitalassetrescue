/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				white: "#FFFFFFFF",
				black: "#080808",
				primary: {
					100: "#825EF6",
					150: "rgba(130,34,246,0.2)",
					200: "#3C32A3",
					300: "#42D3D8",
					310: "#3CBBC0FF",
					400: "#583E8A",
					500: "#152347",
					600: "#182852FF",
				},
			},
		},
	},
	plugins: [],
};
