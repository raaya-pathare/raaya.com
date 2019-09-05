import React from 'react'
import { Container, Typography, Box } from '@material-ui/core'
import { AboutStyles } from '../style/muiStyles'


const About = (props) => {
    const classes = AboutStyles(props)
    return (
        <Box className={classes.root}>
            <Box className={classes.background}>
                <Container>
                    <Typography className={classes.aboutText}>
                        about.
                    </Typography>
                    <Typography className={classes.CVicon}>
                        Download my CV!
                    </Typography>
                    <Typography className={classes.about}>
                        about.
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}

export default About