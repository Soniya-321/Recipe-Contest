import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Recipe</h1>
      <div >
        <img className={styles.img}  src='https://static.vecteezy.com/system/resources/previews/036/280/650/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg' />
      </div>
    </header>
  );
};

export default Header;
