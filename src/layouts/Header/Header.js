import React, { useState, useEffect } from "react";
import {motion, useCycle} from 'framer-motion';
import {
  Grid,
  TextField,
  FormControl,
  InputAdornment,
} from "@material-ui/core";
import { Search, Home } from "@material-ui/icons";
import {MenuToggle} from '../../components/small/MenuToggle/MenuToggle';
import Drawer from '../../components/medium/Drawer/Drawer';

import * as styles from "./Header.module.css";

const Header = (props) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useCycle(false, true);
  const [navEnd, setNavEnd] = useState((
    <Grid item xs={4} sm={4} style={{ display: "flex", justifyContent: "flex-end" }}>
      <p className={styles.text}>Sign In</p>
      <p className={styles.text}>Sign Up</p>
    </Grid>
  ))
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };
  useEffect(() => {
    localStorage.setItem("authed", "true");
    if (localStorage.getItem("authed") === "true") {
      setNavEnd(
        <Grid
          item
          xs={4} sm={4}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <p className={styles.text}>Account</p>
          <p className={styles.text}>Log Out</p>
        </Grid>
      );
    }
  }, []);
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
        <Grid item xs={2} sm={4}>
          <motion.nav initial={false} animate={open ? "open" : "closed"}>
            <motion.div className={styles.background} variants={sidebar}>
            <Drawer/>

            </motion.div>
            <MenuToggle toggle={()=>setOpen()}/>
          </motion.nav>
        </Grid>
        <Grid item xs={6} sm={4}>
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

        {navEnd}
      </Grid>
    </header>
  );
};

export default Header;
