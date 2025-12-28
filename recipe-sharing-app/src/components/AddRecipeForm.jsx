import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title) {
      newErrors.title = "Recipe title is required";
    }

    if (!ingredients) {
      newErrors.ingredients = "ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients =
        "Please include at least two ingredients";
    }

    if (!steps) {
      newErrors.steps = "steps are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newRecipe = {
      title,
      ingredients,
      steps,
    };

    console.log("Recipe submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 md:text-4xl">
        Add New Recipe
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-6 space-y-4 md:p-8"
      >
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2 md:px-4 md:py-3"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded px-3 py-2 md:px-4 md:py-3"
            rows="4"
            placeholder="List ingredients separated by commas"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded px-3 py-2 md:px-4 md:py-3"
            rows="4"
            placeholder="Enter preparation steps"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition md:py-3"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
