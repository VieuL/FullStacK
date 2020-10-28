import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';


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
            src="http://www.openstreetmap.org/export/embed.html?bbox=2.301163673400879%2C48.820484866660514%2C2.349057197570801%2C48.83749229606369&layer=mapnik&marker=48.82898930294263%2C2.32511043548584" >
            </iframe>
        </div>
    </div>
    </div>
    <img src = "https://www.blogangelio.ovh/wp-content/uploads/2017/03/5877a032cc3e8.35a3aaeb662bfd222e72443b23bd530b.jpeg"/>

    </div>

);  

    export default Home;