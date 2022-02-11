import axios from 'axios';
import React, { useState } from 'react'

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
// const API_ID="f6a641e4";
// const APP_KEY = "f3436c27a6041af35bf7f248b0ccc906";

const Home = () => {
  const [query, setQuery] = useState("pizza");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/api/recipes/v2/f6a641e4?type=public&app_id=f6a641e4&app_key=f3436c27a6041af35bf7f248b0ccc906&field=${query}`;

  const getData = async() => {
    if(query !== ""){
      const result = await axios.get(url);
      console.log(result);
    }
  }

  return (
    <div>Home</div>
  )
}

export default Home;