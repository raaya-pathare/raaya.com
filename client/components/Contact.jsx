import React from 'react'
import { Grid, TextField, Button, Typography, withStyles } from '@material-ui/core'
import * as emailjs from 'emailjs-com'
import Typing from 'react-typing-animation'

const styles = theme => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '35vw',
    },
    headingContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    heading: {
        fontFamily: 'Hammersmith One, sans-serif',
        fontSize: '10em',
        letterSpacing: '-0.1em'
    },
    buttonContainer: {
        display: 'flex', 
        justifyContent: 'center'
    },
    button: {
        color: '#A100FF', 
        fontFamily: 'Hammersmith One, sans-serif'
    },
    userMessage: {
        fontFamily: 'Hammersmith One, sans-serif', 
        color: 'red'
    }
})
const inputProps = {
    style: { 
        fontSize: '1.2em', 
        fontFamily: 'Sorts Mill Goudy, serif', 
        width: '35vw', 
    }
}
const inputlabelprops = {
    style: { 
        fontFamily: 'Sorts Mill Goudy, serif', 
        color: '#b07009' 
    }
}


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
        return (
            <form>
                <Grid container className={classes.root}>
                    <Grid container className={classes.content}>
                        <Grid item className={classes.headingContainer}>
                            <Typography className={classes.heading}>
                                <Typing hideCursor={true} speed={120}>
                                    Contact.
                                </Typing>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <form autoComplete="off">
                                <TextField
                                    InputProps={{inputProps}}
                                    InputLabelProps={{inputlabelprops}}
                                    required name="name" value={this.state.name} onChange={this.handleChange}
                                    label="Name" autoComplete="none"/>

                                <TextField
                                    InputProps={{inputProps}}
                                    InputLabelProps={{inputlabelprops}}
                                    required name="email" value={this.state.email} onChange={this.handleChange} label="Email" autoComplete="none" />

                                <TextField
                                    InputProps={{inputProps}}
                                    InputLabelProps={{inputlabelprops}}
                                    required name="confEmail" value={this.state.confEmail} onChange={this.handleChange} label="Confirm email" autoComplete="none" />

                                {this.state.emailError &&
                                    <Typography className={classes.userMessage}>
                                        Email addresses do not match. Please check and re-enter.
                                    </Typography>}

                                <TextField
                                    InputProps={{inputProps}}
                                    InputLabelProps={{inputlabelprops}}
                                    required name="message" multiline={true} rows={7} value={this.state.message} onChange={this.handleChange} label="Message" autoComplete="none"/>
                                <br />
                                <Grid className={classes.buttonContainer}>
                                    <Button className={classes.button} type="submit" value="submit" onClick={this.handleSubmit} name="submit">
                                        Submit Message
                                    </Button>
                                </Grid>
                                <br />

                                {this.state.confirmation &&
                                    <Typography className={classes.userMessage}>
                                        Message sent successfully.
                                    </Typography>}

                                {this.state.sendingError &&
                                    <Typography className={classes.userMessage}>
                                        Unfortunately an error occurred. Please try again.
                                    </Typography>}
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default withStyles(styles)(HigherOrderComponent)
