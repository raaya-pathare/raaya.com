import React from 'react'
import { Container, Typography, Paper } from '@material-ui/core'
import { HomeStyles } from '../style/muiStyles'


const Home = (props) => {
    const classes = HomeStyles(props)
    return (
        <>
            <Container className={classes.root}>
                {/* <Paper className={classes.backgroundImage}> */}
                <Container className={classes.textBox}>
                    <Typography>
                        Hello, I'm Raaya. 
                    </Typography>
                    <Typography>
                        I am a Full Stack Web Developer. 
                    </Typography>
                </Container>
                {/* </Paper> */}
            </Container>
        </>
    )
}

export default Home