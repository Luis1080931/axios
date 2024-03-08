import React from 'react'
import Login from '../components/Login.jsx'
import Listar from '../components/Listar.jsx'
import Register from '../components/Register.jsx'
import Router from 'router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/listar' element={<Listar />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
