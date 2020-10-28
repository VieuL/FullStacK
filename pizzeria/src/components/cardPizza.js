import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 100,
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
      height: 140,
    },
  });

export default function CardPizza({pizza, pizzas, setPizzas,reservation, addReservation}) {

    const classes = useStyles();


    const handleDelete = () => {

        // ... submit to API or something
        setPizzas(pizzas.filter((el) => el.id !== pizza.id));

    };

    const addP = () => {
      const reservationB = reservation.slice();
      reservationB.push({id: Math.ceil(Math.random() * 10000),Pizza:  pizza});
      addReservation(reservationB);
      console.log(reservation.length)
    }
    return(

        <Card className={classes.root} variant="outlined">
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pizza.image}
          title="Contemplative Reptile"
        />
          <CardContent>
          <Typography className={classes.titre} color="textSecondary" gutterBottom>
             {pizza.name}
          </Typography>

          <Typography variant="body2" component="p">
            {pizza.commentaire}
          </Typography>

          <Typography variant="body2" component="p">
            Prix : {pizza.prix} €
          </Typography>

          <Typography variant="body2" component="p">
            Ingredients : {pizza.ingredients.map(ingredient => (<span>{ingredient.name} </span>  ))}
          </Typography>

        </CardContent>
        </CardActionArea>
        <CardActions>

          <Button size="small" onClick={addP} variant="primary">Ajouter au panier </Button>

        </CardActions>

        </Card>


    );
}