
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css';
import { CartWidget } from './CartWidget'


const NavBar = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="active">Inicio</NavLink>
      </li>
      <li>
    <NavLink to="/condition/nuevo" activeClassName="active">Nuevo</NavLink>
  </li>
  <li>
    <NavLink to="/condition/usado" activeClassName="active">Usado</NavLink>
  </li>
      <li>
        <NavLink to="/contact" activeClassName="active">Contacto</NavLink>
      </li>
      <CartWidget />
      <span className='span'>{count}</span>
      <button className='button' onClick={handleClick}>Click Aquí</button>
    </ul>
  );
};

export default NavBar;
