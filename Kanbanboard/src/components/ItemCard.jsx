import React from 'react'

export const ItemCard = (props) => {
    const { oneKanban , deleteTask} =props
  return (
    <div className="card-container">
        <h3>{oneKanban.title}</h3>
        <p>{oneKanban.description}</p>
        <p>{oneKanban.assignee}</p>
        <p>{oneKanban.priority}</p>
        <p>{oneKanban.createdDate}</p>
        <p>{oneKanban.dueDate}</p>
        <button onClick={() => 
            deleteTask(oneKanban.id)
        }>Delete</button>
    </div>
    
  )
}
