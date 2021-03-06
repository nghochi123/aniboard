import React from "react";
import {useRouter} from 'next/router';
import { Grid, Typography, FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
import ScrollCard from "../../medium/ScrollCard/ScrollCard";
import * as styles from "./SearchPage.module.css";

export default function SearchPage({ data, searchterm, sortby }) {
  const router = useRouter();
  const handleChange = (e) => {
    const pos = e.target.value;
    router.push(`/search/${searchterm}?sortby=${pos}`)
  }
  return (
    <div className={styles.outercontainer}>
      <Grid container className={styles.main}>
        <Grid item xs={12}>
          <div className={`${styles.container} ${styles.top}`}>
            <Typography variant="h4" style={{ fontWeight: 300 }}>
              Results for "{searchterm}"
            </Typography>
            <FormControl>
              <InputLabel id="sort">
              Sort by:
              </InputLabel>
              <Select labelId="sort" defaultValue={sortby} onChange={handleChange}>
                <MenuItem value="POPULARITY_DESC">Most Popular</MenuItem>
                <MenuItem value="SCORE_DESC">Top Rated</MenuItem>
                <MenuItem value="TRENDING_DESC">Trending</MenuItem>
                <MenuItem value="FAVOURITES_DESC">Most Favourited</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
      </Grid>
      <Grid container className={styles.main}>
        {data.map((item) => (
          <Grid item xs={12} sm={3} md={2}>
            <div style={{margin: '10px 0'}}>
              <ScrollCard data={item} />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
