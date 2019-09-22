import React from 'react'
import { Grid, Typography, Slide } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import Typing from 'react-typing-animation'

import { artworkStyles } from '../style/muiStyles'

const Artwork = (props) => {
    const classes = artworkStyles(props)

    return (
        <Grid container className={classes.root}>
            <Grid container className={classes.titlesContainer}>
                <Grid item>
                    <Typography className={classes.heading}>
                        artwork. 
                    </Typography>
                </Grid>
                {/* <Grid item className={classes.aboutArt}>
                    <Typography className={classes.about}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna niqi.
                    </Typography>
                </Grid> */}
                <Grid item className={classes.linkContainer}>
                    <a className={classes.link} href="https://www.instagram.com/by.raaya/?hl=en" target="_blank">instagram.com/by.raaya</a>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Artwork