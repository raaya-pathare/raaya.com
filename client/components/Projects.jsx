import React from 'react'
import { Grid, Typography, Slide } from '@material-ui/core'
import Typing from 'react-typing-animation'
import WB from './WB'
import Untied from './Untied'


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
                <WB />
                <br />
                <br />
                <br />
                <Untied />
        </Grid>
    )
}

export default Projects