import React from "react";
import styles from "../styles/SortingOptions.module.css";

const SortingOptions = ({ sortOption, setSortOption }) => {
  return (
    <div className={styles.sortingContainer}>
      <label htmlFor="sorting" className={styles.sortLabel}>Sort By:</label>
      <select
        id="sorting"
        onChange={(e) => setSortOption(e.target.value)}
        className={styles.sortSelect}
        value={sortOption}
      >
        <option value="newest">Upload Date: Newest</option>
        <option value="oldest">Upload Date: Oldest</option>
        <option value="highest-rating">Rating: Highest</option>
        <option value="lowest-rating">Rating: Lowest</option>
      </select>
    </div>
  );
};

export default SortingOptions;
