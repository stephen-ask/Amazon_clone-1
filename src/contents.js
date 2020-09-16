import React from 'react';
import './App.css';
//import bootstrap from './bootstrap.min.css';
function Contents() {
    return(
      
      <div className="contents">
        <div className="row">
          <div className="col-xs-4 product_cart ">
          
              <div className="product-card">
		<div className="badge">Hot</div>
		<div className="product-tumb">
			<img src="https://i.imgur.com/xdbHo4E.png" alt="img" />
		</div>
		<div className="product-details">
			<span className="product-catagory">Women,bag</span>
			<h4><a href="/">Women leather bag</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div className="product-bottom-details">
				<div className="product-price"><small>$96.00</small>$230.99</div>
				<div className="product-links">
					<a href="/"><i className="fa fa-heart"></i></a>
					<a href="/"><i className="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>
            {/*<img src="" />*/}
          </div>
          <div className="col-xs-4 product_cart">
          <h4>product 2</h4>
          </div>
          <div className="col-xs-4 product_cart">
          <h4>product 3</h4>
          </div>
        </div> 
      </div>
      );
}

export default Contents;
