import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layout/Layout'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='w-full min-h-screen'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} ></Route>
            <Route path='products' element={<Products />} ></Route>
            <Route path='products/:id' element={<ProductDetails />} ></Route>
            <Route path='cart' element={<Cart />}></Route>
          </Route>
        </Routes>
      </div>
  )
}

export default App
