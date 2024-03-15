import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

export const Login = () => {


const baseURL = "http://localhost:3000/validacion"

/*  */

const correo_electronico = useRef(null)
const password = useRef(null)
const navigate = useNavigate()

const handleSubmit = (e) => {

e.preventDefault()

try {
  const data = {
    correo_electronico: correo_electronico.current.value,
    password: password.current.value
  }
  
  axios.post(baseURL, data).then((response) => {
    console.log(response)
    if(response.status == 403){
      alert('Credenciales erroneas')
    }else{
      const {token} = response.data
      localStorage.setItem('token', token)
      navigate('/register')
      alert('Logueado')
    }
  })
} catch (error) {
  console.log(error)
  alert('Error del servidor' + error)
}
    
}


  return (
    <div>
      <form method='post' onSubmit={handleSubmit}>
        <input name='correo_electronico' type="text" placeholder='Correo' ref={correo_electronico} />
        <input name='password' type="text" placeholder='contraseña' ref={password}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
