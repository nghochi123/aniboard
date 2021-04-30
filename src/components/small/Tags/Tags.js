import React, { useState } from "react";
import { motion } from "framer-motion";

import * as styles from "./Tags.module.css";

export default function Tags({ children }) {
  const [hover, setHover] = useState(false);
  const animate = {
    backgroundColor: hover ? "#0077b6":"#00b4d8"
  };
  return (
    <motion.a
      className={styles.link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      animate={animate}
    >
      {children}
    </motion.a>
  );
}
