import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Typist from 'react-typist'
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
                    {/* <Typist 
                    cursor={{ hideWhenDone: true, hideWhenDoneDelay: 200 }}>
                        selected work.
                    </Typist> */}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Projects