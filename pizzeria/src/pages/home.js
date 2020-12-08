import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
// C'est la page d'accueil du site, nous retrouvons ici l'hitoire de la pizzeria et la carte

const Home = () => (    

  <div>
    <h1>Bienvenu chez votre pizzaïolo préférée</h1>
    <br/>
    <div class ="container">
    <div class = 'row'>
        <div class="col-6" align="justify">
        Praesent posuere orci mattis dictum egestas. Duis consectetur nisl libero, sed tincidunt ante accumsan in. Vivamus venenatis magna dui, nec interdum diam volutpat id. Aliquam erat ligula, commodo vel augue ut, blandit tincidunt enim. Vestibulum ante ipsum primis in 
        faucibus orci luctus et ultrices posuere cubilia curae; Duis at sagittis lorem. 
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
        Nullam imperdiet volutpat accumsan. Phasellus accumsan ante id nisl condimentum fermentum. 
        Quisque id lacus ac urna convallis auctor vel ac odio. 
        </div>
        <div class = 'col-lg-6'>
            <iframe
            width="500"
            height="200"
            src="http://www.openstreetmap.org/export/embed.html?bbox=2.301163673400879%2C48.820484866660514%2C2.349057197570801%2C48.83749229606369&layer=mapnik&marker=48.82898930294263%2C2.32511043548584" >
            </iframe>
        </div>
    </div>
    <br/><br/>
    <div class = 'row'>
        <div class="col-6">
            <img  width="500"
            height="200" src = "https://res.cloudinary.com/serdy-m-dia-inc/image/upload/f_auto/fl_lossy/q_auto:eco/x_1,y_493,w_4926,h_2771,c_crop/w_1200,h_630,c_fill/v1537365505/foodlavie/prod/recettes/pate-a-pizza-3a9a02df"></img>
        </div>
        <div class="col-6" align="justify">
        <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum, velit non lobortis ultrices, dui dolor tincidunt dolor, vel mollis ante felis et ante. Fusce mollis ex risus, vel tempor odio gravida in. Phasellus viverra quis erat quis dictum. Cras aliquam porttitor velit. Fusce euismod arcu erat. Donec vel consectetur felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In in vestibulum sem.    </div>

    </div>

    <br/><br/>
    <div class = 'row'>
        <div class="col-6" align="justify">
            <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum, velit non lobortis ultrices, dui dolor tincidunt dolor, vel mollis ante felis et ante. Fusce mollis ex risus, vel tempor odio gravida in. Phasellus viverra quis erat quis dictum. Cras aliquam porttitor velit. Fusce euismod arcu erat. Donec vel consectetur felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In in vestibulum sem.    </div>
        <div class="col-6">
            <img  width="500"
            height="200" src = "https://www.actu-environnement.com/images/illustrations/news/33111_large.jpg"></img>
        </div>

    </div>
    </div>
</div>
);

    export default Home;