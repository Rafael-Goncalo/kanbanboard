// the Skeleton of a React App. Framework

import './App.css'
import React, {useState} from 'react'
import kanbanData from './assets/kanban.json'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { About } from './pages/About'
import { ItemDetails } from './pages/ItemDetails'
import { NotFound } from './pages/NotFound'

function App() {
  const [data, setKanbanData] = useState(kanbanData)
  const [showAddTask, setShowAddTask] = useState(false);
  const [taskDataUpdate, setTaskDataUpdate] = useState(null);
  // console.log(taskDataUpdate);
// console.log(showAddTask);
  function toggleShowAddTask(){

    setShowAddTask(!showAddTask)

  }
  return (
 
    <div className='container'>
    <Navbar />
    <div className="main-container">
      <Sidebar toggleShowAddTask = {toggleShowAddTask} showAddTask = {showAddTask} /> 
      {/* <div className="content">
        <div className="start">
          <h2>Start to manage your task</h2>
          <button className='btn btn-start'>Start</button>
          </div>
      </div> */}
      {/* here we need all pages */}
      <Routes>
        <Route path = "/" element={<Dashboard data={data} setKanbanData={setKanbanData} showAddTask = {showAddTask} taskDataUpdate={taskDataUpdate} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask= {setShowAddTask}/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/tasks/:taskId" element={<ItemDetails data={data}  setKanbanData={setKanbanData} showAddTask = {showAddTask} taskDataUpdate={taskDataUpdate} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask= {setShowAddTask}/>}/>
        <Route path = "*" element={<NotFound/>}/>

      </Routes>
     
    </div>
    

    <Footer/>
  
    </div>
 
  )
}

export default App
