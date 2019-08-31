import React from 'react'
import { NavStyles } from '../style/muiStyles'
import { Container, Grow, Typography, Button, Menu, MenuItem, Icon, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const Nav = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [pressed, setPressed] = React.useState(false);
  const classes = NavStyles(props)

  const StyledMenu = withStyles({
    paper: {
      border: 'none',
      backgroundColor: '#fef8f8'
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
    setAnchorEl(event.currentTarget),
    setPressed(true)
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
              <Grow 
                in={pressed}
                style={{ transformOrigin: '0 0 0'}}
                {...(pressed ? { timeout: 1800 } : {})}>
                <MenuItem onClick={handleClose} className={classes.menuItem}>About</MenuItem>
              </Grow>
              <Grow
                in={pressed}
                style={{ transformOrigin: '0 0 0'}}
                {...(pressed ? { timeout: 1500 } : {})}
              >
                <MenuItem onClick={handleClose} className={classes.menuItem}>Selected Projects</MenuItem>
              </Grow>
              <Grow 
                in={pressed}
                style={{ transformOrigin: '0 0 0'}}
                {...(pressed ? { timeout: 1000 } : {})}
              >
              <MenuItem onClick={handleClose} className={classes.menuItem}>Artwork</MenuItem>
              </Grow>
              <Grow
                in={pressed}
                style={{ transformOrigin: '0 0 0'}}
                {...(pressed ? { timeout: 500 } : {})}
              >
              <MenuItem onClick={handleClose} className={classes.menuItem}>Contact</MenuItem>
              </Grow>
            </Container>
          </StyledMenu>
        </Box>
      </Container>
    </>
  )
}

export default Nav