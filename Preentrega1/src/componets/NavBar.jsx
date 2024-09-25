import React, { useState } from 'react'
import '../styles/navbar.css' 
import { CartWidget } from './CartWidget'


const NavBar = () => {
  const [count, setCount] = useState(0)
  const handleClick = () =>{
    setCount(prevCount => prevCount + 1)
  }

  return (
    <ul>
    <li><a className="active" href="#home">Inicio</a></li>
    <li><a href="#Imp">Impresoras</a></li>
    <li><a href="#Filmt">Filamentos</a></li>
    <li><a href="#Contac">Contacto</a></li>
    <CartWidget/>
    <span className='span'>{count}</span>
    <button className='button' onClick={handleClick}> Click Aqui </button>
    
  </ul>
  )
}

export default NavBar