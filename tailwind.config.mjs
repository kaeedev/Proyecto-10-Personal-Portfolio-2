/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				barra: "hsla(44, 12%, 76%, 1)",
				principal: "hsla(0, 0%, 19%, 1)",
				principalhover: "hsla(0, 0%, 40%, 1)",
				secundario: "hsla(0, 0%, 56%, 1)"
			},
			fontFamily: {
				quattrocento: ["Quattrocento", "serif"],
				oswald: ["Oswald", "sans-serif"],
			},
			animation: {
				'zoom-in': 'zoom-in 2s ease-out',
				"fade-in-up": "fade-in-up 1s ease-in-out",
				"tada": "tada 1s ease-in-out 4"
			},
			keyframes: {
				'zoom-in': {
				  '0%': {
					opacity: '0',
					transform: 'scale(.5)',
				  },
				  '100%': {
					opacity: '1',
					transform: 'scale(1)',
				  },
				},
				"fade-in-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(20px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"tada": {
					"0%": {
						transform: "scale(1)"
					},
					"10%": {
						transform: "scale(0.8) rotate(-5deg)"  // Se hace más pequeño y gira más
					},
					"20%": {
						transform: "scale(0.8) rotate(-5deg)"
					},
					"30%": {
						transform: "scale(1.3) rotate(5deg)"  // Se hace más grande
					},
					"40%": {
						transform: "scale(1.3) rotate(-5deg)"
					},
					"50%": {
						transform: "scale(1.3) rotate(5deg)"
					},
					"60%": {
						transform: "scale(1.3) rotate(-5deg)"
					},
					"70%": {
						transform: "scale(1.3) rotate(5deg)"
					},
					"80%": {
						transform: "scale(1.3) rotate(-5deg)"
					},
					"90%": {
						transform: "scale(1.3) rotate(5deg)"
					},
					"100%": {
						transform: "scale(1) rotate(0)"
					}
				}

			  },
		},
	},
	plugins: [],
}
