import React from 'react'; 
import './Checkout.css';
import {useStateValue} from './StateProvider';
import Checkout_Product from './Checkout_product';
function Checkout()
{
  const [{basket}] = useStateValue();
  

  return (
    <div className="Checkout">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/2020/August/Medh_Alexa_GW_1500x600._CB405585145_.jpg" alt="ad" className="checkout__ad" />
      {
        basket?.length === 0 ? (
        <div className="Checkout_container">
         <h2> Your cart is empty </h2>
        </div>
      ): (
        <div className="Checkout_container">
          <h2>Your shoping basket </h2>
          {
            basket.map(item => (
            <Checkout_Product  
            id={item.id}
            title={item.title}
            image={item.image}
            rating ={item.rating}
            price={item.price}
            />
            
             ))
          }
        </div>
      )

      }
      </div>
      
  );
}
export default Checkout;