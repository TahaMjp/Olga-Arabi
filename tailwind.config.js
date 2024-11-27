/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html", "./scripts/**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                Roboto: ["'Roboto'", 'sans-serif', 'Arial'],
                SignPainter: ["'SignPainter'", 'sans-serif', 'Arial']
            }
        },
    },
    plugins: [],
}