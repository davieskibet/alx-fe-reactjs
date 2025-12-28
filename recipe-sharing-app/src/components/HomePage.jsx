import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="block"
          >
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
