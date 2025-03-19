import React, {useEffect} from 'react'
// import kanbanData from '../assets/kanban.json'
import {useParams} from "react-router-dom"
import { Link } from 'react-router-dom'
import { FormTask } from '../components/FormTask'
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { useNavigate } from "react-router-dom";

export const ItemDetails = (props) => {
  const {data, showAddTask, setKanbanData, taskDataUpdate, setTaskDataUpdate, setShowAddTask, deleteTask} = props
  const taskId = useParams().taskId
  const oneTask = data.find(task => task.id === taskId)
  const nav = useNavigate();
  
  useEffect(()=>{
    if(taskDataUpdate){
      setTaskDataUpdate(null)
    }
    if(showAddTask)
    {
      setShowAddTask(false)
    }
  },[])
  
  return (
    <>
    
    {
      
      showAddTask && (
        <div className="list-container">
      <div className="form-container">
      <MantineProvider>
        <DatesProvider>
          <FormTask data={data} setKanbanData= {setKanbanData} taskDataUpdate={taskDataUpdate} setTaskDataUpdate= {setTaskDataUpdate} setShowAddTask = {setShowAddTask}/>
        </DatesProvider>
      </MantineProvider>
          
      </div> </div>)
    }
      <div className="card-container-details">
          <h2>{oneTask.title}</h2>

          <h3>to: {oneTask.assignee}</h3>
          <p>
            Details: {oneTask.description}
          </p>
          <div>Priority: {oneTask.priority}</div>
          {/* Importance */}
          
          <div>
          Created: {typeof oneTask.createdDate === "object" ? oneTask.createdDate.toISOString().split("T")[0] : oneTask.createdDate }
          </div>
          <div>
            Deadline: {typeof oneTask.dueDate === "object" ? oneTask.dueDate.toISOString().split("T")[0] : oneTask.dueDate }
          </div>
          <div>Status: {oneTask.status}</div> 
          {/* Stage/ Phase */}
          
          <section>

            <Link to='/' className='btn-details'> <i className="fa-solid fa-backward"></i></Link>
            <a className='btn-update' onClick= { () => {
            setTaskDataUpdate(oneTask)
            setShowAddTask(true)
            }}> <i className="fa-solid fa-arrows-rotate"></i> </a>
            <a className='btn-delete' onClick={
              () => {
            deleteTask(oneTask.id)
              nav("/")
            }}> <i className="fa-solid fa-trash"></i> </a>
          </section>
          
       
        
        </div></>
  )
}
