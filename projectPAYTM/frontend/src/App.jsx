import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter,Routes,Route} from "react-router-dom"

import SignUp from './pages/SignUp/'

import SignIn from  './pages/SignIn'

import Dashboard from './pages/Dashboard'

import SendMoney from './pages/SendMoney'

import AddMoney from './pages/AddMoney'







function App() {
  

  return (
    <>
    <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/addmoney" element={<AddMoney />} />


        </Routes>
  
    </BrowserRouter>
    
    </>
  )
}

export default App
