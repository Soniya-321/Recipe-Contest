import React from "react";
import styles from "../styles/RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className={styles.card}>
      <img src={recipe.imgUrl} alt={recipe.name} loading="lazy" />
      <h3>{recipe.name}</h3>
      <p className={styles.chef}>{recipe.chef}</p>
      <p className={styles.description}>{recipe.description}</p>
      <p className={styles.rating}>⭐ {recipe.avgRating} ({recipe.totalRatings})</p>
    </div>
  );
};

export default RecipeCard;
