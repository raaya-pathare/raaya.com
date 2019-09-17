import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
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
            <Grid container className={classes.WBContainer}>
                <Grid item className={classes.WBphoto}>
                    
                </Grid >
                <Grid item className={classes.WBinfo}>

                </Grid >
            </Grid>
        </Grid>
    )
}

export default Projects