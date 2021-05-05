import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import ScrollBar from "../../medium/ScrollBar/ScrollBar";
import CharacterCard from "../../medium/CharacterCard/CharacterCard";
import ScrollCard from "../../medium/ScrollCard/ScrollCard";
import * as styles from "./PageContent.module.css";

export default function PageContent({ data }) {
  return (
    <div className={styles.outercontainer}>
      <Grid container spacing={3} className={styles.pagecontent}>
        {/* Left Container */}
        <Grid item xs={12} md={3}>
          <div className={styles.container}>
            <Typography variant="h5">Information</Typography>
          </div>
          <div className={styles.container}>
            <Typography variant="h6">Other Titles</Typography>
            <Typography variant="body2">EN: {data.title.english}</Typography>
            <Typography variant="body2">JP: {data.title.native}</Typography>
          </div>
          <div className={styles.container}>
            <Typography variant="h6">Aired on</Typography>
            <Typography variant="body2">
              Start:{" "}
              {data.startDate.day
                ? `${data.startDate.day}/${data.startDate.month}/${data.startDate.year}`
                : "N/A"}
            </Typography>
            <Typography variant="body2">
              End:{" "}
              {data.endDate.day
                ? `${data.endDate.day}/${data.endDate.month}/${data.endDate.year}`
                : "N/A"}
            </Typography>
          </div>
          <div className={styles.container}>
            <Typography variant="h6">Average rating</Typography>
            <Typography variant="body2">{data.averageScore}%</Typography>
          </div>
          <div className={styles.container}>
            <Typography variant="h6">Popularity</Typography>
            <Typography variant="body2">{data.popularity}</Typography>
          </div>
          <div className={styles.container}>
            <Typography variant="h6">Studios involved</Typography>
            {data.studios.nodes.map(({ name }) => (
              <Typography key={name} variant="body2">
                {name}
              </Typography>
            ))}
          </div>
          <div className={styles.container}>
            <Typography variant="h6">Source material</Typography>
            <Typography variant="body2" style={{ textTransform: "capitalize" }}>
              {data.source.toLowerCase()}
            </Typography>
          </div>
          <div className={styles.container}>
            <Typography variant="h6">Tags</Typography>
            {data.tags.map(({ name }, index) => {
              if (index > 9) return;
              return (
                <Typography key={name} variant="body2">
                  {name}
                </Typography>
              );
            })}
          </div>
          <div className={styles.container}>
            <Typography variant="h6">Links</Typography>
            {data.externalLinks.map(({ site, url }, index) => {
              if (index > 9) return;
              return (
                <Typography key={url} variant="body2">
                  <Link href={url}>{site}</Link>
                </Typography>
              );
            })}
          </div>
        </Grid>
        {/* Right Container */}
        <Grid item xs={12} md={9}>
          <div className={styles.container}>
            <Typography variant="h5" style={{ marginBottom: "10px" }}>
              Synopsis
            </Typography>
            {data.description
              ? data.description.split(/[\n]|[_]+|<i>|<br>|<\/i>|<\/br>|<b>|<\/b>|!~|~!/).map((block) => {
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
                })
              : null}
          </div>
          <div className={styles.container}>
            <Typography variant="h5" style={{ marginBottom: "10px" }}>
              Characters
            </Typography>
            <ScrollBar>
              {data.characters.edges.map((character, index) => {
                return (
                  <CharacterCard
                    key={character.node.name.full}
                    character={character}
                  />
                );
              })}
            </ScrollBar>
          </div>
          <div className={styles.container}>
            <Typography variant="h5" style={{ marginBottom: "10px" }}>
              Similar
            </Typography>
            <ScrollBar>
              {data.recommendations.edges.map((edge, index) => {
                return (
                  <ScrollCard
                    key={index}
                    data={edge.node.mediaRecommendation}
                  />
                );
              })}
            </ScrollBar>
          </div>
          {data.trailer ? (
            <div className={styles.container}>
              <Typography variant="h5" style={{ marginBottom: "10px" }}>
                Trailer
              </Typography>
              <iframe
                width="100%"
                height="600"
                src={`https://www.youtube.com/embed/${data.trailer.id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allow="fullscreen"
              ></iframe>
            </div>
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
}
