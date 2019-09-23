import React from 'react'
import { Grid, Typography, Slide, withStyles } from '@material-ui/core'
import Typing from 'react-typing-animation'

import data from './images'
import Slider from './Slider'
import { artworkStyles } from '../style/muiStyles'

const Artwork = (props) => {
    const classes = artworkStyles(props)

    return (
        <Grid container className={classes.root}>
            <Grid container className={classes.headingContainer}>
                <Grid item>
                    <Typing hideCursor={true} speed={120}>
                    <Typography className={classes.heading}>
                        artwork. 
                    </Typography>
                    </Typing>
                </Grid>
                <hr className={classes.hr} />
            </Grid>
            <Slide direction="up" in={true} timeout={1200} mountOnEnter unmountOnExit>
            <Grid item className={classes.subheadingContainer}>
                <Typography className={classes.about}>
                    Freehand artwork executed with a variety of mediums including: ink, graphite, charcoal and watercolor. Hover or click on the images below for details, or click the link to my instagram on the right for more work.
                </Typography>
                <Grid item className={classes.linkContainer}>
                    <a className={classes.link} href="https://www.instagram.com/by.raaya/?hl=en" target="_blank">instagram.com/by.raaya</a>
                </Grid>
            </Grid>
            </Slide>
            <Slide direction="up" in={true} timeout={1300} mountOnEnter unmountOnExit>
            <Grid container className={classes.content}>
                {data.map(el => {
                    return <Slider id={el.id} name={el.name} year={el.year} image={el.image}/>
                })}
            </Grid>
            </Slide>
        </Grid>
    )
}


export default Artwork
