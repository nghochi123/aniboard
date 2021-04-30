import React from 'react';
import {Grid} from '@material-ui/core';

export default function Footer() {
    return (
        <Grid container spacing={3} style={{ maxWidth: '100vw', margin: 0, display:'flex', justifyContent: 'center', textAlign:'center' }}>
            <Grid item xs={6} md={3}>
                Footer
            </Grid>
            <Grid item xs={6} md={3}>
                Footer
            </Grid>
        </Grid>
    )
}
