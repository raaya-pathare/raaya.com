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
        keys: {
            0: "xs",
            1: "sm",
            2: "md",
            3: "lg",
            4: "xl",
        }
    }
})

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
        textDecoration: 'none'
    },
    nameLink: {
        textDecoration: 'none',
        color: '#A100FF'
    },
    icon: {
        color: '#A100FF',
    },
    menuContainer: {
        display: 'flex',
    },
    menu: {
        width: '700px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '& .MuiMenuItem-root': {
            fontSize: '1rem',
            marginTop: '-25px',
        },
    },
    menuItem: {
        fontFamily: 'Montserrat, sans-serif',
        transition: 'all 2s',
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
        color: 'black',
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
