import React from 'react'
import * as styles from './BackDrop.module.css';

export default function BackDrop({image}) {
    return (
        <div style={{background: `linear-gradient(#00000099, #00000099), url("${image}") no-repeat left top`, backgroundSize: 'cover'}} className={styles.backdrop}/>
    )
}
