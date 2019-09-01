import React from 'react'
import { Link } from 'react-router-dom'
import { NavStyles } from '../style/muiStyles'
import { Container, Grow, Typography, Button, Menu, Icon, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const Nav = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [pressed, setPressed] = React.useState(false);
  const classes = NavStyles(props)

  const StyledMenu = withStyles({
    paper: {
      border: 'none',
      backgroundColor: 'transparent'
    },
  })(props => (
    <Menu
      elevation={0}
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth={false} className={classes.root}>
          <div>
            <Typography className={classes.name}><Link to="/">raaya pathare</Link>
            </Typography>
          </div>
          <Box>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              <Icon className={classes.icon} fontSize=""
              >menu</Icon>
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
                  style={{ transformOrigin: '0 0 0' }}
                  {...(pressed ? { timeout: 1800 } : {})}>
                  <Button onClick={handleClose} className={classes.menuItem}>About</Button>
                </Grow>
                <Grow
                  in={pressed}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(pressed ? { timeout: 1500 } : {})}
                >
                  <Button onClick={handleClose} className={classes.menuItem}>Selected Projects</Button>
                </Grow>
                <Grow
                  in={pressed}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(pressed ? { timeout: 1000 } : {})}
                >
                  <Button onClick={handleClose} className={classes.menuItem}>Artwork</Button>
                </Grow>
                <Grow
                  in={pressed}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(pressed ? { timeout: 500 } : {})}
                >
                  <Button onClick={handleClose} className={classes.menuItemContact}>Contact</Button>
                </Grow>
              </Container>
            </StyledMenu>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default Nav