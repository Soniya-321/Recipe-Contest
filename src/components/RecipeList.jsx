import React from "react";
import RecipeCard from "./RecipeCard";
import styles from "../styles/RecipeList.module.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className={styles.recipeList}>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
