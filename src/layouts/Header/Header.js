import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { Menu, Search } from "@material-ui/icons";

import * as styles from "./Header.module.css";

const Header = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const inputProps = {
    style: { backgroundColor: "#ffffff" },
    startAdornment: (
      <InputAdornment position="start">
        <Search />
      </InputAdornment>
    ),
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <header className={styles.header}>
      <Grid container spacing={3} style={{ margin: 0 }}>
        <Grid item xs={4}>
          <IconButton>
            <Menu />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <FormControl
            fullWidth
            className={styles.search}
            noValidate
            autoComplete="off"
          >
            <TextField
              InputProps={inputProps}
              label="Search"
              variant="filled"
              value={search}
              onChange={searchHandler}
            />
          </FormControl>
        </Grid>
        <Grid
          item
          xs={4}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
