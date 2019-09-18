import React from 'react'
import { Grid, Typography, Slide } from '@material-ui/core'

import { ProjectsStyles } from '../style/muiStyles' 

const Aspire = (props) => {
    const classes = ProjectsStyles(props)
    return (
        <Grid container className={classes.aspireContainer}>
            <Grid item className={classes.aspirePhoto}>
            
            </Grid>
            <Grid item className={classes.aspireInfo}>
            
            </Grid>
        </Grid>
    )
}

export default Aspire