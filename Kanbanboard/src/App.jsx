import './App.css'
import React, { useState } from 'react'
import kanbanData from './assets/kanban.json'
import { Doing } from './components/Doing'
import { Done } from './components/Done'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { ToDo } from './components/ToDo'



function App() {
  const [data, setKanbanData] = useState(kanbanData)
const deleteTask = taskId => {
  const taskFiltered = kanbanData.filter(oneKanban => {
      return taskId !== oneKanban.id
  })
  setKanbanData(taskFiltered);

}
console.log(data);
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
      <div className="list-container">
        <ToDo kanbanData = {data} deleteTask = {deleteTask}/>  
        <Doing kanbanData = {data} deleteTask = {deleteTask}/>
        <Done kanbanData = {data} deleteTask = {deleteTask}/>
      </div>
    </div>
    

    <Footer/>
  
    </div>
  )
}

export default App
