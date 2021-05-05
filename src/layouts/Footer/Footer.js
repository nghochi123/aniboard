import React, { useContext } from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { Language, GitHub, LinkedIn, Code } from "@material-ui/icons";
import { GlobalStateContext } from "../../context/GlobalContextProvider";

export default function Footer() {
  const darkMode = useContext(GlobalStateContext).darkMode;
  return (
    <Grid
      container
      style={{
        maxWidth: "100vw",
        padding: 50,
        marginTop: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: darkMode ? "#111" : "#eee",
      }}
    >
      <Grid item xs={6} md={3}>
        <Typography variant="body2">AniBoard © 2021</Typography>
        <Typography variant="body2">Design and code by Ho Chi</Typography>
      </Grid>
      <Grid item xs={6} md={3}>
        <img
          src="/Anilist.png"
          width="50"
          height="50"
          alt="AniList"
          onClick={() => {
            window.open("https://github.com/AniList/ApiV2-GraphQL-Docs");
          }}
          style={{ cursor: "pointer" }}
        />
        <Typography variant="body2">Built with AniList API</Typography>
        <IconButton onClick={()=>{window.open('https://nghochi.netlify.app/')}}>
          <Language />
        </IconButton>
        <IconButton onClick={()=>{window.open('https://github.com/nghochi123')}}>
          <GitHub />
        </IconButton>
        <IconButton onClick={()=>{window.open('https://www.linkedin.com/in/ng-ho-chi-809a881b9/')}}>
          <LinkedIn />
        </IconButton>
        <IconButton onClick={()=>{window.open('https://github.com/nghochi123/aniboard')}}>
          <Code />
        </IconButton>
      </Grid>
    </Grid>
  );
}
