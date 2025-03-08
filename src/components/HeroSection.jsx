import React from "react";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2>Favourite Recipes</h2>
        <p>Save your favorite recipes and easily access them anytime in your personalized favorites list.</p>
        <button className={styles.button}>Order Now →</button>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.image} src="https://media.istockphoto.com/id/1190330112/photo/fried-pork-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=TzvLLGGvPAmxhKJ6fz91UGek-zLNNCh4iq7MVWLnFwo=" alt="Img" />
      </div>
    </section>
  );
};

export default HeroSection;
