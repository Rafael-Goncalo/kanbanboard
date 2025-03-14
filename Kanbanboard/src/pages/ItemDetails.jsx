import React from 'react'
import kanbanData from '../assets/kanban.json'
import {useParams} from "react-router-dom"
import { Link } from 'react-router-dom'

export const ItemDetails = () => {
  // console.log(useParams())
  const taskId = useParams().taskId
  console.log(taskId)
  const oneTask = kanbanData.find(task => task.id === taskId)
  console.log(oneTask)
  return (
      <div className="card-container-details">
          <h2>{oneTask.title}</h2>

          <h3>to: {oneTask.assignee}</h3>
          <p>
            Details: {oneTask.description}
          </p>
          <div>Priority: {oneTask.priority}</div>
          {/* Importance */}
          
          <div>
          Created: {oneTask.createdDate}
          </div>
          <div>
            Deadline: {oneTask.dueDate}
          </div>
          <div>Status: {oneTask.status}</div> 
          {/* Stage/ Phase */}
          
          {/* <section>
            <Link to ={`/tasks/${oneTask.id}`}>
            <button>
            Details
            </button></Link>

            <button onClick={() => 
              deleteTask(oneTask.id)
          }>Delete</button>
          </section> */}
          
       
        
        </div>
  )
}
