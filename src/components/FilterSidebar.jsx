import React, { useState } from "react";
import styles from "../styles/FilterSidebar.module.css";
import { recipesData } from "../data/recipes"; // Import original recipe data

const FilterSidebar = ({ setFilteredRecipes }) => {
  // Define filter categories
  const filterOptions = {
    Attributes: ["Contest Winner", "Featured", "Test Kitchen-Approved"],
    "Meal Type": ["Dinner", "Lunch", "Dessert", "Breakfast"],
    "Dish Type": ["Curry", "Pizza", "Seafood", "Soup", "Mexican", "Smoothie"]
  };

  const [selectedFilters, setSelectedFilters] = useState([]);

  // Function to handle checkbox selection
  const handleFilterChange = (filter) => {
    let updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((item) => item !== filter) // Remove filter
      : [...selectedFilters, filter]; // Add filter

    setSelectedFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  // Function to apply filters
  const applyFilters = (filters) => {
    if (filters.length === 0) {
      setFilteredRecipes(recipesData); // Show all recipes if no filter is selected
      return;
    }

    const attributeFilters = filters.filter((f) => filterOptions.Attributes.includes(f));
    const mealDishFilters = filters.filter((f) => !filterOptions.Attributes.includes(f));

    let filtered = recipesData;

    // Apply attribute filtering (ensure it only returns true values)
    if (attributeFilters.length > 0) {
      filtered = filtered.filter((recipe) =>
        attributeFilters.every((attr) => {
          if (attr === "Contest Winner") return recipe.contestWinner === true;
          if (attr === "Featured") return recipe.featured === true;
          if (attr === "Test Kitchen-Approved") return recipe.testKitchenApproved === true;
          return false;
        })
      );
    }
      // Apply Meal Type & Dish Type filtering (unchanged)
    if (mealDishFilters.length > 0) {
      filtered = filtered.filter(
        (recipe) => mealDishFilters.includes(recipe.mealType) || mealDishFilters.includes(recipe.dishType)
      );
    }

    setFilteredRecipes(filtered);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedFilters([]);
    setFilteredRecipes(recipesData);
  };

  return (
    <div className={styles.sidebar}>
      <h3>Filter By:</h3>
      {Object.entries(filterOptions).map(([category, options]) => (
        <div key={category} className={styles.filterCategory}>
          <h4>{category}</h4>
          {options.map(option => (
            <label key={option} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                value={option}
                checked={selectedFilters.includes(option)}
                onChange={() => handleFilterChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button className={styles.clearButton} onClick={clearFilters}>
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
