import React from 'react'
import { Grid, Typography, Slide, withStyles } from '@material-ui/core'
import Typing from 'react-typing-animation'

import data from './images'
import Slider from './Slider'

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    titlesContainer: {
        display: 'flex',
        width: '90vw',
        marginTop: '12vh',
        marginBottom: '4vh',
        ['@media only screen and (orientation: portrait)']: {
            marginTop: '17vh'
        },
        marginRight: '1%',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    }, 
    heading: {
        fontFamily: 'Hammersmith One, sans-serif',
        fontSize: '10em',
        ['@media only screen and (orientation: portrait)']: {
            fontSize: '12em'
        },
        letterSpacing: '-0.1em',
        height: '1.07em',
        marginRight: '0.3em'
    }, 
    linkContainer: {
        flexGrow: 1,
        textAlign: 'right'
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        fontFamily: 'Sorts Mill Goudy, serif',
        fontSize: '0.9em',
        ['@media only screen and (orientation: portrait)']: {
            fontSize: '1.4em'
        }
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'none',
        width: '90vw'
    }
})

class HigherOrderComponent extends React.Component {

    render() {
    const { classes } = this.props

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
            <Grid container className={classes.content}>
                {data.map(el => {
                    return <Slider id={el.id} name={el.name} year={el.year} image={el.image}/>
                })}
            </Grid>
        </Grid>
    )}
}

export default withStyles(styles)(HigherOrderComponent)


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