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
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx103632-XRXP3uB17FMg.jpg"
          },
          "averageScore": 69,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/103632-N4ssExnvLw74.jpg",
          "title": {
            "romaji": "Kumo desu ga, Nani ka?"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg"
          },
          "averageScore": 85,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
          "title": {
            "romaji": "One Piece"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113950-Yn7h0o1yD61j.jpg"
          },
          "averageScore": 67,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113950-NwcTryOMumKh.jpg",
          "title": {
            "romaji": "SSSS.DYNAZENON"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx117448-bsPgVDD85sjB.jpg"
          },
          "averageScore": 70,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/117448-zkxeZbaObKUZ.jpg",
          "title": {
            "romaji": "Isekai Maou to Shoukan Shoujo no Dorei Majutsu Ω"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112151-1qlQwPB1RrJe.png"
          },
          "averageScore": 87,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112151-eHCBz19nf2yC.jpg",
          "title": {
            "romaji": "Kimetsu no Yaiba: Mugen Ressha-hen"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113415-979nF8TZP2xC.jpg"
          },
          "averageScore": 88,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
          "title": {
            "romaji": "Jujutsu Kaisen"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11061-sIpBprNRfzCe.png"
          },
          "averageScore": 90,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg",
          "title": {
            "romaji": "Hunter x Hunter (2011)"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg"
          },
          "averageScore": 85,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
          "title": {
            "romaji": "Kimetsu no Yaiba"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx119675-ziQ6Lb80zEx4.png"
          },
          "averageScore": 67,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/119675-7Iiy4tWlKGGd.jpg",
          "title": {
            "romaji": "SHAMAN KING (2021)"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx114535-y3NnjexcqKG1.jpg"
          },
          "averageScore": 84,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114535-oEOG8aHBp5dw.jpg",
          "title": {
            "romaji": "Fumetsu no Anata e"
          }
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
          "title": {
            "romaji": "Shingeki no Kyojin"
          },
          "popularity": 398647,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx16498-m5ZMNtFioc7j.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-m5ZMNtFioc7j.png"
          }
        },
        {
          "title": {
            "romaji": "Boku no Hero Academia"
          },
          "popularity": 367104,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx21459-oZMZ7JwS5Sxq.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21459-oZMZ7JwS5Sxq.jpg"
          }
        },
        {
          "title": {
            "romaji": "Death Note"
          },
          "popularity": 360698,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1535-lawCwhzhi96X.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1535-lawCwhzhi96X.jpg"
          }
        },
        {
          "title": {
            "romaji": "Kimetsu no Yaiba"
          },
          "popularity": 335631,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx101922-PEn1CTc93blC.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg"
          }
        },
        {
          "title": {
            "romaji": "Hunter x Hunter (2011)"
          },
          "popularity": 333963,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx11061-sIpBprNRfzCe.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11061-sIpBprNRfzCe.png"
          }
        },
        {
          "title": {
            "romaji": "Sword Art Online"
          },
          "popularity": 312015,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx11757-Q9P2zjCPICq5.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx11757-Q9P2zjCPICq5.jpg"
          }
        },
        {
          "title": {
            "romaji": "One Punch Man"
          },
          "popularity": 309395,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21087-8WpMBeqsSVx8.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21087-8WpMBeqsSVx8.png"
          }
        },
        {
          "title": {
            "romaji": "Tokyo Ghoul"
          },
          "popularity": 300867,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx20605-fmnHdfurM7m6.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20605-fmnHdfurM7m6.jpg"
          }
        },
        {
          "title": {
            "romaji": "Hagane no Renkinjutsushi: Fullmetal Alchemist"
          },
          "popularity": 298273,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx5114-4CpuT7iWcZ37.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5114-4CpuT7iWcZ37.png"
          }
        },
        {
          "title": {
            "romaji": "Boku no Hero Academia 2"
          },
          "popularity": 284429,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21856-vX1n54domqjJ.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21856-vX1n54domqjJ.png"
          }
        },
        {
          "title": {
            "romaji": "Shingeki no Kyojin 2"
          },
          "popularity": 278930,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20958-HuFJyr54Mmir.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20958-HuFJyr54Mmir.jpg"
          }
        },
        {
          "title": {
            "romaji": "Kimi no Na wa."
          },
          "popularity": 272012,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21519-XIr3PeczUjjF.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21519-XIr3PeczUjjF.png"
          }
        },
        {
          "title": {
            "romaji": "Naruto"
          },
          "popularity": 270627,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20-E3YH5W6sz6H7.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20-E3YH5W6sz6H7.jpg"
          }
        },
        {
          "title": {
            "romaji": "Yakusoku no Neverland"
          },
          "popularity": 270104,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx101759-NhSwxv7HY9y9.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101759-NhSwxv7HY9y9.jpg"
          }
        },
        {
          "title": {
            "romaji": "Koe no Katachi"
          },
          "popularity": 260474,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx20954-RYEF5mWglzV8.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20954-RYEF5mWglzV8.png"
          }
        },
        {
          "title": {
            "romaji": "Boku no Hero Academia 3"
          },
          "popularity": 258991,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx100166-pypBDoozr2u0.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx100166-pypBDoozr2u0.png"
          }
        },
        {
          "title": {
            "romaji": "Ansatsu Kyoushitsu"
          },
          "popularity": 257001,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20755-q0b3Ok1cAbPd.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20755-q0b3Ok1cAbPd.jpg"
          }
        },
        {
          "title": {
            "romaji": "Jujutsu Kaisen"
          },
          "popularity": 256845,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx113415-979nF8TZP2xC.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113415-979nF8TZP2xC.jpg"
          }
        },
        {
          "title": {
            "romaji": "Shigatsu wa Kimi no Uso"
          },
          "popularity": 253319,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20665-CnzR2zVpdxtR.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20665-CnzR2zVpdxtR.png"
          }
        },
        {
          "title": {
            "romaji": "Steins;Gate"
          },
          "popularity": 252961,
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx9253-7pdcVzQSkKxT.jpg",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9253-7pdcVzQSkKxT.jpg"
          }
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
