import { useState } from 'react'
import './App.css'
import NavBar from './componets/NavBar'
import Greeting from './componets/Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 
 <NavBar/>
<Greeting message = "Especialistas en impresion 3d"/>
 </>
  )
}

export default App
