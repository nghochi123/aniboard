import React from "react";
import Layout from "../layouts/Layout";
import { Typography } from "@material-ui/core";
import BannerCard from "../components/medium/BannerCard/BannerCard";
import ScrollBar from "../components/medium/ScrollBar/ScrollBar";

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
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx16498-m5ZMNtFioc7j.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-m5ZMNtFioc7j.png"
          },
          "popularity": 398647,
          "title": {
            "romaji": "Shingeki no Kyojin"
          },
          "id": 16498
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx21459-oZMZ7JwS5Sxq.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21459-oZMZ7JwS5Sxq.jpg"
          },
          "popularity": 367104,
          "title": {
            "romaji": "Boku no Hero Academia"
          },
          "id": 21459
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1535-lawCwhzhi96X.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1535-lawCwhzhi96X.jpg"
          },
          "popularity": 360698,
          "title": {
            "romaji": "Death Note"
          },
          "id": 1535
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx101922-PEn1CTc93blC.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg"
          },
          "popularity": 335631,
          "title": {
            "romaji": "Kimetsu no Yaiba"
          },
          "id": 101922
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx11061-sIpBprNRfzCe.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11061-sIpBprNRfzCe.png"
          },
          "popularity": 333963,
          "title": {
            "romaji": "Hunter x Hunter (2011)"
          },
          "id": 11061
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx11757-Q9P2zjCPICq5.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx11757-Q9P2zjCPICq5.jpg"
          },
          "popularity": 312015,
          "title": {
            "romaji": "Sword Art Online"
          },
          "id": 11757
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21087-8WpMBeqsSVx8.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21087-8WpMBeqsSVx8.png"
          },
          "popularity": 309395,
          "title": {
            "romaji": "One Punch Man"
          },
          "id": 21087
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx20605-fmnHdfurM7m6.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20605-fmnHdfurM7m6.jpg"
          },
          "popularity": 300867,
          "title": {
            "romaji": "Tokyo Ghoul"
          },
          "id": 20605
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx5114-4CpuT7iWcZ37.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5114-4CpuT7iWcZ37.png"
          },
          "popularity": 298273,
          "title": {
            "romaji": "Hagane no Renkinjutsushi: Fullmetal Alchemist"
          },
          "id": 5114
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21856-vX1n54domqjJ.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21856-vX1n54domqjJ.png"
          },
          "popularity": 284429,
          "title": {
            "romaji": "Boku no Hero Academia 2"
          },
          "id": 21856
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20958-HuFJyr54Mmir.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20958-HuFJyr54Mmir.jpg"
          },
          "popularity": 278930,
          "title": {
            "romaji": "Shingeki no Kyojin 2"
          },
          "id": 20958
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21519-XIr3PeczUjjF.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21519-XIr3PeczUjjF.png"
          },
          "popularity": 272012,
          "title": {
            "romaji": "Kimi no Na wa."
          },
          "id": 21519
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20-E3YH5W6sz6H7.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20-E3YH5W6sz6H7.jpg"
          },
          "popularity": 270627,
          "title": {
            "romaji": "Naruto"
          },
          "id": 20
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx101759-NhSwxv7HY9y9.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101759-NhSwxv7HY9y9.jpg"
          },
          "popularity": 270104,
          "title": {
            "romaji": "Yakusoku no Neverland"
          },
          "id": 101759
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx20954-RYEF5mWglzV8.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20954-RYEF5mWglzV8.png"
          },
          "popularity": 260474,
          "title": {
            "romaji": "Koe no Katachi"
          },
          "id": 20954
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx100166-pypBDoozr2u0.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx100166-pypBDoozr2u0.png"
          },
          "popularity": 258991,
          "title": {
            "romaji": "Boku no Hero Academia 3"
          },
          "id": 100166
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx113415-979nF8TZP2xC.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113415-979nF8TZP2xC.jpg"
          },
          "popularity": 257638,
          "title": {
            "romaji": "Jujutsu Kaisen"
          },
          "id": 113415
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20755-q0b3Ok1cAbPd.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20755-q0b3Ok1cAbPd.jpg"
          },
          "popularity": 257001,
          "title": {
            "romaji": "Ansatsu Kyoushitsu"
          },
          "id": 20755
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20665-CnzR2zVpdxtR.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20665-CnzR2zVpdxtR.png"
          },
          "popularity": 253319,
          "title": {
            "romaji": "Shigatsu wa Kimi no Uso"
          },
          "id": 20665
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx9253-7pdcVzQSkKxT.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9253-7pdcVzQSkKxT.jpg"
          },
          "popularity": 252961,
          "title": {
            "romaji": "Steins;Gate"
          },
          "id": 9253
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
        <ScrollBar data={popularData} />
        <Typography variant="h5" style={{ margin: "1.5rem" }}>
          All time favorites
        </Typography>
        <ScrollBar data={popularData} />
        <Typography variant="h5" style={{ margin: "1.5rem" }}>
          Best rated
        </Typography>
        <ScrollBar data={popularData} />
      </Layout>
    </div>
  );
}
