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
      neutral: "#FFFFEE",
      food:
      {
        vegan: "#03759B",
        vegetarian: "#006400",
        egg: "#A35F1B",
        nonVegetarian: "#652A03"
      }
    },
    borderColor:
		{
      primary: "#0F182C",
      secondary: "#4C421A",
      neutral: "#FFFFEE",
      food:
      {
        vegan: "#03759B",
        vegetarian: "#006400",
        egg: "#A35F1B",
        nonVegetarian: "#652A03"
      }
    },
    colors:
		{
      primary: "#0F182C",
      secondary: "#4C421A",
      neutral: "#FFFFEE",
      food:
      {
        vegan: "#03759B",
        vegetarian: "#006400",
        egg: "#A35F1B",
        nonVegetarian: "#652A03"
      }
    },
    textColor:
    {
      primary: "#0F182C",
      secondary: "#4C421A",
      neutral: "#FFFFEE",
      food:
      {
        vegan: "#03759B",
        vegetarian: "#006400",
        egg: "#A35F1B",
        nonVegetarian: "#652A03"
      }
    }
  },
  plugins: [],
}