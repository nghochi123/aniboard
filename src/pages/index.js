import React from "react";
import axios from "axios";

export default function Home({getTrending}) {
  return <div>
    {getTrending.map(anime => anime.bannerImage ? (
      <div style={{position: 'relative'}}>
        <p style={{position: 'absolute'}}>{anime.title.english}</p>
        <img style={{width: '100vw'}} src={anime.bannerImage} alt="fuck"/>
        </div>
    ) : null)}
  </div>;
}

export const getServerSideProps = async () => {
  let getTrending;
  const trendQuery = `
  query {
    Page(page: 1, perPage: 20) {
      media(type: ANIME, sort:TRENDING_DESC){
        id
        status
        coverImage{
          extraLarge
        }
        bannerImage
        title {
          english
          native
        }
      }
    }
  }
  `;
  const variables = {
    id:15125
  }
  await axios.post(
    "https://graphql.anilist.co",
    {
      query: trendQuery,
      variables,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  ).then(res=>getTrending = res.data.data.Page.media);
  return {
    props: {
      getTrending: JSON.parse(JSON.stringify(getTrending))
    },
  }
};
