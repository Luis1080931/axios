import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Listar() {

  const baseURL= 'http://localhost:3000/usuarios/listar'

  const [post, setPost] = useState(null)

  useEffect(() => {
    
    axios.get(baseURL, {
      headers: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZGVudGlmaWNhY2lvbiI6MTA4MDkzNCwibm9tYnJlIjoiQXJpc3RvYnVsbyIsInRlbGVmb25vIjoiMzExOTU0Nzg4MyIsInRpcG9fdXN1YXJpbyI6ImNhdGFkb3IiLCJlc3RhZG8iOiJhY3Rpdm8ifV0sImlhdCI6MTcxMDQ3NTI3OCwiZXhwIjoxNzEwNTYxNjc4fQ.RiQe_Dr3zjKo7Ff3qNoKtbAYrhtex86NGD9izhALJm0"
      }
    }).then((response) => {
      console.log(response)
      setPost(response.data)
    })
  }, [])

  if(!post) return null

  return(
    <div>
      <p>Nombre: {post.usuarios[0].nombre}</p>
      
    </div>
  )
}