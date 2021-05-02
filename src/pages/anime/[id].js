import React from "react";
import axios from "axios";
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer'
import BackDrop from "../../components/medium/BackDrop/BackDrop";
import PageContent from '../../components/large/PageContent/PageContent';

export default function Anime({ pageData }) {
  return (
    <div style={{overflow: 'hidden'}}>
      <Header/>
      <BackDrop image={pageData.bannerImage} data={pageData}/>
      <PageContent data={pageData}/>
      <Footer/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const idQuery = `
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      description
      externalLinks{
        site
        url
      }
      title {
        romaji
        english
        native
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
      studios {
        nodes{
          name
        }
      }
      recommendations{
        edges{
          node{
            mediaRecommendation{
              title {
                romaji
              }
              coverImage{
                medium
                large
              }
              popularity
              genres
            }
          }
        }
      }
      genres
      season
      seasonYear
      type
      popularity
      format
      averageScore
      status
      episodes
      duration
      isAdult
      genres
      tags {
        name
        rank
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
