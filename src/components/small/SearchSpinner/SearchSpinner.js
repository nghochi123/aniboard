import React from "react";
import * as styles from "./SearchSpinner.module.css";

export default function SearchSpinner() {
  return (
    <div class={styles.ldsellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
