import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import Tags from "../../small/Tags/Tags";
import * as styles from "./ScrollCard.module.css";

export default function ScrollCard({ data }) {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  const clickHandler = () => {
    router.push(`/anime/${data.id}`);
  };
  return (
    <motion.div className={styles.container} onClick={clickHandler}>
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
          {data.genres.map((genre, index) => {
            if(index > 1) return;
            return <Tags>{genre}</Tags>
          })}
        </div>
      </motion.div>
      <Typography variant="body1">{data.title.romaji}</Typography>
    </motion.div>
  );
}
