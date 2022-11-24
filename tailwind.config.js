/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
		enabled: false,
		mode: 'all',
		content: [
			'./templates/**/*.html',
			'./templates/**/*.php',
			'./templates/**/*.twig',
			'./templates/**/*.json',
			'./templates/**/*.js',
			'./src/js/**/*.js',
		],
	},
	darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [],
}