import React from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = (props) => {
  const {toggleShowAddTask, showAddTask} = props

  return (
    <div className='sidebar'>
       <NavLink to="/">Home</NavLink> 
       <NavLink to="/about">About</NavLink>
       
       <button onClick={toggleShowAddTask}>{showAddTask === false ? "Add task" : "Close form"}</button>
    </div>
  )
}
