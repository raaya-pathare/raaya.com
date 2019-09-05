import { makeStyles } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
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
    spacing: 8
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
        color: 'white',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#A100FF',
        }
    }
}))

export const AboutStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
    },
    background: {
        backgroundImage: `url(${image})`,
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom'
    },
    content: {
        position: 'absolute',
        top: '30%'
    },
    about: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '200px',
        fontWeight: 600,
        color: 'green',
        letterSpacing: '-0.12em'
    }
}))
