import React from 'react'
import { Typography, Box } from '@material-ui/core'
import image from '../images/background.jpg'

const textArray = ['Web Developer.', 'UI Designer.', 'UX Designer.', 'Artist.'];

class Home extends React.Component {
    constructor() {
        super();
        this.state = { textIdx: 0 };
      }

      componentDidMount() {
        this.timeout = setInterval(() => {
          let currentIdx = this.state.textIdx;
          this.setState({ textIdx: currentIdx + 1 });
        }, 1500);
      }
    
      componentDidUnmount() {
        clearInterval(this.timeout);
      }

    render() {
        let textThatChanges = textArray[this.state.textIdx % textArray.length];
    return (
        <>
            <Box style = {{
                display: 'flex',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: '25%, 0%',
                height: '100vh',
                width: '100vw',
                justifyContent: 'center'
            }}>
                <Box >
                    <Box style={{
                        flexGrow: 1,
                        position: 'absolute',
                        top: '10%',
                        left: '5%'
                    }}>
                    <div style={{ display: 'flex' }}>
                        <Typography style={{
                            fontSize: '200px', 
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 400,
                            letterSpacing: '-0.07em',
                            wordSpacing: '-10px'}}>
                            Hello, I'm
                        </Typography>
                        <Typography style={{
                            fontSize: '200px', 
                            fontFamily: 'Hammersmith One, sans-serif',
                            marginTop: '17px',
                            wordSpacing: '100px',
                            letterSpacing: '-0.07em',
                            color: '#A100FF'
                        }}>
                            Raaya.
                        </Typography>
                        </div>
                        <Typography style={{
                            fontSize: '200px',
                            lineHeight: '50px',
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 400,
                            letterSpacing: '-0.07em',
                            }}>
                            I am a
                        </Typography>
                        <br/>
                        <br />
                            <Typography style={{
                                fontFamily: 'Sorts Mill Goudy, serif',
                                fontSize: '170px',
                                color: '#A100FF',
                                position: 'absolute',
                                left: '1%',
                                top: '103%'
                                }}>
                            {textThatChanges}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
}


export default Home

