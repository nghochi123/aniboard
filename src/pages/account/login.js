import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  outerContainer: {
    height: "80vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  pushUp: {
    marginTop: "1.5em",
  },
}));

const LogIn = ({ users }) => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const router = useRouter();
  const [userField, passwordField] = [useRef(), useRef()];
  const submitHandler = async (e) => {
    e.preventDefault();
    const [username, password] = [
      userField.current.value,
      passwordField.current.value,
    ];
    await axios
      .post("/api/signin", {
        username,
        password,
      })
      .then((res) => {
        router.push('/');
      })
      .catch((e) => {
        setError("Username or Password is incorrect");
      });
  };
  return (
    <Container
      className={classes.outerContainer}
      component="main"
      maxWidth="xs"
    >
      <Head>
        <title>Log In</title>
      </Head>
      <CssBaseline />
      <div className={classes.innerContainer}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.pushUp} onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="user"
            label="Username"
            autoFocus
            inputRef={userField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            inputRef={passwordField}
            helperText={error}
          />
          <Button
            className={classes.pushUp}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
          <Grid className={classes.pushUp} container>
            <Grid item xs>
              <Link href="/" variant="body2">
                Home
              </Link>
            </Grid>
            <Grid item>
              <Link href="/account/signup" variant="body2">
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LogIn;

// export const getServerSideProps = async ({ req, query }) => {
//   const users = await diagrams("users").select();
//   return {
//     props: {
//       users: JSON.parse(JSON.stringify(users)),
//     },
//   };
// };
