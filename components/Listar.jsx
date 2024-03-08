import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Listar() {

  const baseURL= 'http://localhost:3000/usuarios/listar'

  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(baseURL, {
      headers: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZGVudGlmaWNhY2lvbiI6MTA4MDkzMTYzOCwibm9tYnJlIjoiQXJpc3RvYnVsbyBDYWNoaW1ibyIsInRlbGVmb25vIjoiMTIzMjE0IiwidGlwb191c3VhcmlvIjoiY2F0YWRvciIsImVzdGFkbyI6ImFjdGl2byJ9XSwiaWF0IjoxNzA5OTMxMjU1LCJleHAiOjE3MTAwMTc2NTV9.s6q79P4ZU871WagcTwefKOMjcyX84m2UeRgLnXRfw14"
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