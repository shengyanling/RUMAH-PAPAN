/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#F1592C',
                bg: '#EAE1D4',
                'gray-1000': '#242424',
                'secondary-1100': '#161617',
            },
            fontFamily: {
                'noto': ['"Noto Sans TC"', 'sans-serif'],
                'roboto': ['"Roboto Slab"', 'serif'],
            }
        },
    },
    plugins: [],
}
