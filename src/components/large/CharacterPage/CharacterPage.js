import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ScrollBar from "../../medium/ScrollBar/ScrollBar";
import ScrollCard from "../../medium/ScrollCard/ScrollCard";
import * as styles from "./CharacterPage.module.css";

export default function CharacterPage({ data }) {
  return (
    <div className={styles.outercontainer}>
      <Grid container className={styles.header}>
        <Grid item xs={12} md={3}>
          <div className={styles.imagecontainer}>
            <img src={data.image.large} className={styles.image} alt="image" />
          </div>
        </Grid>
        <Grid item xs={12} md={9}>
          <div className={styles.container}>
            <div className={styles.container}>
              <Typography variant="h3">{data.name.full}</Typography>
            </div>
            <div className={styles.container}>
              <Typography variant="body1">
                <strong>JP:</strong> {data.name.native}
              </Typography>
            </div>
            <div className={styles.container}>
              <Typography variant="body2">
                <strong>Gender:</strong> {data.gender}
              </Typography>
            </div>
            <div className={styles.container}>
              {data.description.split("\n").map((block) => {
                const regex = /__.*__/g;
                block = block.replaceAll('!~', '').replaceAll('~!', '').replaceAll('<i>', '');
                if (block.match(regex)) {
                  const slice = block.match(regex)[0];
                  block = block.replace(slice, "");
                  const replaced = slice.replaceAll('__', '');
                  return (
                    <>
                      <Typography key={block} variant="body2">
                        <strong>{replaced}</strong> {block}
                      </Typography>
                    </>
                  );
                }
                return (
                  <>
                    <Typography
                      style={{ marginBottom: "20px" }}
                      key={block}
                      variant="body2"
                    >
                      {block}
                    </Typography>
                  </>
                );
              })}
            </div>
          </div>
        </Grid>
      </Grid>
      {/* End of header */}
      <div className={styles.container} style={{width: '1200px'}}>
        <Typography variant="h5" style={{ marginBottom: "10px" }}>
          Anime
        </Typography>
        <ScrollBar>
          {data.media.edges.map((edge, index) => {
            if (index > 9) return;
            return (
              <ScrollCard
                key={edge.node.title.romaji}
                data={edge.node}
              />
            );
          })}
        </ScrollBar>
      </div>
    </div>
  );
}
