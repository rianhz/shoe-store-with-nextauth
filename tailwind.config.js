/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				"3xl": "0px 3px 15px 2px rgba(0, 0, 0, 0.75)",
			},
			borderRadius: {
				none: "0",
				sm: "5px",
				md: "10px",
				lg: "20px",
			},
			colors: {
				"gradient-top": "rgb(233, 233, 242)",
				"gradient-mid": "rgba(226, 200, 49, 0.8241421568627451)",
				"gradient-bottom": "rgb(206, 202, 230)",
				"gray-thin": "rgba(197, 192, 192, 0.4)",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
	variants: {
		extend: {
			translate: ["group-hover", "hover"],
		},
	},
};
