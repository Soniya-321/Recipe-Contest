import React from "react";
import RecipesPage from "./pages/RecipesPage";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <RecipesPage />
    </div>
  );
}

export default App;
