<<<<<<< HEAD
<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {

            },
            colors: {

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
=======
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {

            },
            colors: {

            },
        },
    },
    plugins: [],
>>>>>>> 70a25946396756ff9f33423c65e1b48df9f82b63
=======
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {

            },
            colors: {

            },
        },
    },
    plugins: [],
>>>>>>> 70a25946396756ff9f33423c65e1b48df9f82b63
}