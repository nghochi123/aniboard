import React from "react";
import axios from "axios";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import CharacterPage from "../../components/large/CharacterPage/CharacterPage";

export default function Character({ pageData }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <CharacterPage data={pageData} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const idQuery = `
    query ($id: Int) {
        Character(id: $id){
          id
          name {
            full
            native
          }
          image {
            large
            medium
          }
          description
          gender
          dateOfBirth {
            year
            month
            day
          }
          age
          siteUrl
          media(type:ANIME){
            edges{
              node{
                  id
                  popularity
                  genres
                  coverImage{
                    medium
                    large
                  }
                title {
                  romaji
                }
              }
            }
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
      pageData = res.data.data.Character;
    })
    .catch((error) => (pageData = error));
  return {
    props: {
      pageData: JSON.parse(JSON.stringify(pageData)),
    },
  };
}
