import React from 'react';
import './App.css';
//import logo from "./logo.svg";
import './home.css';
import Product from './Product.js';
function Home()
{
  return(
   <div className="home">
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/2020/August/Medh_Alexa_GW_1500x600._CB405585145_.jpg" alt="home_image" className="home_image" />  
    <div className="home_row">
    <Product id='2341' title='Handbag 1'price='200' rating='5'  image='https://i.imgur.com/xdbHo4E.png'/>
    <Product id='2342' title='Handbag 2'price='200' rating='5'  image='https://i.imgur.com/xdbHo4E.png'/>
    </div>
    <div className="home_row_1">
    <Product id='2343' title='Handbag 3'price='200' rating='5'  image='https://i.imgur.com/xdbHo4E.png'/>
    <Product id='2344' title='Handbag 4'price='200' rating='5'  image='https://i.imgur.com/xdbHo4E.png'/>
    <Product id='2345' title='Handbag 5'price='200' rating='5'  image='https://i.imgur.com/xdbHo4E.png'/>
    </div>
    <div className="home_row_1">
    <Product id='2346' title='Handbag 6'price='200' rating='5'  image='https://i.imgur.com/xdbHo4E.png'/>
    </div>
  </div>
  );
}

export default Home;