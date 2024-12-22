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
      primary: "#253B6F",
      secondary: "#4C421A",
      vanilla: "#D3BFB1",
      neutral: "#FFFFFA"
    },
    borderColor:
		{
      primary: "#253B6F",
      secondary: "#4C421A",
      vanilla: "#D3BFB1",
      neutral: "#FFFFFA"
    },
    colors:
		{
      primary: "#253B6F",
      secondary: "#4C421A",
      vanilla: "#D3BFB1",
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
      primary: "#253B6F",
      secondary: "#4C421A",
      neutral: "#FFFFFA",
      highlight: "#FF46A2"
    },
    extend:
    {
      keyframes:
      {
        fadeOutIn:
        {
          '0%': {opacity: 1},
          '12.5%': {opacity: 1},
          '50%': {opacity: 0},
          '62.5%': {opacity: 0},
          '100%': {opacity: 1}
        },
        wave:
        {
          '0%, 100%': {transform: 'rotate(0deg)'},
          '50%': {transform: 'rotate(20deg)'},
        },
      },
      animation:
      {
        fadeOutIn: 'fadeOutIn 5s ease-in-out infinite',
        wave: 'wave 1s ease-in-out infinite',
      },
    }
  },
  plugins: []
}