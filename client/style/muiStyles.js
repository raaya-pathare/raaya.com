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

export const NavStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100vw',
        justifyContent: 'space-between',
        marginTop: '25px',
        backgroundColor: '#fef8f8',
        position: 'fixed'
    },
    name: {
        color: 'black',
        fontFamily: 'Sorts Mill Goudy, serif',
        fontSize: '18px'
    },
    icon: {
        color: '#A100FF',
    },
    menuContainer: {
        display: 'flex',
    },
    menu: {
        width: '600px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '& .MuiMenuItem-root': {
            fontSize: '1rem',
            marginTop: '-5px',
        },
    },
    menuItem: {
        fontFamily: 'Montserrat, sans-serif'
    }
}))
