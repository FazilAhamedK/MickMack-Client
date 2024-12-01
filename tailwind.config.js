/** @type {import('tailwindcss').Config} */
module.exports =
{
  content:
  [
    "./src/**/*.{html,scss,ts,svg}",
  ],
  theme:
  {
    backgroundColor:
		{
      primary: "#000000",
      secondary: "#4C421A",
      neutral: "#FFFFFA",
    },
    borderColor:
		{
      primary: "#000000",
      secondary: "#4C421A",
      neutral: "#FFFFFA"
    },
    colors:
		{
      primary:
      {
        50: "rgba(0, 0, 0, 0.5)",
        100: "rgba(0, 0, 0, 1)"
      },
      secondary: "#4C421A",
      neutral: "#FFFFFA",
    },
    fontFamily:
    {
      primary: ["DM Sans", "sans-serif"],
      secondary: ["Kodchasan", "sans-serif"],
      "slider-alpha": ["Gochi Hand", "cursive"],
      "slider-bravo": ["Mynerve", "cursive"],
      "slider-charlie": ["Audiowide", "sans-serif"],
      "slider-delta": ["Reenie Beanie", "cursive"]
    },
    textColor:
    {
      primary: "#000000",
      secondary: "#4C421A",
      neutral: "#FFFFFA"
    }
  },
  plugins: [],
}