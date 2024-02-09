import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Product'
import Contact from './Contact'
import Single from './Single'
import Cart from './Cart'
import ErrorPage from './Error'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Product' element={<Products />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Single/:id' element={<Single />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='*' element ={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
