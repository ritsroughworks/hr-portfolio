/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-primary': '#0f172a', // Slate 900
                'brand-secondary': '#334155', // Slate 700
                'brand-accent': '#2563eb', // Blue 600
                'brand-light': '#f8fafc', // Slate 50
                'brand-gray': '#64748b', // Slate 500
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
