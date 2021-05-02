import React from "react";
import Layout from "../layouts/Layout";
import { Typography } from "@material-ui/core";
import BannerCard from "../components/medium/BannerCard/BannerCard";
import ScrollBar from "../components/medium/ScrollBar/ScrollBar";
import ScrollCard from '../components/medium/ScrollCard/ScrollCard';

const trendingData = JSON.parse(`{
  "data": {
    "Page": {
      "media": [
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx112151-1qlQwPB1RrJe.png"
          },
          "averageScore": 87,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112151-eHCBz19nf2yC.jpg",
          "title": {
            "romaji": "Kimetsu no Yaiba: Mugen Ressha-hen"
          },
          "id": 112151
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx21-tXMN3Y20PIL9.jpg"
          },
          "averageScore": 85,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
          "title": {
            "romaji": "One Piece"
          },
          "id": 21
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx103632-XRXP3uB17FMg.jpg"
          },
          "averageScore": 69,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/103632-N4ssExnvLw74.jpg",
          "title": {
            "romaji": "Kumo desu ga, Nani ka?"
          },
          "id": 103632
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx122348-FawMIyUnMDW5.jpg"
          },
          "averageScore": 74,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/122348-8pE1A49IDx2A.jpg",
          "title": {
            "romaji": "Mashiro no Oto"
          },
          "id": 122348
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx113415-979nF8TZP2xC.jpg"
          },
          "averageScore": 88,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
          "title": {
            "romaji": "Jujutsu Kaisen"
          },
          "id": 113415
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx120859-420ZuJhi9Rug.jpg"
          },
          "averageScore": 67,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/120859-xTEIbr5Y7A38.jpg",
          "title": {
            "romaji": "Shakunetsu Kabaddi"
          },
          "id": 120859
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx114535-y3NnjexcqKG1.jpg"
          },
          "averageScore": 84,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114535-oEOG8aHBp5dw.jpg",
          "title": {
            "romaji": "Fumetsu no Anata e"
          },
          "id": 114535
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx117460-46JbftfHSXoc.jpg"
          },
          "averageScore": 79,
          "bannerImage": null,
          "title": {
            "romaji": "Temppal"
          },
          "id": 117460
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx11061-sIpBprNRfzCe.png"
          },
          "averageScore": 90,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg",
          "title": {
            "romaji": "Hunter x Hunter (2011)"
          },
          "id": 11061
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx101922-PEn1CTc93blC.jpg"
          },
          "averageScore": 85,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
          "title": {
            "romaji": "Kimetsu no Yaiba"
          },
          "id": 101922
        }
      ]
    }
  }
}`).data.Page.media;

const popularData = JSON.parse(`{
  "data": {
    "Page": {
      "media": [
        {
          "coverImage": {
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-m5ZMNtFioc7j.png",
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx16498-m5ZMNtFioc7j.png"
          },
          "popularity": 400015,
          "title": {
            "romaji": "Shingeki no Kyojin"
          },
          "id": 16498,
          "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery"
          ]
        },
        {
          "coverImage": {
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21459-oZMZ7JwS5Sxq.jpg",
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx21459-oZMZ7JwS5Sxq.jpg"
          },
          "popularity": 368197,
          "title": {
            "romaji": "Boku no Hero Academia"
          },
          "id": 21459,
          "genres": [
            "Action",
            "Adventure",
            "Comedy"
          ]
        },
        {
          "coverImage": {
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1535-lawCwhzhi96X.jpg",
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1535-lawCwhzhi96X.jpg"
          },
          "popularity": 361955,
          "title": {
            "romaji": "Death Note"
          },
          "id": 1535,
          "genres": [
            "Mystery",
            "Psychological",
            "Supernatural",
            "Thriller"
          ]
        },
        {
          "coverImage": {
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg",
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx101922-PEn1CTc93blC.jpg"
          },
          "popularity": 337163,
          "title": {
            "romaji": "Kimetsu no Yaiba"
          },
          "id": 101922,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Mystery",
            "Supernatural"
          ]
        },
        {
          "coverImage": {
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11061-sIpBprNRfzCe.png",
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx11061-sIpBprNRfzCe.png"
          },
          "popularity": 335091,
          "title": {
            "romaji": "Hunter x Hunter (2011)"
          },
          "id": 11061,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy"
          ]
        },
        {
          "coverImage": {
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx11757-Q9P2zjCPICq5.jpg",
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx11757-Q9P2zjCPICq5.jpg"
          },
          "popularity": 312813,
          "title": {
            "romaji": "Sword Art Online"
          },
          "id": 11757,
          "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Romance"
          ]
        },
        {
          "coverImage": {
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21087-8WpMBeqsSVx8.png",
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21087-8WpMBeqsSVx8.png"
          },
          "popularity": 310288,
          "title": {
            "romaji": "One Punch Man"
          },
          "id": 21087,
          "genres": [
            "Action",
            "Comedy",
            "Sci-Fi",
            "Supernatural"
          ]
        },
        {
          "coverImage": {
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20605-fmnHdfurM7m6.jpg",
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx20605-fmnHdfurM7m6.jpg"
          },
          "popularity": 301826,
          "title": {
            "romaji": "Tokyo Ghoul"
          },
          "id": 20605,
          "genres": [
            "Action",
            "Drama",
            "Horror",
            "Mystery",
            "Psychological",
            "Supernatural"
          ]
        },
        {
          "coverImage": {
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5114-4CpuT7iWcZ37.png",
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx5114-4CpuT7iWcZ37.png"
          },
          "popularity": 299165,
          "title": {
            "romaji": "Hagane no Renkinjutsushi: Fullmetal Alchemist"
          },
          "id": 5114,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy"
          ]
        },
        {
          "coverImage": {
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21856-vX1n54domqjJ.png",
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21856-vX1n54domqjJ.png"
          },
          "popularity": 285271,
          "title": {
            "romaji": "Boku no Hero Academia 2"
          },
          "id": 21856,
          "genres": [
            "Action",
            "Adventure",
            "Comedy"
          ]
        }
      ]
    }
  }
}`).data.Page.media;

export default function testpage() {
  return (
    <div>
      <Layout>
        <Typography variant="h4" style={{ margin: "1.5rem" }}>
          Trending Now
        </Typography>
        <BannerCard data={trendingData} />
        <Typography variant="h5" style={{ margin: "1.5rem" }}>
          Currently Popular
        </Typography>
        <ScrollBar>
        {popularData.map(item=>(
            <ScrollCard key={item.title.romaji} data={item}/>
        ))}
        </ScrollBar>
        <Typography variant="h5" style={{ margin: "1.5rem" }}>
          All time favorites
        </Typography>
        <ScrollBar>
        {popularData.map(item=>(
            <ScrollCard key={item.title.romaji} data={item}/>
        ))}
        </ScrollBar>
        <Typography variant="h5" style={{ margin: "1.5rem" }}>
          Best rated
        </Typography>
        <ScrollBar>
        {popularData.map(item=>(
            <ScrollCard key={item.title.romaji} data={item}/>
        ))}
        </ScrollBar>
      </Layout>
    </div>
  );
}
