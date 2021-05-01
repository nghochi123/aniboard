import React from 'react'
import { Typography } from '@material-ui/core'
import * as styles from './BackDropText.module.css';

export default function BackDropText({ data }) {
    return (
        <div className={styles.backdrop}>
            <img src={data.coverImage.large} alt="image" className={styles.coverimage} />
            <div className={styles.text}>
                <Typography variant="h2">{data.title.romaji}</Typography>
                <Typography variant="body1">{data.season} {data.seasonYear}</Typography>
                <Typography variant="body1">{data.type}</Typography>
                <Typography variant="body1">{data.format}</Typography>
                <Typography variant="body1">{data.status}</Typography>
                <Typography variant="body1">{data.episodes}</Typography>
                <Typography variant="body1">{data.duration}</Typography>
                <Typography variant="body1">{data.isAdult}</Typography>
                <Typography variant="body1">{data.source}</Typography>

            </div>

        </div>
    )
}
