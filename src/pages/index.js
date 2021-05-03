import React from "react";
import Layout from "../layouts/Layout";
import axios from "axios";
import { Typography } from "@material-ui/core";
import BannerCard from "../components/medium/BannerCard/BannerCard";
import ScrollBar from "../components/medium/ScrollBar/ScrollBar";
import ScrollCard from "../components/medium/ScrollCard/ScrollCard";

export default function index({trending, popular, top, favourites }) {
  return (
    <div>
      <Layout>
        <Typography variant="h4" style={{ margin: "1.5rem" }}>
          Trending Now
        </Typography>
        <BannerCard data={trending} />
        <Typography variant="h5" style={{ margin: "1.5rem" }}>
          Currently Popular
        </Typography>
        <ScrollBar>
          {popular.map((item) => (
            <ScrollCard key={item.title.romaji} data={item} />
          ))}
        </ScrollBar>
        <Typography variant="h5" style={{ margin: "1.5rem" }}>
          All time favorites
        </Typography>
        <ScrollBar>
          {favourites.map((item) => (
            <ScrollCard key={item.title.romaji} data={item} />
          ))}
        </ScrollBar>
        <Typography variant="h5" style={{ margin: "1.5rem" }}>
          Best rated
        </Typography>
        <ScrollBar>
          {top.map((item) => (
            <ScrollCard key={item.title.romaji} data={item} />
          ))}
        </ScrollBar>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const trendingQuery = `
  {
    Page(page: 1, perPage: 10) {
      media(sort: TRENDING_DESC, type: ANIME) {
        id
        genres
        bannerImage
        averageScore
        coverImage{
          medium
          large
        }
        title {
          romaji
        }
        popularity
      }
    }
  }
      `;
  const popularQuery = `
  {
    Page(page: 1, perPage: 10) {
      media(sort: POPULARITY_DESC, type: ANIME) {
        id
        genres
        bannerImage
        averageScore
        coverImage{
          medium
          large
        }
        title {
          romaji
        }
        popularity
      }
    }
  }
      `;
  const topQuery = `
  {
    Page(page: 1, perPage: 10) {
      media(sort: SCORE_DESC, type: ANIME) {
        id
        genres
        bannerImage
        averageScore
        coverImage{
          medium
          large
        }
        title {
          romaji
        }
        popularity
      }
    }
  }
      `;
  const favouritesQuery = `
  {
    Page(page: 1, perPage: 10) {
      media(sort: FAVOURITES_DESC, type: ANIME) {
        id
        genres
        bannerImage
        averageScore
        coverImage{
          medium
          large
        }
        title {
          romaji
        }
        popularity
      }
    }
  }
      `;
  const callAxios = async (query) => {
    const response = await axios
    .post(
      "https://graphql.anilist.co/",
      {
        query: query,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      return res.data.data.Page.media;
    })
    .catch((error) => {
      return error;
    });
    return response;
  }
  const trending =await callAxios(trendingQuery);
  const popular =await callAxios(popularQuery);
  const top = await callAxios(topQuery);
  const favourites =await callAxios(favouritesQuery);
  return {
    props: {
      trending: JSON.parse(JSON.stringify(trending)),
      popular: JSON.parse(JSON.stringify(popular)),
      top: JSON.parse(JSON.stringify(top)),
      favourites: JSON.parse(JSON.stringify(favourites)),
    },
  };
}
