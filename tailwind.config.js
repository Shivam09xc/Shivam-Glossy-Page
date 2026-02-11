/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#020617", // Deeper, richer background
                secondary: "#0f172a",
                accent: "#38bdf8",
                glass: "rgba(255, 255, 255, 0.03)",
                'glass-heavy': "rgba(255, 255, 255, 0.08)",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
            },
        },
    },
    plugins: [],
}
