import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"gold-plate-bg":
					"linear-gradient(to right,rgba(172, 131, 109, 1),rgba(240, 202, 178, 1))",
			},
			borderColor: {
				"custom-gray": "rgba(89, 88, 88, 0.48)",
				"form-gray": "rgba(109, 110, 118, 0.5)",
			},
			height: {
				"screen-minus-100": "calc(100svh - 96px)",
			},
			borderWidth: {
				"4": "4px",
			},

			borderImage: {
				gradient:
					"linear-gradient(to right, rgba(0, 0, 0, 1), rgba(172, 131, 109, 1), rgba(0, 0, 0, 1)) 1",
			},
			fontFamily: {
				custom: ["Raleway", "sans-serif"],
			},
		},
	},
	plugins: [],
};
export default config;
