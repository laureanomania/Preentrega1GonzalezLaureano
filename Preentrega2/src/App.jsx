import { useState } from 'react'
import './App.css'
import NavBar from './componets/NavBar'
import Greeting from './componets/Greeting'
import  products from './assets/mockData.json'
import ItemListContainer from './componets/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)
  console.log(products);
  return (
 <>
 <BrowserRouter> 
 <NavBar/>
 <Greeting message = "Todas las marcas"/>
 <Routes>
 <Route path="/" element={<ItemListContainer />} />
 <Route path="/condition/:condition" element={<ItemListContainer />} />
 <Route path="/detail/:id" element={<ItemListContainer />} />
 
 
 
 </Routes>

<div>

</div>
 </BrowserRouter>



 </>
  )
}

export default App