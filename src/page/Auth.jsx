import React from 'react'
import { useParams } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

function Auth() {

    const {ruta} = useParams()


  return (
    ruta == "login" ? <Login /> : <Login/>
  )
}

export default Auth