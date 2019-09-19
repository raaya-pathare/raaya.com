import React from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import * as emailjs from 'emailjs-com'

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
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
        emailjs.send('gmail', 'portfolio_contact_form', templateParams, 'user_BakXnlA942EEymoG7yUrf')
            .then(res => {
                console.log('SUCCESS!', res)
            })
        this.setState({
            name: '',
            email: '',
            message: ''
        })
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
                        width: '30vw'
                    }}>
                        <form>
                        <TextField
                        required
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        label="Name" />

                        <TextField
                        required
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        label="Email" />

                        <TextField
                        required
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        label="Message" />
                        <br />
                        <br />
                        <Button 
                        type="submit" 
                        value="submit"
                        onClick={this.handleSubmit}
                        name="submit">
                        submit message
                        </Button>
                        </form>
                </Grid>
            </Grid>
            </form>
        )
    }
}

export default Contact
