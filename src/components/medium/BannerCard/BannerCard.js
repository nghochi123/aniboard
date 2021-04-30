import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import Tags from '../../small/Tags/Tags';
import Slider from '../Slider/Slider';
import * as styles from "./BannerCard.module.css";

export default function BannerCard() {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.container}
    >
      <motion.img
        animate={{ scale: hover ? 1.1 : 1 }}
        className={styles.banner}
        src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg"
        alt="image"
      />
      <motion.div
        animate={{ opacity: hover ? 1 : 0 }}
        className={`${styles.overlay}`}
      >
        <div className={styles.overlayItems}>
          <img
            src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx21-tXMN3Y20PIL9.jpg"
            alt="img"
          />
          <div className={styles.innerText}>
            <Typography variant="body1" style={{display: 'flex'}}><Star style={{marginRight:'5px'}}/>10</Typography>
            <Typography variant="h2">One Piece</Typography>
            <Tags>Hello</Tags>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
