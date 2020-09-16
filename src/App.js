import React from 'react';
import Header from './header';
//import Contents from './contents'; 
import './App.css';
import Checkout from "./Checkout";
import Home from './Home';
import Footer from './footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
//import Product from './Product.js';
function App() {
  return (
      <div className='container'>   
      <Router>
        <Switch>
          <Route path="/login">
            <h2>Login</h2>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            {/*<Contents />*/}
            
            <Footer />
          </Route>
        </Switch>
      </Router>
      </div>
      
    
  );
}

export default App;
