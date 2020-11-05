import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { NavLink, Link } from "react-router-dom";
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }

}));

export default function ButtonAppBar(nbrR) {
  const nbr = nbrR.nbrR.length;
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };



  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open= {isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onTouchTap={() => {this.handleClose() }} 
      onClick = {handleMobileMenuClose}
      >
      <NavLink to="/carte-pizza"
      activeStyle={{
        color: "Black"
      }}
      style = {{color: "Black", textDecoration: "none"}}
      >

        <IconButton aria-label="Voir la carte" color="inherit">
            <RestaurantMenuIcon/>
        </IconButton>
        La carte
      </NavLink>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label="Création d'une pizza" color="inherit">
            <LocalPizzaIcon />
        </IconButton>
        <p>Faire sa pizza</p>
      </MenuItem>

      <MenuItem onClick = {handleMobileMenuClose}>
      <NavLink to="/panier"
      activeStyle={{
        color: "Black"
      }}
      style = {{color: "Black", textDecoration: "none"}}
      >
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
            <Badge badgeContent={nbr} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
        </IconButton>
        Mon panier
        </NavLink>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar >
        <div className={classes.sectionMobile}>
        <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
        >
            <MenuIcon />
          </IconButton>
          </div>

          <Typography variant="h6" className={classes.title}>
            <NavLink to="/"
            style = {{color: "White", textDecoration: "none"}}
            >
            <h1>
            Tony pizza
            </h1>
            </NavLink>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
