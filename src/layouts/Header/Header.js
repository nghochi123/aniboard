import React, { useState, useContext } from "react";
import { motion, useCycle } from "framer-motion";
import { useRouter } from "next/router";
import {
  Grid,
  TextField,
  FormControl,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Search } from "@material-ui/icons";
import { MenuToggle } from "../../components/small/MenuToggle/MenuToggle";
import Drawer from "../../components/medium/Drawer/Drawer";
import { GlobalStateContext } from "../../context/GlobalContextProvider";
import * as styles from "./Header.module.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [open, setOpen] = useCycle(false, true);
  const darkMode = useContext(GlobalStateContext).darkMode;
  const [navEnd, setNavEnd] = useState(
    <Grid
      item
      xs={4}
      sm={4}
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      <div className={classes.root}>
        <Button
          className={styles.text}
          onClick={() => {
            router.push("/account/login");
          }}
        >
          Sign In
        </Button>
        <Button
          className={styles.text}
          onClick={() => {
            router.push("/account/signup");
          }}
        >
          Sign Up
        </Button>
      </div>
    </Grid>
  );
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const inputProps = {
    startAdornment: (
      <InputAdornment position="start">
        <Search />
      </InputAdornment>
    ),
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    router.push(`/search/${search}`);
  };
  return (
    <header className={styles.header}>
      <Grid container spacing={3} style={{ margin: 0 }}>
        <Grid item xs={2} sm={4}>
          <motion.nav initial={false} animate={open ? "open" : "closed"}>
            <motion.div
              className={styles.background}
              style={{ backgroundColor: darkMode ? "#303030" : "#FAFAFA" }}
              variants={sidebar}
            >
              <Drawer />
            </motion.div>
            <MenuToggle toggle={() => setOpen()} />
          </motion.nav>
        </Grid>
        <Grid item xs={6} sm={4}>
          <form onSubmit={submitHandler}>
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
          </form>
        </Grid>

        {navEnd}
      </Grid>
    </header>
  );
};

export default Header;
