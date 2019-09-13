import { makeStyles } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import image from '../images/background.jpg'


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
        top: '8%',
        left: '5%'
    },
    helloIm: {
        fontSize: '200px',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400,
        letterSpacing: '-0.12em',
        wordSpacing: '-10px'
    },
    raaya: {
        fontSize: '200px',
        fontFamily: 'Hammersmith One, sans-serif',
        marginTop: '17px',
        wordSpacing: '100px',
        letterSpacing: '-0.1em',
        color: '#A100FF'
    },
    iAmA: {
        fontSize: '200px',
        lineHeight: '50px',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400,
        letterSpacing: '-0.07em',
    },
    iconContainer: {
        height: '50px',
        flexDirection: 'row',
        width: '100vw',
        marginLeft: '7vw',
        marginBottom: '20px',
        alignSelf: 'flex-end',
    },
    typedText: {
        fontFamily: 'Sorts Mill Goudy, serif',
        fontSize: '170px',
        color: '#A100FF',
        position: 'absolute',
        left: '1%',
        top: '103%'
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
        textDecoration: 'none'
    },
    icon: {
        color: '#A100FF',
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
            flexDirection: 'column'
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
            fontSize: '2em'
        },
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#A100FF',
        }
    },
    menuItemContact: {
        fontFamily: 'Montserrat, sans-serif',
        transition: 'all 2s',
        [theme.breakpoints.down('md')]: { // eslint-disable-line no-useless-computed-key
            fontSize: '2em'
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
