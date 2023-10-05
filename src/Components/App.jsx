import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import AdminHome from './Admin/AdminHome'
import Maincategory from './Admin/Maincategory/Maincategory'
import CreateMaincategory from './Admin/Maincategory/CreateMaincategory'

export default function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            
            <Route path='/admin' element={<AdminHome/>} />

            <Route path='/admin/maincategory' element={<Maincategory/>} />
            <Route path='/admin/maincategory/create' element={<CreateMaincategory/>} />
            
            <Route path='/*' element={<Error/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
