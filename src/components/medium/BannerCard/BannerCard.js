import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "../Slider/Slider";
import * as styles from "./BannerCard.module.css";

export default function BannerCard({data}) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.container}
    >
      <Slider data={data} hover={hover}/>
    </motion.div>
  );
}
