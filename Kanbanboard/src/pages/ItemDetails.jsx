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

          <h3>To {oneTask.assignee}</h3>
          <p>
            {oneTask.description}
          </p>
          <div>{oneTask.priority}</div>
          
          <div>
          Created : 
            {oneTask.createdDate}
          </div>
          <div>
            Deadline : {oneTask.dueDate}
          </div>
          <div>{oneTask.status}</div>
          
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
