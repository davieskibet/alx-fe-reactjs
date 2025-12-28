import React from "react";
import RecipeCard from "../components/RecipeCard";

function Home() {
  // Placeholder recipe data
  const recipes = [
    { id: 1, title: "Pancakes", description: "Fluffy and delicious" },
    { id: 2, title: "Spaghetti", description: "Classic Italian pasta" },
  ];

  return (
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default Home;
