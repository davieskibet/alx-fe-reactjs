import React from "react";

function AddRecipe() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Add a New Recipe</h2>
      <form className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Recipe Description"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;
