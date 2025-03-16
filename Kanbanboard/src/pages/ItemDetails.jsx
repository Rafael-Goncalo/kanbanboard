import React from 'react'
// import kanbanData from '../assets/kanban.json'
import {useParams} from "react-router-dom"
import { Link } from 'react-router-dom'
import { FormTask } from '../components/FormTask'
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';

export const ItemDetails = (props) => {
  const {data, showAddTask, setKanbanData, taskDataUpdate, setTaskDataUpdate, setShowAddTask} = props
  // console.log(useParams())
  const taskId = useParams().taskId
  console.log(taskId)
  const oneTask = data.find(task => task.id === taskId)
  console.log(oneTask)
  return (
    <>
    {
      showAddTask && (
      <div className="form-container">
      <MantineProvider>
        <DatesProvider>
          <FormTask data={data} setKanbanData= {setKanbanData} taskDataUpdate={taskDataUpdate} setTaskDataUpdate= {setTaskDataUpdate} setShowAddTask = {setShowAddTask}/>
        </DatesProvider>
      </MantineProvider>
          
      </div>)
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

            <a> <i class="fa-solid fa-backward"></i></a>
            <a> <i class="fa-solid fa-arrows-rotate"></i> </a>
            <a> <i class="fa-solid fa-trash"></i> </a>
          </section>
          
       
        
        </div></>
  )
}
