import { makeStyles } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
// import styled, { keyframes } from 'styled-components'

import image from '../images/mountain.jpg'


export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fca10d'
        },
        secondary: {
            main: '#2327fa'
        },
        background: {
            main: '#2e2e2e'
        },
        font: '#fffdfa'
    },
    spacing: 8,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 700,
            lg: 1280,
            xl: 1920,
        }
    }
})

export const homeStyles = makeStyles(theme => ({
    background: {
        display: 'flex',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right bottom',
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        zIndex: '-1',
        overflow: 'hidden',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center'
    },
    allTextBox: {
        position: 'absolute',
        top: '13%',
        [theme.breakpoints.down('md')]: { // eslint-disable-line no-useless-computed-key
            top: '20%'
          },
        left: '5%',
        display: 'flex',
        flexDirection: 'column',
        width: '90vw',
        lineHeight: '1em'
    },
    helloIm: {
        fontSize: '200px',
        [theme.breakpoints.down('md' )]: {
            fontSize: '180px'
        },
        ['@media only screen and (orientation: landscape)']: {
            fontSize: '12vw'
        },
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400,
        letterSpacing: '-0.12em',
        wordSpacing: '-10px',
        height: '1em',
        lineHeight: '1em'
    },
    raaya: {
        fontSize: '200px',
        [theme.breakpoints.down('md')]: {
            fontSize: '180px'
        },
        ['@media only screen and (orientation: landscape)']: {
            fontSize: '12vw'
        },
        fontFamily: 'Hammersmith One, sans-serif',
        letterSpacing: '-0.1em',
        color: '#A100FF',
        height: '1em',
        lineHeight: '1em'
    },
    firstLine: {
        [theme.breakpoints.down('md')]: {
            height: '25em'
        },
        ['@media only screen and (orientation: landscape)']: {
            height: '12vw'
        },
    },
    iAmA: {
        fontSize: '200px',
        [theme.breakpoints.down('md')]: {
            fontSize: '180px'
        },
        ['@media only screen and (orientation: landscape)']: {
            fontSize: '12vw'
        },
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400,
        letterSpacing: '-0.07em',
        height: '1em',
        lineHeight: '1em'
    },
    typedText: {
        fontFamily: 'Sorts Mill Goudy, serif',
        fontSize: '170px',
        [theme.breakpoints.down('md')]: {
            fontSize: '120px'
        },
        ['@media only screen and (orientation: landscape)']: {
            fontSize: '10vw'
        },
        color: '#A100FF',
        marginTop: '0.3em',
        position: 'absolute',
        left: '1%',
        height: '1em',
        lineHeight: '1em'
    },
    iconContainer: {
        height: '50px',
        display: 'flex',
        width: '100vw',
        marginLeft: '4vw',
        marginBottom: '20px',
        [theme.breakpoints.down('md')]: {
            marginBottom: '80px',
            justifyContent: 'center'
        },
        ['@media only screen and (orientation: landscape)']: {
            marginBottom: '20px',
            justifyContent: 'flex-start'
        },
        alignSelf: 'flex-end',
    },
    icon: {
        height: '30px',
        width: '30px',
        [theme.breakpoints.down('md')]: {
            height: '60px',
            width: '60px',
            marginRight: '10px',
        },
        ['@media only screen and (orientation: landscape)']: {
            height: '30px',
            width: '30px'
        },
    }
}))

