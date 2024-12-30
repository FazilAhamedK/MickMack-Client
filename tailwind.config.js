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
      vanilla: "#D3BFB1",
      whatsapp: "#103928",
      neutral: "#FFFFFA"
    },
    borderColor:
		{
      primary: "#000000",
      secondary: "#4C421A",
      vanilla: "#D3BFB1",
      whatsapp: "#103928",
      neutral: "#FFFFFA"
    },
    colors:
		{
      primary: "#000000",
      secondary: "#4C421A",
      vanilla: "#D3BFB1",
      neutral: "#FFFFFA",
      whatsapp: "#103928",
      current: "currentColor"
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
      whatsapp: "#103928",
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