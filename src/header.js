import React from 'react';
import './App.css';
import { useStateValue } from './StateProvider';
import logo from "./logo.svg";
//import {ShopingBasketIcon} from '@material-ui/icons'; 
import { Link } from 'react-router-dom';
function Header() {
  const [{ basket }] = useStateValue();

  return (
    <header className="header__2">
      <nav className="navbar navbar-dark bg-dark">
        <div className="App-logo">

          <img src={logo} alt="amazon_clone" className="logo" />
        </div>
        <div className="search">
          <select className="list">
            <option>All</option>
          </select>
          <input type='text' name='search' className="search_text" />
          <button className="search_button"> search</button>
        </div>
        <ul className="menu">
          <li>
            <div className="m">Hello, Sign in
    </div>
            <Link to="/">
              Accounts & List
    </Link>
          </li>
          <li><div className="m">Returns</div>
            <Link to="/sample">&Orders</Link></li>
          <li><div className="m">Try </div>
            <Link to="/sample">Prime</Link></li>
          <li>
            <Link to="/checkout">
              Cart({basket?.length})
    </Link>
          </li>
        </ul>
      </nav>


    </header>);

}

export default Header;
