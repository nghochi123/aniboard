import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Typography } from "@material-ui/core";
import * as styles from "./CharacterCard.module.css";

export default function CharacterCard({ character }) {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  const clickHandler = () => {
    router.push(`/characters/${character.node.id}`);
  };
  return (
    <motion.div
      className={styles.container}
      onClick={clickHandler}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.imagecontainer}>
        <motion.img
          className={styles.image}
          src={character.voiceActors[0].image.large}
          animate={{ opacity: hover ? 1 : 0 }}
          alt="image"
        />
        <motion.img
          className={styles.image}
          src={character.node.image.large}
          animate={{ opacity: hover ? 0 : 1 }}
          alt="image"
        />
      </div>
      <div className={styles.text}>
        <Typography variant="body1">{character.node.name.full}</Typography>
        <Typography variant="body1">
          VA: {character.voiceActors[0].name.full}
        </Typography>
      </div>
    </motion.div>
  );
}
