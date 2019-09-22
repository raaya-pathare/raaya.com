import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { sliderStyles } from '../style/muiStyles'

const Slider = ({ image, id, name, year }, ...props) => {
    const classes = sliderStyles(props)
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