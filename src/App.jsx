import { useState } from 'react'
import { BrowserRouter as Router, Link, Outlet, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Home from './page/home'
import Auth from './page/Auth'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth/:ruta' element={<Auth />} />
        </Routes>
      </Router>
    </>
  )
}


export default App
