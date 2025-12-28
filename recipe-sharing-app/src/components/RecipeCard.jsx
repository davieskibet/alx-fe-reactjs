import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="p-4">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h3 className="text-xl font-semibold mt-2">{recipe.title}</h3>
      <p className="text-gray-600 mt-1">{recipe.summary}</p>
      <Link
        to={`/recipe/${recipe.id}`}
        className="mt-3 text-blue-500 hover:underline block"
      >
        View Details
      </Link>
    </div>
  );
}

export default RecipeCard;
