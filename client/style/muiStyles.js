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
