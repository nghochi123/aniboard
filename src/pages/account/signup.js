import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import validator from "validator";
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

const SignUp = ({ users }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [userError, setUserError] = useState("");
  const [userField, passwordField, confirmField] = [
    useRef(),
    useRef(),
    useRef(),
  ];
  const classes = useStyles();
  const wait = async (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const [username, password] = [
      userField.current.value,
      passwordField.current.value,
    ];
    if (!validator.isAlphanumeric(username)) {
      setUserError("Username must be alphanumeric.");
    } else if (!validator.isStrongPassword(password)) {
      setUserError("Password is not strong enough.");
    } else if (!validator.equals(password, confirmField.current.value)) {
      setUserError("Passwords do not match.");
    }
    else {
      await axios
        .post("/api/signup", {
          username,
          password,
        })
        .then((res) => {
          if(res.data.error){
            return setUserError("Username has been taken");
          }
          router.push("/");
        })
        .catch((e) => {
          setUserError("Something went wrong. The server might be down or you might want to check your fields.");
        });
    }
  };
  const confirmPassword = () => {
    if (passwordField.current.value != confirmField.current.value) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <Container
      className={classes.outerContainer}
      component="main"
      maxWidth="xs"
    >
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className={classes.innerContainer}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={submitHandler} className={classes.pushUp}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                inputRef={userField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                inputRef={passwordField}
                error={error}
                helperText="Password needs a minimum of 8 characters, 1 symbol, 1 uppercase character and 1 lowercase character"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                onChange={confirmPassword}
                inputRef={confirmField}
                error={error}
                helperText={userError}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.pushUp}
          >
            Sign Up
          </Button>
          <Grid className={classes.pushUp} container justify="space-between">
            <Grid item>
              <Link href="/" variant="body2">
                Home
              </Link>
            </Grid>
            <Grid item>
              <Link href="/account/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default SignUp;

// export const getServerSideProps = async ({ req, query }) => {
//   const users = await diagrams("users").select();
//   return {
//     props: {
//       users: JSON.parse(JSON.stringify(users)),
//     },
//   };
// };
