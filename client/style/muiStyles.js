import { makeStyles } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'


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
        justifyContent: 'space-between',
        marginTop: '25px',
        // backgroundColor: theme.palette.background.main
    },
    name: {
        color: 'black',
        fontFamily: 'Montserrat, sans-serif'
    },
    icon: {
        color: 'blue'
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