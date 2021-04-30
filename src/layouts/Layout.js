import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {Grid} from '@material-ui/core';

export default function Layout({children}) {
    return (
        <div>
          <div style={{minHeight: '90vh'}}>
            <Header/>
            <Grid container style={{justifyContent: 'center'}}>
              <Grid item xs={12} md={10} style={{margin: 10}}>
                {children}
              </Grid>
            </Grid>
          </div>
            <Footer/>
        </div>
    )
}
