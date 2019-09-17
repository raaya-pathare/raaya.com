import React from 'react'
import { Grid, Typography, Slide } from '@material-ui/core'
import Typing from 'react-typing-animation'


import { ProjectsStyles } from '../style/muiStyles'

const Projects = (props) => {
    const classes = ProjectsStyles(props)
    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.headingContainer}>
                <Typography className={classes.heading}>
                    <Typing
                    hideCursor={true}
                    speed={90}>
                        selected work.
                    </Typing>
                </Typography>
            </Grid>
            <Slide direction="up" in={true} timeout={1300} mountOnEnter unmountOnExit>
            <Grid container className={classes.WBContainer}>
                <Grid item className={classes.WBphoto}>
                    
                </Grid >
                <Grid item className={classes.WBinfo}>
                    <Typography className={classes.title}>
                        watch better. 
                    </Typography>
                    <br />
                    <Typography className={classes.subheading}>
                        A diverse database for the conscious movie consumer.
                    </Typography>
                    <br />
                    <Typography className={classes.bodytext}>
                        With watch better, users can browse a vast list of films, filtering through five different diversity tests. Users can also search for and receive information on films, test their favourites to see how they fare against our tests and create an account, allowing them to save their favourites on a watchlist for the next login. 
                    </Typography>
                    <br/>
                    <Typography className={classes.bodytext2}>
                        ui design / ux design / front end development
                    </Typography>
                </Grid >
            </Grid>
            </Slide>
        </Grid>
    )
}

export default Projects