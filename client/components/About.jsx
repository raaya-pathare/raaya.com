import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography, Box } from '@material-ui/core'
import { AboutStyles } from '../style/muiStyles'


const About = (props) => {
    const classes = AboutStyles(props)
    return (
        <Box className={classes.root}>
            <Box className={classes.background}>
                <Container className={classes.content}>
                    <Typography className={classes.aboutText}>
                        I'm passionate about well designed technology - if you are too, we'll get along. 
                        Web development allows me to be my most creative while also satisfying my desire to learn. 
                        On the weekend you'll find me at an easel, with my dog at a far away beach, or scoping out the best dumpling joint in Auckland. 
                        If you need a little more detail, check out my CV, or <Link to="/contact">get in touch.</Link>
                    </Typography>
                    <Typography className={classes.CVicon}>
                        <a href="../files/cv.pdf" target="_blank">Download</a>
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