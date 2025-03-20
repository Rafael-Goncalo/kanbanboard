import React, {useEffect} from 'react'
// import kanbanData from '../assets/kanban.json'
import {useParams} from "react-router-dom"
import { Link } from 'react-router-dom'
import { FormTask } from '../components/FormTask'
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { useNavigate } from "react-router-dom";

export const ItemDetails = (props) => {
  // recover props data
  const {data, showAddTask, setKanbanData, taskDataUpdate, setTaskDataUpdate, setShowAddTask, deleteTask} = props
  // need url taskId
  const taskId = useParams().taskId
  // find the task with taskId
  const oneTask = data.find(task => task.id === taskId)
  // initialize the navigation
  const nav = useNavigate();
  
  // one time if u already have a task to update when u arrive on the page, you delete it
  // and if the form is displayed, you hide it
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
    
  {/* if U want to show form */}
  {showAddTask ? (
    <div className="list-container">
        <div className='form-container'>
          <MantineProvider>
            <DatesProvider>
              <FormTask
                data={data}
                setKanbanData={setKanbanData}
                taskDataUpdate={taskDataUpdate}
                setTaskDataUpdate={setTaskDataUpdate}
                setShowAddTask={setShowAddTask}
                
              />
            </DatesProvider>
          </MantineProvider>
        </div></div>
      )
      // else if u want to hide form check if u have something insade taskDataUpdate and set to null because u dont need to update the task if u close the form without submit
      : taskDataUpdate && setTaskDataUpdate(null)
    }

      <div className="card-container-details">
          <h2>{oneTask.title}</h2>

          <h3>to: {oneTask.assignee}</h3>
          <p>
            Details: {oneTask.description}
          </p>
          <div>Priority: {oneTask.priority}</div>
          {/* Importance */}
          
          {/* manage the time date if u have Object date and change it to a string, or just show string date  */}
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
