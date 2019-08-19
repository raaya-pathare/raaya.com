import React from 'react'
import { NavStyles } from '../style/muiStyles'
import { Container, Typography, Button, Menu, MenuItem, Icon, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const Nav = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null)
    const classes = NavStyles(props)

    const StyledMenu = withStyles({
        paper: {
          border: 'none',
        },
      })(props => (
        <Menu
          elevation={0}
          style={{ width: '1000px' }}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          {...props}
        />
      ));

    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }

    return (
        <>
            <Container className={classes.root}>
                <div>
                    <Typography className={classes.name}>raaya pathare</Typography>
                </div>
                <Box>
                    <Button
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        onClick={handleClick}>
                        <Icon className={classes.icon}>menu</Icon>
                    </Button>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        className={classes.menuContainer}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                            <Container className={classes.menu}>
                            <MenuItem onClick={handleClose} className={classes.menuItem}>About</MenuItem>
                            <MenuItem onClick={handleClose} className={classes.menuItem}>Selected Projects</MenuItem>
                            <MenuItem onClick={handleClose} className={classes.menuItem}>Artwork</MenuItem>
                            <MenuItem onClick={handleClose} className={classes.menuItem}>Contact</MenuItem>
                            </Container>
                    </StyledMenu>
                </Box>
            </Container>
        </>
    )
}

export default Nav