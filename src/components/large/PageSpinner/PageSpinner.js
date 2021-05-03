import React from "react";
import * as styles from "./PageSpinner.module.css";

export default function PageSpinner() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}>
        <span className={styles.loaderinner}></span>
      </span>
    </div>
  );
}
