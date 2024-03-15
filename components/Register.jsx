import React, { useRef } from 'react'
import axios from 'axios'

const Register = () => {

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

      await axios.post(baseURL, {Headers: {token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZGVudGlmaWNhY2lvbiI6MTA4MDkzNCwibm9tYnJlIjoiQXJpc3RvYnVsbyIsInRlbGVmb25vIjoiMzExOTU0Nzg4MyIsInRpcG9fdXN1YXJpbyI6ImNhdGFkb3IiLCJlc3RhZG8iOiJhY3Rpdm8ifV0sImlhdCI6MTcxMDQ3NTI3OCwiZXhwIjoxNzEwNTYxNjc4fQ.RiQe_Dr3zjKo7Ff3qNoKtbAYrhtex86NGD9izhALJm0"}}, data).then((response) => {
        if(response.status == 200) {
          alert('User creado')
        }else{
          alert('Error de registro')
        }
      })
    } catch (error) {
      alert('Error del servidor' + error)
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

      
    </div>
  )
}

export default Register
