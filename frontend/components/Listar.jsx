import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Listar() {

  const baseURL= 'http://localhost:3000/usuarios/listar'

  const token = localStorage.getItem('token')

  const [post, setPost] = useState(null)

  useEffect(() => {
    
    axios.get(baseURL, {
      headers: {
        token: token
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