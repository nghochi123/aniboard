import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import Tags from "../../small/Tags/Tags";
import * as styles from "./ScrollCard.module.css";

export default function ScrollCard({data}) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div className={styles.container}>
      <motion.img
        className={styles.image}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        src={data.coverImage.large}
        alt="image"
      />
      <motion.div
        animate={{ opacity: hover ? 1 : 0, visibility: hover ? 1 : 0 }}
        className={`${styles.tooltip}`}
      >
        <div className={styles.innerText}>
          <Typography variant="body1" style={{ display: "flex" }}>
            <Star style={{ marginRight: "5px" }} />
            {data.popularity}
          </Typography>
          <Typography variant="h6">{data.title.romaji}</Typography>
          <Tags>Hello</Tags>
        </div>
      </motion.div>
      <Typography variant="body1">{data.title.romaji}</Typography>
    </motion.div>
  );
}
