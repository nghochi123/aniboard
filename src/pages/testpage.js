import React from 'react'
import Layout from '../layouts/Layout';
import {Typography} from '@material-ui/core';
import BannerCard from '../components/medium/BannerCard/BannerCard';
import Slider from '../components/medium/Slider/Slider';

const data = JSON.parse(`{
  "data": {
    "Page": {
      "media": [
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx103632-XRXP3uB17FMg.jpg"
          },
          "averageScore": 69,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/103632-N4ssExnvLw74.jpg",
          "title": {
            "romaji": "Kumo desu ga, Nani ka?"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx21-tXMN3Y20PIL9.jpg"
          },
          "averageScore": 85,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
          "title": {
            "romaji": "One Piece"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx113950-Yn7h0o1yD61j.jpg"
          },
          "averageScore": 67,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113950-NwcTryOMumKh.jpg",
          "title": {
            "romaji": "SSSS.DYNAZENON"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx117448-bsPgVDD85sjB.jpg"
          },
          "averageScore": 70,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/117448-zkxeZbaObKUZ.jpg",
          "title": {
            "romaji": "Isekai Maou to Shoukan Shoujo no Dorei Majutsu Ω"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx112151-1qlQwPB1RrJe.png"
          },
          "averageScore": 87,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112151-eHCBz19nf2yC.jpg",
          "title": {
            "romaji": "Kimetsu no Yaiba: Mugen Ressha-hen"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx113415-979nF8TZP2xC.jpg"
          },
          "averageScore": 88,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
          "title": {
            "romaji": "Jujutsu Kaisen"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx11061-sIpBprNRfzCe.png"
          },
          "averageScore": 90,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg",
          "title": {
            "romaji": "Hunter x Hunter (2011)"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx101922-PEn1CTc93blC.jpg"
          },
          "averageScore": 85,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
          "title": {
            "romaji": "Kimetsu no Yaiba"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx119675-ziQ6Lb80zEx4.png"
          },
          "averageScore": 67,
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/119675-7Iiy4tWlKGGd.jpg",
          "title": {
            "romaji": "SHAMAN KING (2021)"
          }
        },
        {
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx114535-y3NnjexcqKG1.jpg"
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

export default function testpage() {
    return (
        <div>
          <Layout>
          <Typography variant="h4">Trending Now</Typography>
            <BannerCard data={data}/>
          </Layout>
        </div>
    )
}