export const NavStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '95%',
        justifyContent: 'space-between',
        marginTop: '25px',
        position: 'fixed'
    },
    name: {
        color: 'black',
        fontFamily: 'Sorts Mill Goudy, serif',
        fontSize: '18px',
        [theme.breakpoints.down('md')]: { // eslint-disable-line no-useless-computed-key
            fontSize: '2em'
        },
        ['@media only screen and (orientation: landscape)']: {
            fontSize: '1.5em'
        },
        textDecoration: 'none'
    },
    button: {
        backgroundColor: '#FFFFFF1A'
    },
    nameLink: {
        textDecoration: 'none',
        color: '#A100FF'
    },
    icon: {
        color: '#A100FF',
        fontSize: '2.5em',
        [theme.breakpoints.down('md')]: { // eslint-disable-line no-useless-computed-key
            fontSize: '3em'
        },
    },
    menuContainer: {
        display: 'flex',
    },
    menu: {
        width: '700px',
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: { // eslint-disable-line no-useless-computed-key
            flexDirection: 'column',
        },
        ['@media only screen and (orientation: landscape)']: {
            flexDirection: 'row',
            width: '60vw'
        },
        justifyContent: 'space-between',
        '& .MuiMenuItem-root': {
            marginTop: '-25px',
        },
    },
    menuItem: {
        fontFamily: 'Montserrat, sans-serif',
        transition: 'all 2s',
        [theme.breakpoints.down('md')]: { // eslint-disable-line no-useless-computed-key
            fontSize: '1.7em'
        },
        ['@media only screen and (orientation: landscape)']: {
            fontSize: '1em'
        },
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#A100FF',
        }
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            color: '#A100FF',
        }
    },
    menuItemContact: {
        fontFamily: 'Montserrat, sans-serif',
        transition: 'all 2s',
        [theme.breakpoints.down('md')]: { // eslint-disable-line no-useless-computed-key
            fontSize: '1.7em'
        },
        ['@media only screen and (orientation: landscape)']: {
            fontSize: '1em'
        },
        [theme.breakpoints.up('lg')]: { // eslint-disable-line no-useless-computed-key
            color: 'white'
        },
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#A100FF',
        }
    }
}))

export const AboutStyles = makeStyles(theme => ({
    content: {
        width: '50%',
        marginTop: '8em',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('md')]: { // eslint-disable-line no-useless-computed-key
            alignItems: 'flex-end',
            marginTop: '12em',
          }
    },
    background: {
        backgroundImage: `url(${image})`,
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        top: '50%',
        justifyContent: 'center'
    },
    aboutTextContainer: {
        width: '470px',
        height: '250px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    aboutText: {
        fontSize: '20px',
        [theme.breakpoints.down('md')]: { // eslint-disable-line no-useless-computed-key
            fontSize: '30px',
            width: '550px'
          },
        width: '470px',
        height: '250px',
        margin: 'auto',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '600',
        wordSpacing: '1px',
        letterSpacing: '-0.05em',
    },
    aboutContainer: {
        textAlign: 'center',
        marginBottom: '5em',
        [theme.breakpoints.down('md')]: { // eslint-disable-line no-useless-computed-key
            alignItems: 'flex-end'
          }
    },
    aboutWord: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '280px',
        fontWeight: 600,
        color: 'white',
        letterSpacing: '-0.10em'
    },
    download: {
        width: '12em',
        height: '100px',
        [theme.breakpoints.down('md')]: { // eslint-disable-line no-useless-computed-key
            marginTop: '12em',
          },
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    downloadButton: {
        borderRadius: '50%',
        padding: '15px',
        // animation: `${bounce} 2s infinite`
    },
    CVicon: {
        fontSize: '50px',
        fontWeight: '800',
    },
    link: {
        textDecoration: 'none',
        color: '#A100FF'
    }
}))

// const webkitBounce = keyframes`
//     0%, 20%, 50%, 80%, 100% {
//         -webkit-transform: translateY(0);
//         transform: translateY(0); 
//     }
//     10% {
//         -webkit-transform: translateY(-1rem);
//         transform: translateY(-1rem);
//     }`

// const bounce = keyframes`
//     0%, 20%, 50%, 80%, 100% {
//         -webkit-transform: translateY(0);
//         transform: translateY(0); 
//     }
//     10% {
//         -webkit-transform: translateY(-1rem);
//         transform: translateY(-1rem); 
//     }`
