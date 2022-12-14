/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			tablet: "640px",
			// => @media (min-width: 640px) { ... }

			laptop: "1024px",
			// => @media (min-width: 1024px) { ... }

			desktop: "1280px",
			// => @media (min-width: 1280px) { ... }
		},

		// colors: {
		// 	white: "#ffff",
		// 	blue: "#1fb6ff",
		// 	purple: "#7e5bef",
		// 	pink: "#ff49db",
		// 	orange: "#ff7849",
		// 	green: "#13ce66",
		// 	yellow: "#ffc82c",
		// 	"gray-dark": "#273444",
		// 	gray: "#8492a6",
		// 	"gray-light": "#d3dce6",
		// },

		extend: {},
	},
	plugins: [],
};
