import React, { useState, useContext } from 'react'
import '../style/Header.css'
import Menu from '../components/Menu'
import AppContext from '../context/AppContext'
import MyOrder from '../containers/MyOrder'
import iconMenu from '../assets/icons/icon_menu.svg'
import logo from '../assets/logos/logo_yard_sale.svg'
import shopiCard from '../assets/icons/icon_shopping_cart.svg'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders , setToggleOrders] = useState(false);
  const {state} = useContext(AppContext);

  const handleTogle = () => {
    setToggle(!toggle);
  }
  

  return (
    <nav>
    <img src={iconMenu} alt="menu" className="menu"/>

    <div className="navbar-left">
      <img src={logo} alt="logo" className="nav-logo"/>

      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

    <div className="navbar-right">
      <ul>
        <li className="navbar-email" onClick={handleTogle}>
          platzi@example.com
          </li>
        <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
          <img src={shopiCard} alt="shopping cart"/>
          {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
        </li>
      </ul>
    </div>
    {toggle && <Menu/>}
    {toggleOrders && <MyOrder/>}
    
  </nav>
  )
}

export default Header
