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
      primary: "#0F182C",
      secondary: "#4C421A",
      neutral: "#FFFFFA",
      trial: "rgba(241, 139, 105, 0.6)"
    },
    borderColor:
		{
      primary: "#0F182C",
      secondary: "#4C421A",
      neutral: "#FFFFFA"
    },
    colors:
		{
      primary: "#0F182C",
      secondary: "#4C421A",
      neutral: "#FFFFFA",
      black:
      {
        50: "rgba(0, 0, 0, 0.5)"
      }
    },
    fontFamily:
    {
      primary: ["Poiret One", "sans-serif"],
      secondary: ["Pompiere", "sans-serif"]
    },
    textColor:
    {
      primary: "#0F182C",
      secondary: "#4C421A",
      neutral: "#FFFFFA"
    },
    extend:
    {
      keyframes:
      {
        marquee:
        {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation:
      {
        marquee: 'marquee 100s linear infinite',
      },
    }
  },
  plugins: [],
}