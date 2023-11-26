import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Header from '../components/Headers/Header'
import Filter from '../components/Filters/Filter'
import AllCards from '../components/CardsFlex/AllCards'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Footer from '../components/Footers/Footer'
import MyBooking from '../components/Bookings/MyBooking'
import LastPage from '../components/LastPage'


function AppRoutes() {
  return <>
  <Routes>
    <Route path='/' element={<Login />} />

    <Route path='/signup' element={<Signup />} />
  
    <Route path='/home' element={ <> <Header />
    <Filter /> 
    <AllCards /> 
    <Footer />
    </> } />
    
    <Route path='/myBooking' element={<MyBooking />} />

    <Route path='/last' element={<LastPage />} />

    <Route path='/*' element={<Navigate to ='/'/>} />
  </Routes>
  </>
}

export default AppRoutes