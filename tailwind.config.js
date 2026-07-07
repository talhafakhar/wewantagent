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
                primary:"#5EA8FF",
                secondary:"#3E7BFF",
                accent:"#8FCBFF",
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
                marqueeRight: {
                    from: { transform: "translateX(-50%)" },
                    to: { transform: "translateX(0%)" },
                },
                marqueeLeft: {
                    from: { transform: "translateX(0%)" },
                    to: { transform: "translateX(-50%)" },
                },
            },
            animation: {
                "spin-slow": "spin 20s linear infinite",
                "spin-reverse-slower": "spinReverse 30s linear infinite",
                "marquee-right": "marqueeRight 40s linear infinite",
                "marquee-left": "marqueeLeft 40s linear infinite",
            },
        },
    },
    plugins: [],
};
