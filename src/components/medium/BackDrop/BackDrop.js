import React from 'react'
import * as styles from './BackDrop.module.css';

export default function BackDrop({image}) {
    return (
        <img src={'https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg'} className={styles.backdrop}/>
    )
}
