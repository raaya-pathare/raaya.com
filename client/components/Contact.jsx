import React from 'react'
import { Grid, TextField, Button, Typography, withStyles, Slide, Box, IconButton } from '@material-ui/core'
import * as emailjs from 'emailjs-com'
import Typing from 'react-typing-animation'

const styles = theme => ({
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        width: '35vw',
        marginTop: '3em',
        ['@media only screen and (orientation: portrait)']: {
            marginTop: '14em'
        },
    },
    textField: {
        width: '35vw',
        marginBottom: '2vh',
        ['@media only screen and (orientation: portrait)']: {
            width: '80vw'
        },
        '& :-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0px 1000px #fafafa inset'
          }
    },
    headingContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    heading: {
        fontFamily: 'Hammersmith One, sans-serif',
        fontSize: '10em',
        height: '1em',
        letterSpacing: '-0.1em',
    },
    subheading: {
        fontFamily: 'Sorts Mill Goudy, serif',
        fontSize: '1.1em',
        textAlign: 'justify',
        letterSpacing: '-0.05em',
        width: '54%',
        marginTop: '1.8em'
    },
    hr: {
        border: '0.5px solid black',
        height: '1px',
        width: '100%',
        marginBottom: '2.5em',
        marginTop: '1.5em'
    },
    buttonContainer: {
        display: 'flex', 
        justifyContent: 'center',
        marginTop: '-15px'
    },
    button: {
        color: 'black', 
        textTransform: 'capitalize',
        fontFamily: 'Hammersmith One, sans-serif',
        ['@media only screen and (orientation: portrait)']: {
            fontSize: '1.5em'
        },
    },
    userMessageContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    userMessage: {
        fontFamily: 'Hammersmith One, sans-serif', 
        color: '#A100FF',
        ['@media only screen and (orientation: portrait)']: {
            fontSize: '1.8em'
        },
    },
    iconContainer: {
        height: '50px',
        display: 'flex',
        width: '100vw',
        [theme.breakpoints.down('md')]: {
            marginBottom: '80px',
            justifyContent: 'center'
        },
        ['@media only screen and (orientation: landscape)']: {
            marginBottom: '20px',
            justifyContent: 'center'
        },
        alignSelf: 'flex-end',
    },
    icon: {
        height: '30px',
        width: '30px',
        [theme.breakpoints.down('md')]: {
            height: '50px',
            width: '50px',
            marginRight: '15px',
        },
        ['@media only screen and (orientation: landscape)']: {
            height: '30px',
            width: '30px'
        },
    }
})

class HigherOrderComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            confEmail: '',
            message: '',
            emailError: false,
            confirmation: false,
            sendingError: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let templateParams = {
            from_name: this.state.name,
            from_email: this.state.email,
            to_name: 'raaya.pathare7@gmail.com',
            message_html: this.state.message
        }
        if (this.state.email !== this.state.confEmail) {
            this.setState({
                emailError: true
            })
        } else {
            emailjs.send('gmail', 'portfolio_contact_form', templateParams, 'user_BakXnlA942EEymoG7yUrf')
                .then(res => {
                    console.log('SUCCESS!', res)
                    this.setState({
                        confirmation: true,
                        sendingError: false,
                        emailError: false
                    })
                }).catch(err => {
                    console.log('oops, something went wrong.', err)
                    this.setState({
                        sendingError: true,
                        emailError: false,
                        confirmation: false
                    })
                })
            this.setState({
                name: '',
                email: '',
                confEmail: '',
                message: '',
            })
        }
    }

    render() {
        const { classes } = this.props
        const inputProps = {
            style: { 
                fontSize: '1.2em', 
                fontFamily: 'Sorts Mill Goudy, serif'
            }
        }
        return (
                <Grid container className={classes.root}>
                    <Grid container className={classes.content}>
                        <Grid item className={classes.headingContainer}>
                            <Typography className={classes.heading}>
                                <Typing hideCursor={true} speed={120}>
                                    contact.
                                </Typing>
                            </Typography>
                            <Typography className={classes.subheading}>
                                    If you have a question, want to ask about a project or just want to say hello, don't hesitate to reach out.
                            </Typography>
                            <hr className={classes.hr} />
                        </Grid>
                        <Grid item>
                            <form>
                                <TextField
                                    className={classes.textField}
                                    InputProps={{inputProps}}
                                    InputLabelProps={{ style: {fontFamily: 'Hammersmith One, sans-serif', color: '#b07009', fontSize: '1em'
                                    } }}
                                    required name="name" value={this.state.name} onChange={this.handleChange}
                                    label="Name"/>

                                <TextField
                                    className={classes.textField}
                                    InputProps={{inputProps}}
                                    InputLabelProps={{ style: {fontFamily: 'Hammersmith One, sans-serif', color: '#b07009', fontSize: '1em'
                                    } }}
                                    required name="email" value={this.state.email} onChange={this.handleChange} label="Email" />

                                <TextField
                                    className={classes.textField}
                                    InputProps={{inputProps}}
                                    InputLabelProps={{ style: {fontFamily: 'Hammersmith One, sans-serif', color: '#b07009', fontSize: '1em'
                                    } }}
                                    required name="confEmail" value={this.state.confEmail} onChange={this.handleChange} label="Confirm email" />

                                {this.state.emailError &&
                                    <Typography className={classes.userMessage}>
                                        Email addresses do not match. Please check and re-enter.
                                    </Typography>}

                                <TextField
                                    className={classes.textField}
                                    InputProps={{inputProps}}
                                    InputLabelProps={{ style: {fontFamily: 'Hammersmith One, sans-serif', color: '#b07009', fontSize: '1em'
                                    } }}
                                    required name="message" multiline={true} rows={7} value={this.state.message} onChange={this.handleChange} label="Message"/>
                                <br />
                                <br />
                                <Grid item className={classes.userMessageContainer}>
                                {this.state.confirmation &&
                                    <Typography className={classes.userMessage}>
                                        Message sent successfully.
                                    </Typography>}

                                {this.state.sendingError &&
                                    <Typography className={classes.userMessage}>
                                        Unfortunately an error occurred. Please try again.
                                    </Typography>}
                                </Grid>
                                <br/>
                                <Grid className={classes.buttonContainer}>
                                    <Button className={classes.button} type="submit" value="submit" onClick={this.handleSubmit} name="submit">
                                        submit message
                                    </Button>
                                </Grid>
                                <br />
                            </form>
                        </Grid>
                    </Grid>
                    <Slide in={true} direction="right" timeout={1200}>
                    <Box className={classes.iconContainer}>
                        <a target="_blank" href="https://github.com/raaya-pathare">
                            <IconButton>
                                <svg className={classes.icon}
                                viewBox="0 0 438.549 438.549"
                                >
                                    <g
                                        id="g4">
                                        <path
                                            id="path2"
                                            d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365   c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63   c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996   c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136   c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559   c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559   c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997   c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851   c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136   c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41   c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126   c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817   c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994   c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849   c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24   c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979   c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146   c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995   c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906   C438.536,184.851,428.728,148.168,409.132,114.573z" />
                                    </g>
                                    <g
                                        id="g6">
                                    </g>
                                    <g
                                        id="g8">
                                    </g>
                                    <g
                                        id="g10">
                                    </g>
                                    <g
                                        id="g12">
                                    </g>
                                    <g
                                        id="g14">
                                    </g>
                                    <g
                                        id="g16">
                                    </g>
                                    <g
                                        id="g18">
                                    </g>
                                    <g
                                        id="g20">
                                    </g>
                                    <g
                                        id="g22">
                                    </g>
                                    <g
                                        id="g24">
                                    </g>
                                    <g
                                        id="g26">
                                    </g>
                                    <g
                                        id="g28">
                                    </g>
                                    <g
                                        id="g30">
                                    </g>
                                    <g
                                        id="g32">
                                    </g>
                                    <g
                                        id="g34">
                                    </g>
                                </svg>
                            </IconButton>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/raaya-pathare-422a14184/">
                            <IconButton>
                            <svg className={classes.icon} version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="30px" height="30px" viewBox="0 0 512.000000 512.000000"
                            >
                            <g transform="translate(-63.000000,582.000000) scale(0.125000,-0.125000)"
                            fill="#000000" stroke="none">
                            <path d="M2395 4614 c-314 -36 -525 -97 -766 -220 -211 -108 -370 -226 -539
                            -400 -386 -398 -583 -883 -583 -1439 0 -556 197 -1041 583 -1439 169 -174 328
                            -292 539 -400 414 -212 887 -277 1350 -185 858 171 1512 866 1636 1741 19 134
                            19 432 0 566 -147 1034 -1026 1793 -2062 1781 -70 -1 -141 -4 -158 -5z m-488
                            -900 c115 -55 169 -188 131 -318 -16 -55 -109 -148 -164 -164 -126 -37 -255
                            17 -317 133 -30 56 -30 173 0 230 27 52 100 119 144 133 83 26 128 23 206 -14z
                            m1405 -668 c153 -33 262 -115 328 -250 66 -131 69 -169 70 -738 l0 -498 -219
                            0 -220 0 -3 448 c-3 407 -5 451 -22 496 -26 68 -89 129 -148 144 -144 36 -275
                            -20 -329 -141 -24 -52 -24 -53 -27 -499 l-3 -448 -214 0 -215 0 0 730 0 730
                            215 0 215 0 0 -102 0 -103 33 40 c138 169 326 236 539 191z m-1302 -756 l0
                            -730 -220 0 -220 0 0 730 0 730 220 0 220 0 0 -730z"/>
                            </g>
                            </svg>
                            </IconButton>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/by.raaya/?hl=en">
                            <IconButton>
                            <svg className={classes.icon} version="1.0"
                            width="30px" height="30px" viewBox="0 0 582.000000 602.000000"
                            preserveAspectRatio="xMidYMid meet" style={{ borderRadius: '50%'}}>
                            <g transform="translate(-140.000000,710.000000) scale(0.170000,-0.170000)"
                            fill="#000000" stroke="none">
                            <path d="M2415 4648 c-635 -32 -1246 -358 -1634 -872 -450 -597 -571 -1371
                            -326 -2087 45 -131 156 -356 232 -474 305 -466 775 -804 1308 -940 201 -51
                            342 -68 560 -68 294 0 561 49 815 149 859 341 1410 1154 1410 2081 0 345 -76
                            676 -225 979 -116 235 -255 425 -451 614 -455 439 -1035 652 -1689 618z m735
                            -1058 c263 -38 466 -202 547 -443 l28 -82 0 -660 0 -660 -28 -80 c-62 -178
                            -177 -311 -329 -384 -151 -72 -154 -72 -858 -69 -623 3 -625 3 -695 27 -170
                            56 -321 181 -388 322 -73 152 -70 128 -75 789 -4 644 -1 686 48 822 82 225
                            282 381 535 418 74 11 1139 11 1215 0z"/>
                            <path d="M1930 3383 c-99 -17 -205 -72 -266 -141 -34 -38 -80 -137 -93 -200
                            -7 -35 -11 -249 -11 -635 0 -484 3 -592 15 -640 47 -180 168 -294 354 -333 63
                            -13 162 -15 650 -12 572 3 576 3 641 26 129 46 228 137 270 251 37 98 41 183
                            37 756 -4 596 -3 589 -61 704 -35 68 -108 142 -175 175 -106 54 -127 56 -756
                            54 -319 0 -591 -3 -605 -5z m1310 -208 c69 -36 94 -106 61 -179 -16 -38 -29
                            -51 -66 -67 -73 -32 -145 -8 -181 64 -33 63 4 159 71 187 32 14 84 11 115 -5z
                            m-576 -170 c188 -40 357 -176 436 -350 117 -257 34 -567 -194 -730 -255 -182
                            -579 -159 -794 57 -190 189 -235 461 -115 700 124 248 397 380 667 323z"/>
                            <path d="M2403 2792 c-102 -36 -186 -113 -232 -211 -23 -50 -26 -68 -26 -171
                            0 -107 2 -119 29 -175 40 -80 111 -149 194 -188 62 -29 75 -32 167 -32 125 1
                            191 24 269 96 122 111 164 266 116 423 -34 107 -104 187 -210 239 -57 27 -77
                            32 -160 34 -73 3 -107 -1 -147 -15z"/>
                            </g>
                            </svg>
                            </IconButton>
                        </a>
                    </Box>
                    </Slide>
                </Grid>
        )
    }
}

export default withStyles(styles)(HigherOrderComponent)
