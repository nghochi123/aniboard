import React, {useState, useEffect} from "react";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import MyListCard from "../../medium/MyListCard/MyListCard";
import * as styles from "./MyListPage.module.css";

export default function MyListPage({ data }) {
  const [pageData, setPageData] = useState(data);
  useEffect(()=>{
    setPageData(data);
  }, [data])
  return (
    <div className={styles.outercontainer}>
      <Grid container className={styles.main}>
        <Grid item xs={12}>
          <div className={`${styles.container} ${styles.top}`}>
            <Typography variant="h4" style={{ fontWeight: 300, textTransform: 'capitalize' }}>
              My List
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container className={styles.main}>
        {pageData.map((item) => (
          <Grid item xs={12} sm={3} md={2}>
            <div style={{ margin: "10px 0" }}>
              <MyListCard data={item} pageData={pageData} setPageData={setPageData}/>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
