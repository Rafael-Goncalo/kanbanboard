import React from 'react'
import { Link } from 'react-router-dom'

export const ItemCard = (props) => {
    const { oneKanban , deleteTask} =props
  return (
    <div className="card-container">
        <h3>{oneKanban.title}</h3>

        <div className='date-container'>
          <span>{typeof oneKanban.createdDate === "object" ? oneKanban.createdDate.toISOString().split("T")[0] : oneKanban.createdDate }</span> - <span>{typeof oneKanban.dueDate === "object" ? oneKanban.dueDate.toISOString().split("T")[0] : oneKanban.dueDate }</span>
        </div>

        <section>
          <Link to ={`/tasks/${oneKanban.id}`}>
          <button>
            Details
          </button></Link>

          <button onClick={() => 
            deleteTask(oneKanban.id)
        }>Delete</button>
        </section>
        <div>To {oneKanban.assignee}</div>
       
        
        
    </div>
    
  )
}
