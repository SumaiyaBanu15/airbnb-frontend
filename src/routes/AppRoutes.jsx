import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Header from '../components/Headers/Header'
import Filter from '../components/Filters/Filter'
import AllCards from '../components/CardsFlex/AllCards'
import Signup from '../components/Signup'


function AppRoutes() {
  return <>
  <Routes>
    <Route path='/' element={<Signup />} />

    <Route path='/home' element={ <> <Header />
    <Filter /> 
    <AllCards /> 
    </> } />

    <Route path='/*' element={<Navigate to ='/'/>} />
  </Routes>
  </>
}

export default AppRoutes