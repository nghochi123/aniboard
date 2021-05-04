import React from "react";
import { useRouter } from "next/router";
import {
  Grid,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import ScrollCard from "../../medium/ScrollCard/ScrollCard";
import * as styles from "./SortByPage.module.css";

export default function SortByPage({ data, sort }) {
  const router = useRouter();
  const handleChange = (e) => {
    const pos = e.target.value;
    router.push(`/sortby/${pos}`);
  };
  return (
    <div className={styles.outercontainer}>
      <Grid container className={styles.main}>
        <Grid item xs={12}>
          <div className={`${styles.container} ${styles.top}`}>
            <Typography variant="h4" style={{ fontWeight: 300, textTransform: 'capitalize' }}>
              Sorting By {sort.replace('_DESC', '').toLowerCase()}
            </Typography>
            <FormControl>
              <InputLabel id="sort">Sort by:</InputLabel>
              <Select
                labelId="sort"
                defaultValue={sort}
                onChange={handleChange}
              >
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
            <div style={{ margin: "10px 0" }}>
              <ScrollCard data={item} />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
