// the Skeleton of a React App. Framework

import './App.css'
import React from 'react'

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { About } from './pages/About'
import { ItemDetails } from './pages/ItemDetails'
import { NotFound } from './pages/NotFound'

function App() {
 
// console.log(data);
  return (
 
    <div className='container'>
    <Navbar/>
    <div className="main-container">
      <Sidebar/>
      {/* <div className="content">
        <div className="start">
          <h2>Start to manage your task</h2>
          <button className='btn btn-start'>Start</button>
          </div>
      </div> */}
      {/* here we need all pages */}
      <Routes>
        <Route path = "/" element={<Dashboard/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/tasks/:taskId" element={<ItemDetails/>}/>
        <Route path = "*" element={<NotFound/>}/>

      </Routes>
     
    </div>
    

    <Footer/>
  
    </div>
 
  )
}

export default App
