import React, { useRef } from "react";
import { IconButton } from "@material-ui/core";
import { Add, ChevronRight, ChevronLeft } from "@material-ui/icons";
import { motion } from "framer-motion";
import * as styles from "./ScrollBar.module.css";
import ScrollCard from "../ScrollCard/ScrollCard";

export default function ScrollBar({data}) {
  const scrollRef = useRef();
  const scroll = (pn) => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollLeft += 500 * pn;
  };
  return (
    <div className={styles.outerContainer}>
      <motion.div className={styles.scroller} ref={scrollRef}>
        {data.map(item=>(
            <ScrollCard data={item}/>
        ))}
        <motion.div className={styles.more} whileHover={{ scale: 1.2 }}>
          <Add />
          View More
        </motion.div>
      </motion.div>
        <div className={styles.next} >
          <IconButton onClick={()=>scroll(1)}>
            <ChevronRight />
          </IconButton>
        </div>
        <div className={styles.prev}>
          <IconButton onClick={()=>scroll(-1)}>
            <ChevronLeft />
          </IconButton>
        </div>
    </div>
  );
}
