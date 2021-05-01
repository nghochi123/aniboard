import React from "react";
import axios from "axios";
import Layout from '../../layouts/Layout';
import BackDrop from '../../components/medium/BackDrop/BackDrop';

export default function Anime({ pageData }) {
  console.log(pageData);
  return (
  <Layout>
    <BackDrop/>
    
    
    
    
    <div>{pageData.title.romaji}</div>
    <div>{pageData.season}</div>
    <div>{pageData.seasonYear}</div>
    <div>{pageData.type}</div>
    <div>{pageData.format}</div>
    <div>{pageData.status}</div>
    <div>{pageData.episodes}</div>
    <div>{pageData.duration}</div>
    <div>{pageData.isAdult}</div>
    <div>{pageData.source}</div>
  </Layout>);
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const idQuery = `
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      title {
        romaji
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      bannerImage
      coverImage {
        large
        medium
      }
      season
      seasonYear
      type
      format
      status
      episodes
      duration
      isAdult
      genres
      tags {
        name
      }
      source
      countryOfOrigin
      characters {
        edges {
          voiceActors {
            name {
              full
            }
            image {
              large
              medium
            }
          }
          node {
            name {
              full
            }
            image {
              large
              medium
            }
          }
        }
      }
      trailer {
        id
        site
        thumbnail
      }
    }
  }
  `;
  const variables = {
    id: parseInt(id),
  };
  let pageData;
  await axios
    .post(
      "https://graphql.anilist.co/",
      {
        query: idQuery,
        variables: variables,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      pageData = res.data.data.Media;
    })
    .catch((error) => (pageData = error));
  return {
    props: {
      pageData: JSON.parse(JSON.stringify(pageData)),
    },
  };
}
