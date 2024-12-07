import React, { useState } from "react";

function AddRecipeForm() {
  const [form, setForm] = useState({ title: "", ingredients: "", steps: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.title.trim()) {
      errors.title = "Title is required";
    }
    if (!data.ingredients.trim()) {
      errors.ingredients = "Ingredients are required";
    } else {
      const ingredientItems = data.ingredients
        .split(/[,|\n]/) // Split by comma or newline
        .map((item) => item.trim()) // Trim whitespace from each item
        .filter((item) => item); // Remove empty items

      if (ingredientItems.length < 2) {
        errors.ingredients = "Please include at least two ingredients.";
      }
    }
    if (!data.steps.trim()) {
      errors.steps = "Steps are required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    const newErrors = validateForm(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
      // Add form submission logic here (e.g., send data to an API)
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  const { title, ingredients, steps } = form;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Recipe Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-sm font-medium text-gray-700"
          >
            Ingredients:
          </label>
          <textarea
            name="ingredients"
            id="ingredients"
            value={ingredients}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="steps"
            className="block text-sm font-medium text-gray-700"
          >
            Steps:
          </label>
          <textarea
            name="steps"
            id="steps"
            value={steps}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
