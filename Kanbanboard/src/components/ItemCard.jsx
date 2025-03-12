import React from 'react'

export const ItemCard = (props) => {
    const { oneKanban , deleteTask} =props
  return (
    <div className="card-container">
        <h3>{oneKanban.title}</h3>

        <div className='date-container'>
          <span>{oneKanban.createdDate}</span> - <span>{oneKanban.dueDate}</span>
        </div>

        <p>{oneKanban.description}</p>

        <section>
          <div>To {oneKanban.assignee}</div>
          <button onClick={() => 
            deleteTask(oneKanban.id)
        }>Delete</button>
        </section>

        <div>{oneKanban.priority}</div>
        
        
    </div>
    
  )
}
