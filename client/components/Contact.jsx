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

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Contact Form</title>
//     <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.0/dist/email.min.js"></script>
//     <script type="text/javascript">
//         (function(){
//            emailjs.init('YOUR_USER_ID');
//         })();
//     </script>
//     <script type="text/javascript">
//         window.onload = function() {
//             document.getElementById('contact-form').addEventListener('submit', function(event) {
//                 event.preventDefault();
//                 // generate the contact number value
//                 this.contact_number.value = Math.random() * 100000 | 0;
//                 emailjs.sendForm('contact_service', 'contact_template', this);
//             });
//         }
//     </script>
// </head>
// <body>
//     <form id="contact-form">
//         <input type="hidden" name="contact_number">
//         <label>Name</label>
//         <input type="text" name="user_name">
//         <label>Email</label>
//         <input type="email" name="user_email">
//         <label>Message</label>
//         <textarea name="message"></textarea>
//         <input type="submit" value="Send">
//     </form>
// </body>
// </html>

// [A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}

// handleSubmit = (e) => {
//     const templateId = 'portfolio_contact_form'
//     this.sendMessage(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
// }

// sendMessage = (variables) => {
//     const templateId = 'portfolio_contact_form'
//     window.email.js.send(
//         'gmail', templateId,
//         variables
//     ).then(res => {
//         console.log('email successfully sent!')
//     }).catch(err => console.log('not working fml', err))
// }



    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     const { name, email, message } = this.state

    //     let templateParams = {
    //         from_name: name,
    //         reply_to: email,
    //         to_name: 'raaya.pathare7@gmail.com',
    //         message_html: message
    //     }

    //     emailjs.send(
    //         'gmail',
    //         'portfolio_contact_form',
    //         templateParams,
    //         'user_BakXnlA942EEymoG7yUrf'
    //     )

    //     this.resetForm()
    // }

    // resetForm = () => {
    //     this.setState({
    //         name: '',
    //         email: '',
    //         message: ''
    //     })
    // }
