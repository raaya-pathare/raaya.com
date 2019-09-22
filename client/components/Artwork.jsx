import React from 'react'
import { Grid, Typography, Slide } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import Typing from 'react-typing-animation'

import { artworkStyles } from '../style/muiStyles'
import data from './images'
import Slider from './Slider'

const Artwork = (props) => {
    const classes = artworkStyles(props)

    return (
        <Grid container className={classes.root}>
            <Grid container className={classes.titlesContainer}>
                <Grid item>
                    <Typing hideCursor={true} speed={120}>
                    <Typography className={classes.heading}>
                        artwork. 
                    </Typography>
                    </Typing>
                </Grid>
                <Grid item className={classes.linkContainer}>
                    <a className={classes.link} href="https://www.instagram.com/by.raaya/?hl=en" target="_blank">instagram.com/by.raaya</a>
                </Grid>
            </Grid>
            <SwipeableViews>
            <div >
            <Grid container className={classes.content}>
                {data.map(el => {
                    return <Slider id={el.id} name={el.name} year={el.year} image={el.image}/>
                })}
            </Grid>
            </div>
            </SwipeableViews>
        </Grid>
    )
}

export default Artwork


{/* <Grid item className={classes.aboutArt}>
                    <Typography className={classes.about}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna niqi.
                    </Typography>
                </Grid> */}

    // aboutArt: {
    //     width: '20em',
    //     [theme.breakpoints.down('md')]: {
    //         width: '15em',
    //         marginRight: '10px'
    //     },
    // },
    // about: {
    //     fontFamily: 'Hammersmith One, sans-serif',
    //     fontSize: '1em',
    //     [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
    //         fontSize: '0.7em'
    //     },
    //     textAlign: 'justify'
    // },