import React from 'react'
import '../styles/greeting.css'

export const Greeting = ({message}) => {
    
  return (
    <>
    <h1>Bienvenidos a Piter3D</h1>
    <h2>{message}</h2>
    </>
  )
}

export  default Greeting