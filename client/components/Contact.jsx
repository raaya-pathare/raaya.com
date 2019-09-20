import React from 'react'
import { Grid, TextField, Button, Typography } from '@material-ui/core'
import * as emailjs from 'emailjs-com'
import Typing from 'react-typing-animation'

class Contact extends React.Component {

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

    styles = {
        textField: {
            width: '35vw',
            marginBottom: '1.5em'
        }
    }

    render() {
        return (
            <form>
            <Grid container
                style={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Grid container
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '35vw'
                    }}>
                    <Grid item style={{ display: 'flex', justifyContent: 'center'}}>
                        <Typography style={{
                            fontFamily: 'Hammersmith One, sans-serif',
                            fontSize: '10em',
                            letterSpacing: '-0.1em'
                        }}>
                            <Typing hideCursor={true} speed={120}>
                            Contact.
                            </Typing>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <form autocomplete="off">
                        <TextField 
                        InputProps={{
                            style: { fontSize: '1.2em', fontFamily: 'Sorts Mill Goudy, serif', width: '35vw', marginBottom: '2em' }
                          }}
                        required name="name" value={this.state.name} onChange={this.handleChange}
                        label="Name" />

                        <TextField
                        InputProps={{
                            style: { fontSize: '1.2em', fontFamily: 'Sorts Mill Goudy, serif', width: '35vw', marginBottom: '2em' }
                          }}
                        required name="email" value={this.state.email} onChange={this.handleChange} label="Email" autocomplete="none"/>

                        <TextField
                        InputProps={{
                            style: { fontSize: '1.2em', fontFamily: 'Sorts Mill Goudy, serif', width: '35vw', marginBottom: '2em' }
                          }}
                        required name="confEmail" value={this.state.confEmail} onChange={this.handleChange} label="Confirm email" />

                        {this.state.emailError &&
                        <Typography style={{ fontFamily: 'Hammersmith One, sans-serif', color: 'red' }}>
                            Email addresses do not match. Please check and re-enter.
                        </Typography>}

                        <TextField
                        InputProps={{
                            style: { fontSize: '1.2em', fontFamily: 'Sorts Mill Goudy, serif', width: '35vw', marginBottom: '2em' }
                          }}
                        required name="message" multiline={true} rows={7} value={this.state.message} onChange={this.handleChange} label="Message" />
                        <br />
                        <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button style={{ color: '#A100FF', fontFamily: 'Hammersmith One, sans-serif' }} type="submit" value="submit" onClick={this.handleSubmit} name="submit">
                        Submit Message
                        </Button>
                        </Grid>
                        <br />

                        {this.state.confirmation && 
                        <Typography style={{ fontFamily: 'Hammersmith One, sans-serif', color: 'red' }}>
                            Message sent successfully.
                        </Typography>}

                        {this.state.sendingError &&
                        <Typography style={{ fontFamily: 'Hammersmith One, sans-serif', color: 'red' }}>
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

export default Contact
