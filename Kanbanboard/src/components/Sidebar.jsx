import React from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
       <NavLink to="/">Home</NavLink> 
       <NavLink to="/about">About</NavLink> 
    </div>
  )
}
