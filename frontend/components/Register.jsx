import React, { useRef } from 'react'
import axios from 'axios'

const Register = () => {

  const token = localStorage.getItem('token')

  const baseURL = "http://localhost:3000/usuarios/registrar"

  const identificacion = useRef(null)
  const nombre = useRef(null)
  const telefono = useRef(null)
  const correo_electronico = useRef(null)
  const tipo_usuario = useRef(null)
  const password = useRef(null)

  const handle = async (e) => {

    e.preventDefault()

    try {
      const data = {
        identificacion: parseInt(identificacion.current.value),
        nombre: nombre.current.value,
        telefono: telefono.current.value,
        correo_electronico: correo_electronico.current.value,
        tipo_usuario: tipo_usuario.current.value,
        password: password.current.value
      }

      await axios.post(baseURL, data).then((response) => {
        console.log(response)
        if(response.status == 201) {

          alert('User creado')
        }else{
          alert('Error de registro')
        }
      })
    } catch (error) {
      console.log(error)
      alert('Error del servidor' + error)
    }
  
  }

  const handleDesactivar = (e) => {

    e.preventDefault()

    try {
      axios.put('http://localhost:3000/usuarios/desactivar/1080934638').then((response) => {
      console.log(response)
      if(response.status == 201){
        alert('User desactivado')
      }else{
        alert('User no desactivado')
      }
    })
    } catch (error) {
      console.log(error)
      alert('Error del servidor'+ error)
    }
    
  }
  
  return (
    <div>
      <form method='post' onSubmit={handle}>
        <input type="number" id='identificacion' name='identificacion' placeholder='Identificacion' ref={identificacion} />
        <input type="text" id='telefono' name='telefono' placeholder='Telefono' ref={telefono} />
        <input type="text" id='nombre' name='nombre' placeholder='Nombre' ref={nombre}/>
        <input type="text" id='correo_electronico' name='correo_electronico' placeholder='Correo' ref={correo_electronico} />
        <select name="tipo_usuario" id="tipo_usuario" ref={tipo_usuario}>
          <option value="catador"> Catador </option>
          <option value="caficultor"> Caficultor </option>
        </select>
        <input type="text" id='password' name='password' placeholder='Ingrese contraseña' ref={password} />

        <button type='submit'> Registrar </button>

      </form>

      <form method='' onSubmit={handleDesactivar}>
        <button type='submit'> Desactivar </button>
      </form>

      
    </div>
  )
}

export default Register
