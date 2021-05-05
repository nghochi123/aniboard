import React, {useContext} from "react";
import * as styles from "./PageSpinner.module.css";
import {GlobalStateContext} from '../../../context/GlobalContextProvider';

export default function PageSpinner() {
  const darkMode = useContext(GlobalStateContext).darkMode;
  return (
    <div className={styles.container}>
      <span className={styles.loader} style={{border: darkMode ? '4px solid #fff' :'4px solid #000'}}>
        <span className={styles.loaderinner} style={{backgroundColor: darkMode ? '#fff' : '#000'}}></span>
      </span>
    </div>
  );
}
