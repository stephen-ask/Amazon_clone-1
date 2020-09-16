import React from 'react';
import './App.css';
//import logo from "./logo.svg";
import './product.css';
import {useStateValue} from './StateProvider';

function Product({id ,title,price, rating,image})
{
  const [{basket},dispatch] = useStateValue();
  
  const addtoBasket = ()=>{
dispatch({
type:'ADD_TO_BASKET',
item:{
  id:id,
  title:title,
  image:image,
  rating:rating,
  price:price
}
});
  };
  return(
              <div className="product">
                <div className="product_info">
                  <p className="product_title">{title}</p>
                  <p className="product__">
                  <small>$</small>
                  <strong>{price}</strong> </p>
                  <div className="product__rating">
                    {
                      Array(rating)
                      .fill()
                      .map((_)=>{ 
                         
                      return(<p>&#9733;</p>);
                      })
                      
                    }
                  </div>
                </div>
                <img src={image} alt="product_1" className="product_image" />
                <button className="cart_button" onClick={addtoBasket}> Buy now</button>
              </div>
  );
}

export default Product;