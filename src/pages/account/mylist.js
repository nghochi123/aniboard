import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import SearchSpinner from "../../components/small/SearchSpinner/SearchSpinner";
import MyListPage from "../../components/large/MyListPage/MyListPage";

export default function MyList() {
  const router = useRouter();
  const refresh = () => {
    router.replace(router.asPath);
  };
  const [ids, setIds] = useState([]);
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(3);
  const [nextpage, setnextpage] = useState();
  useEffect(async () => {
    await axios
      .get("/api/list")
      .then((res) => setIds(res.data))
      .catch((e) => {
        router.push("/account/login");
      });
    const idQuery = `
      query ($idlist: [Int]) {
        Page(page: 1, perPage: 24) {
          pageInfo {
            hasNextPage
          }
          media(id_in: $idlist, type: ANIME) {
            id
            genres
            coverImage{
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
    const variables = {
      idlist: ids,
    };
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
        const pageData = res.data.data.Page.media;
        setnextpage(res.data.data.Page.pageInfo.hasNextPage);
        setCards([...cards, ...pageData]);
      })
      .catch((error) => error);
  }, []);
  const onScroll = async () => {
    const idQuery = `
      query ($page: Int, $idlist: [Int]) {
        Page(page: $page, perPage: 12) {
          pageInfo {
            hasNextPage
          }
          media(id_in: $idlist, type: ANIME) {
            id
            genres
            coverImage{
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
    const variables = {
      page: page,
      idlist: ids
    };
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
        <MyListPage data={cards} />
      </InfiniteScroll>
      <Footer />
    </div>
  );
}
