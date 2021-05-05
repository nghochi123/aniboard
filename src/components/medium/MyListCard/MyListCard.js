import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Typography } from "@material-ui/core";
import { Star, Delete } from "@material-ui/icons";
import Tags from "../../small/Tags/Tags";
import * as styles from "./MyListCard.module.css";

export default function ScrollCard({ data, pageData, setPageData }) {
  const [hover, setHover] = useState(false);
  const [hoverDelete, setHoverDelete] = useState(false);
  const router = useRouter();
  const clickHandler = () => {
    router.push(`/anime/${data.id}`);
  };
  const deleteHandler = async () => {
    const newPageData = pageData.filter(item => item.id !== data.id);
    setPageData(newPageData);
    await axios
      .post("/api/deletefromlist", {
        itemid: data.id,
      })
      .then((res) => res)
      .catch((e) => e);
  };
  return (
    <motion.div className={styles.container}>
      <motion.img
        className={styles.image}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={clickHandler}
        src={data.coverImage.large}
        alt="image"
      />
      <motion.div
        animate={{ opacity: hover ? 1 : 0, visibility: hover ? 1 : 0 }}
        className={styles.tooltip}
      >
        <div className={styles.innerText}>
          <Typography variant="body1" style={{ display: "flex" }}>
            <Star style={{ marginRight: "5px" }} />
            {data.popularity}
          </Typography>
          <Typography variant="h6">{data.title.romaji}</Typography>
          {data.genres.map((genre, index) => {
            if (index > 1) return;
            return <Tags>{genre}</Tags>;
          })}
        </div>
      </motion.div>
      <Typography variant="body1" className={styles.bottomtext}>
        {data.title.romaji}
      </Typography>
      <motion.div
        animate={{
          opacity: hoverDelete ? 1 : 0,
          visibility: hoverDelete ? 1 : 0,
        }}
        onClick={deleteHandler}
        className={styles.deleteicon}
        onMouseEnter={() => setHoverDelete(true)}
        onMouseLeave={() => setHoverDelete(false)}
      >
        <Delete />
      </motion.div>
    </motion.div>
  );
}
