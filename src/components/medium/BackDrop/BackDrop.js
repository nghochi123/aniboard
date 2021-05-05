import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import axios from "axios";
import { Star } from "@material-ui/icons";
import Tags from "../../small/Tags/Tags";
import * as styles from "./BackDrop.module.css";

export default function BackDrop({ image, data }) {
  const [disabled, setDisabled] = useState(false);
  const addHandler = async () => {
    await axios
      .post("/api/addtolist", {
        itemid: data.id,
      })
      .then((res) => {
        setDisabled(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div
      style={{
        background: `linear-gradient(#00000099, #00000099), url("${image}") no-repeat left top`,
        backgroundSize: "cover",
      }}
      className={styles.backdrop}
    >
      <div className={styles.innerbackdrop}>
        <div className={styles.imagecontainer}>
          <img
            src={data.coverImage.large}
            alt="image"
            className={styles.coverimage}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
            onClick={addHandler}
            disabled={disabled}
          >
            {disabled ? "Added to list" : "Add to list"}
          </Button>
        </div>
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
