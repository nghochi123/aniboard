import React, { useState } from "react";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import SearchSpinner from "../../components/small/SearchSpinner/SearchSpinner";
import SortByPage from "../../components/large/SortByPage/SortByPage";

export default function Search({ pageData, hasNextPage }) {
  const router = useRouter();
  const [cards, setCards] = useState(pageData);
  const [page, setPage] = useState(3);
  const [nextpage, setnextpage] = useState(hasNextPage);
  const { sort } = router.query;
  const onScroll = async () => {
    const sortQuery = `
    query ($page: Int) {
      Page(page: $page, perPage: 12){
        pageInfo {
          hasNextPage
        }
        media(sort: ${sort}, type: ANIME){
          id
          genres
          coverImage{
            large
          }
          title{
            romaji
          }
          popularity
        }
      }
    }
    `;
    const variables = {
      page: page,
    };
    await axios
      .post(
        "https://graphql.anilist.co/",
        {
          query: sortQuery,
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
        const pageData = res.data.data.Page.media;
        setnextpage(res.data.data.Page.pageInfo.hasNextPage);
        setCards([...cards, ...pageData]);
        setPage(page + 1);
      })
      .catch((error) => error);
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <InfiniteScroll
        loadMore={onScroll}
        hasMore={nextpage}
        loader={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SearchSpinner />
          </div>
        }
      >
        <SortByPage data={cards} sort={sort} />
      </InfiniteScroll>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { sort } = context.query;
  const sortQuery = `
      {
        Page(page: 1, perPage: 24){
            pageInfo {
              hasNextPage
            }
          media(sort: ${sort}, type: ANIME){
            id
            genres
            coverImage{
              large
            }
            title{
              romaji
            }
            popularity
          }
        }
      }
      `;
  let pageData;
  let nextpage;
  await axios
    .post(
      "https://graphql.anilist.co/",
      {
        query: sortQuery,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      nextpage = res.data.data.Page.pageInfo.hasNextPage;
      pageData = res.data.data.Page.media;
    })
    .catch((error) => {
      pageData = error;
      nextpage = error;
    });
  return {
    props: {
      pageData: JSON.parse(JSON.stringify(pageData)),
      hasNextPage: JSON.parse(JSON.stringify(nextpage)),
    },
  };
}
