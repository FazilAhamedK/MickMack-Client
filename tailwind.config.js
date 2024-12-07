/** @type {import('tailwindcss').Config} */
module.exports =
{
  content:
  [
    "./src/**/*.{html,scss,ts,svg}",
  ],
  safelist:
  [
    {
      pattern: /order-\d+/,
    },
    'order-none',
  ],
  theme:
  {
    backgroundColor:
		{
      primary: "#000000",
      secondary: "#4C421A",
      neutral: "#FFFFFA"
    },
    borderColor:
		{
      primary: "#000000",
      secondary: "#4C421A",
      neutral: "#FFFFFA"
    },
    colors:
		{
      primary: "#000000",
      secondary: "#4C421A",
      neutral: "#FFFFFA"
    },
    fontFamily:
    {
      primary: ["DM Sans", "sans-serif"],
      secondary: ["Kodchasan", "sans-serif"],
      monospace: ["Space Mono", "monospace"],
      "slider-alpha": ["Gochi Hand", "cursive"],
      "slider-bravo": ["Mynerve", "cursive"],
      "slider-charlie": ["Audiowide", "sans-serif"],
      "slider-delta": ["Reenie Beanie", "cursive"]
    },
    textColor:
    {
      primary: "#000000",
      secondary: "#4C421A",
      neutral: "#FFFFFA",
      highlight: "#FF46A2"
    },
    extend:
    {
      keyframes:
      {
        wave:
        {
          '0%, 100%': {transform: 'rotate(0deg)'},
          '50%': {transform: 'rotate(20deg)'},
        },
      },
      animation:
      {
        wave: 'wave 1s ease-in-out infinite',
      },
    }
  },
  plugins: []
}