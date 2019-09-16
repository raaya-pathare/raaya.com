import React from 'react'
import { Link } from 'react-router-dom'
import CV from '../files/cv.pdf'
import Typing from 'react-typing-animation'
import { Typography, Slide, Grid, Button, Icon, Tooltip, Fade } from '@material-ui/core'
import { AboutStyles } from '../style/muiStyles'
import styled, { keyframes } from 'styled-components'

const About = (props) => {
    const classes = AboutStyles(props)

    return (
            <Grid container className={classes.background}>
                <Grid 
                container
                className={classes.content}
                >
                    <Grid item className={classes.aboutTextContainer}>
                        <Slide in={true} direction="right" timeout={1300} mountOnEnter unmountOnExit>
                        <Typography className={classes.aboutText}>
                            "I'm passionate about well designed technology - if you are too, we'll get along.
                            Web development allows me to be my most creative while also satisfying my desire to learn.
                            On the weekend you'll find me at an easel, with my dog at a far away beach, or scoping out the best dumpling joint in Auckland.
                            If you need a little more detail download my CV below. Otherwise,  <Link className={classes.link} to="/contact">get in touch.</Link>"
                        </Typography>
                        </Slide>
                    </Grid>
                    <Grid item 
                    className={classes.download}>
                        <Slide in={true} direction="left" timeout={1300} mountOnEnter unmountOnExit>
                        <Button className={classes.downloadButton}>
                            <Tooltip 
                            title="Download" 
                            placement="top"
                            TransitionComponent={Fade}
                            >
                                <Icon className={classes.CVicon}><a href={CV} target="_blank"
                                style={{textDecoration: 'none', color: '#A100FF'}}
                                >arrow_downward</a></Icon>
                            </Tooltip>
                        </Button>
                        </Slide>
                    </Grid>
                </Grid>
                <Grid item xs={12}> 
                        <div className={classes.aboutContainer}>
                            <Typing  
                            hideCursor={true} 
                            className={classes.aboutWord} speed={200}>
                            <Typing.Delay ms={1300} />
                            about.
                        </Typing>
                        </div>
                </Grid>
            </Grid>
    )
}

export default About