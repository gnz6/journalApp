import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route to="/" element={<Home/>}/>
        <Route path='/*' element={<Navigate to="/"/>}/>
    </Routes>
  )
}
