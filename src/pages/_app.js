import React, { useEffect, useState } from "react";
import {useRouter} from 'next/router';
import { AnimatePresence, motion } from "framer-motion";
import PageSpinner from '../components/large/PageSpinner/PageSpinner'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [pageLoading, setPageLoading] = useState(false);
  const router = useRouter();
  useEffect(()=>{
    const handleStart = () => {
      setPageLoading(true);
    }
    const handleEnd = () => {
      setPageLoading(false);
    }
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleEnd);
    router.events.on('routeChangeError', handleEnd);
  })
  return pageLoading ? <PageSpinner/> : <Component {...pageProps} />;
}

export default MyApp;
