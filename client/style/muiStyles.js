import { makeStyles } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

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
    menuItemContact: {
        fontFamily: 'Montserrat, sans-serif',
        transition: 'all 2s',
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#A100FF',
        }
    }
}))
