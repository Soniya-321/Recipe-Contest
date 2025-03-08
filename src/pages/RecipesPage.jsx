import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import RecipeList from "../components/RecipeList";
import FilterSidebar from "../components/FilterSidebar";
import SearchBar from "../components/SearchBar";
import SortingOptions from "../components/SortingOptions";
import styles from "../styles/App.module.css";
import { recipesData } from "../data/recipes";

const RecipesPage = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  // Function to filter recipes based on search input
  useEffect(() => {
    const searchFiltered = recipesData.filter(recipe =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.chef.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredRecipes(searchFiltered);
  }, [searchQuery]);


  // Function to sort recipes dynamically
  useEffect(() => {
    let sortedRecipes = [...filteredRecipes];

    if (sortOption === "newest") {
      sortedRecipes.sort((a, b) => new Date(b.uploadedOn) - new Date(a.uploadedOn));
    } else if (sortOption === "oldest") {
      sortedRecipes.sort((a, b) => new Date(a.uploadedOn) - new Date(b.uploadedOn));
    } else if (sortOption === "highest-rating") {
      sortedRecipes.sort((a, b) => b.avgRating - a.avgRating);
    } else if (sortOption === "lowest-rating") {
      sortedRecipes.sort((a, b) => a.avgRating - b.avgRating);
    }

    setFilteredRecipes(sortedRecipes);
  }, [sortOption]);

  return (
    <div>
      <Header />
      <HeroSection />
      <div className={styles.container}>
        <FilterSidebar setFilteredRecipes={setFilteredRecipes} />
        <div className={styles.content}>
            <div className={styles.searchSortContainer}>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}  />
                <SortingOptions sortOption={sortOption} setSortOption={setSortOption} />
            </div>
            <RecipeList recipes={filteredRecipes} />
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
