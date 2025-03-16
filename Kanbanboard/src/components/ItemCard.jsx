import React from 'react'
import { Link } from 'react-router-dom'

export const ItemCard = (props) => {
    const { oneKanban , deleteTask , setTaskDataUpdate, setShowAddTask} =props
    // console.log(oneKanban)
  return (
    <div className="card-container">
      
        <h3>{oneKanban.title}</h3>

        <div className='date-container'>
          <span>{typeof oneKanban.createdDate === "object" ? oneKanban.createdDate.toISOString().split("T")[0] : oneKanban.createdDate }</span> - <span>{typeof oneKanban.dueDate === "object" ? oneKanban.dueDate.toISOString().split("T")[0] : oneKanban.dueDate }</span>
        </div>

        <section>
          <Link to ={`/tasks/${oneKanban.id}`}>
          <a  id="btn-details">
          <i class="fa-solid fa-circle-info"></i>
          </a></Link>
          <a onClick= { () => {
            setTaskDataUpdate(oneKanban)
            setShowAddTask(true)
            }
          }>
            <i class="fa-solid fa-arrows-rotate"></i>
          </a>
          <a onClick={() => 
            deleteTask(oneKanban.id)
        }><i class="fa-solid fa-trash"></i></a>
        </section>
        <div>To {oneKanban.assignee}</div>
       
        
        
    </div>
    
  )
}
