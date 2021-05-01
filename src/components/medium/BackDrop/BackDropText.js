import React from 'react'
import { Typography } from '@material-ui/core'
import Tags from '../../small/Tags/Tags';
import * as styles from './BackDropText.module.css';

export default function BackDropText({ data }) {
    console.log(data);
    return (
        <div className={styles.backdrop}>
            <img src={data.coverImage.large} alt="image" className={styles.coverimage} />
            <div className={styles.text}>
                <Typography variant="h2">{data.title.romaji}</Typography>
                <Typography variant="body1">{data.season} {data.seasonYear}</Typography>
                <Typography variant="body1">Episodes: {data.episodes}</Typography>
                {data.tags.map(tag=>(
                    <Tags>{tag.name}</Tags>
                ))}

            </div>

        </div>
    )
}
