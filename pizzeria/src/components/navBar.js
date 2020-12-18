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
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  }

}));

export default function ButtonAppBar(nbrR, UserID) {
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
      {/* ========================================== */}
      <MenuItem  onClick = {handleMobileMenuClose}>
      <NavLink to="/creation"
               activeStyle={{
                  color: "Black"
                  }}
                style = {{color: "Black", textDecoration: "none"}}
      >
        <IconButton aria-label="Création d'une pizza" color="inherit">
            <LocalPizzaIcon />
        </IconButton>
        Faire sa pizza
        </NavLink>
      </MenuItem>
      {/* ========================================== */}
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

          <Typography variant="h1" className={classes.title}>
            <NavLink to="/"
            style = {{color: "White", textDecoration: "none", textAlign: 'center'}}
            >

              <h1 style={{margin:'auto', textAlign:'left'}}>
              Tony pizza
              </h1>
            </NavLink>
          </Typography>

          {console.log(nbrR.UserID)}
          {nbrR.UserID != null ? 
          <div>
            <NavLink to="/historique"
               activeStyle={{
                  color: "white"
                  }}
                style = {{color: "white", textDecoration: "none"}}
          >
          <Button color="inherit">Mes commandes</Button>
          </NavLink>
          <Button color="inherit" href='./logout'>Déconnexion</Button>
          </div>:
          <div>
          <Button style =  {{color:"white"}} color="inherit" href='./creatAcount'>Nouveau client</Button>
          <Button style =  {{color:"white"}} color="inherit" href='./login'>Connexion</Button>
          </div>}
        </Toolbar>

      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
