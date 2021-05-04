import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import PageSpinner from "../components/large/PageSpinner/PageSpinner";
import "../styles/globals.css";
import { lightBlue } from "@material-ui/core/colors";

function MyApp({ Component, pageProps }) {
  const [pageLoading, setPageLoading] = useState(false);
  const router = useRouter();
  const darkMode = true;
  const darkTheme = createMuiTheme(
    {
      palette: {
        type: "dark",
        primary: lightBlue
      },
    }
  );
  const lightTheme = createMuiTheme(
    {
      palette: {
        type: "light",
      },
    }
  );
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleEnd = () => {
      setPageLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleEnd);
    router.events.on("routeChangeError", handleEnd);
  });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {pageLoading ? <PageSpinner /> : <Component {...pageProps} />}
    </ThemeProvider>
  );
}

export default MyApp;
