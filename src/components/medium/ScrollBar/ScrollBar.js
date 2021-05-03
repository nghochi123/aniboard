import React, { useRef } from "react";
import { useRouter } from "next/router";
import { IconButton } from "@material-ui/core";
import { Add, ChevronRight, ChevronLeft } from "@material-ui/icons";
import { motion } from "framer-motion";
import * as styles from "./ScrollBar.module.css";

export default function ScrollBar({ children, link }) {
  const scrollRef = useRef();
  const router = useRouter();
  const clickHandler = () => {
    router.push(link)
  }
  const showMore = link ? (
    <motion.div className={styles.more} onClick={clickHandler}>
      <Add />
      View More
    </motion.div>
  ) : null;
  const scroll = (pn) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollLeft += 800 * pn;
  };
  return (
    <div className={styles.outerContainer}>
      <motion.div className={styles.scroller} ref={scrollRef}>
        {children}
        {showMore}
      </motion.div>
      <div className={styles.next}>
        <IconButton onClick={() => scroll(1)}>
          <ChevronRight />
        </IconButton>
      </div>
      <div className={styles.prev}>
        <IconButton onClick={() => scroll(-1)}>
          <ChevronLeft />
        </IconButton>
      </div>
    </div>
  );
}
