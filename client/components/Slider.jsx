import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { artworkStyles } from '../style/muiStyles'

const Slider = ({ image, id, name, year }, ...props) => {
    const classes = artworkStyles(props)
    return (
    <Grid item className={classes.slide}
        style={{
            backgroundImage: `url(${image})`,
        }}>
        <Typography className={classes.id}>
            {id}
        </Typography>
        <Typography className={classes.name}>
            {name}
        </Typography>
        <Typography className={classes.year}>
            {year}
        </Typography>
    </Grid>
    )
}

export default Slider