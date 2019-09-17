import React from 'react'
import { Grid, Typography, Slide } from '@material-ui/core'
import { ProjectsStyles } from '../style/muiStyles';

const Untied = (props) => {
    const classes = ProjectsStyles(props)
    return (
        <Grid container className={classes.untiedContainer}>
            <Grid item className={classes.untiedInfo}>
            
            </Grid>
            <Grid item className={classes.untiedPhoto}>

            </Grid>
        </Grid>
    )
}

export default Untied