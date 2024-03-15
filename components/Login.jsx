import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Login = () => {


const baseURL = "http://localhost:3000/validacion"

/*  */

const handleSubmit = () => {

    const [post, setPost] = useState(null)
    useEffect(() => {
        axios.post(baseURL, {
            Headers: {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZGVudGlmaWNhY2lvbiI6MTA4MDkzMTYzOCwibm9tYnJlIjoiQXJpc3RvYnVsbyBDYWNoaW1ibyIsInRlbGVmb25vIjoiMTIzMjE0IiwidGlwb191c3VhcmlvIjoiY2F0YWRvciIsImVzdGFkbyI6ImFjdGl2byJ9XSwiaWF0IjoxNzA5OTMxMjU1LCJleHAiOjE3MTAwMTc2NTV9.s6q79P4ZU871WagcTwefKOMjcyX84m2UeRgLnXRfw14"
            }
        }).then((response) => {
            setPost(response.data)
        })
    }, [])

    
}


  return (
    <div>
      <form action="" method='post'>
        <input name='correo_electronico' type="text" placeholder='Correo' />
        <input name='password' type="text" placeholder='contraseña' />
        <button onClick={handleSubmit} >Login</button>
      </form>
    </div>
  )
}

export default Login
