import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import Tags from "../../small/Tags/Tags";
import { wrap } from "popmotion";
import * as styles from "./Slider.module.css";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Slider({ data, hover }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, data.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <motion.img
            animate={{ scale: hover ? 1.1 : 1 }}
            className={styles.banner}
            src={data[imageIndex].bannerImage}
            alt="image"
          />
          <motion.div
            animate={{ opacity: hover ? 1 : 0 }}
            className={`${styles.overlay}`}
          >
            <div className={styles.overlayItems}>
              <img
                src={data[imageIndex].coverImage.medium}
                alt="img"
              />
              <div className={styles.innerText}>
                <Typography variant="body1" style={{ display: "flex" }}>
                  <Star style={{ marginRight: "5px" }} />
                  {data.averageScore}
                </Typography>
                <Typography variant="h2">Hello</Typography>
                <Tags>Hello</Tags>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className={styles.next} onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className={styles.prev} onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
}
