/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {},
            colors: {
                primary:"#00D1B2",
                secondary:"#FF416C",
                accent:"#FFB347",
            },
            keyframes: {
                spin: {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
                spinReverse: {
                    from: { transform: "rotate(360deg)" },
                    to: { transform: "rotate(0deg)" },
                },
            },
            animation: {
                "spin-slow": "spin 20s linear infinite",
                "spin-reverse-slower": "spinReverse 30s linear infinite",
            },
        },
    },
    plugins: [],
};
