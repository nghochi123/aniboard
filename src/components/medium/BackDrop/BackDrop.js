import React from "react";
import { Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import Tags from "../../small/Tags/Tags";
import * as styles from "./BackDrop.module.css";

export default function BackDrop({ image, data }) {
  return (
    <div
      style={{
        background: `linear-gradient(#00000099, #00000099), url("${image}") no-repeat left top`,
        backgroundSize: "cover",
      }}
      className={styles.backdrop}
    >
      <div className={styles.innerbackdrop}>
        <img
          src={data.coverImage.large}
          alt="image"
          className={styles.coverimage}
        />
        <div className={styles.text}>
          <Typography
            variant="body1"
            style={{ marginBottom: "1rem", display: "flex" }}
          >
            <Star style={{ marginRight: "5px" }} /> {data.averageScore}%
          </Typography>
          <Typography
            variant="h3"
            style={{ fontWeight: 300, marginBottom: "1rem" }}
          >
            {data.title.romaji}
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "1rem" }}>
            {data.season} {data.seasonYear} {data.format}
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "1rem" }}>
            {data.episodes} Eps, {data.duration} min
          </Typography>
          {data.genres.map((genre) => (
            <Tags key={genre}>{genre}</Tags>
          ))}
        </div>
      </div>
    </div>
  );
}
