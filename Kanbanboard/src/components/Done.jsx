import React from 'react'
import { ItemCard } from './ItemCard'

export const Done = (props) => {
    const { kanbanData, deleteTask} = props
  return (
       <>
            <div className="done-container">
                <h2>Done:</h2>
                {kanbanData.map( oneKanban => {
                    if(oneKanban.status === 'Done')
                    {
                        return (
    
                         <ItemCard key={oneKanban.id} oneKanban= {oneKanban} deleteTask={deleteTask}/>   
                    )
                   
                    }
                    
                })}
                
            </div>
        </>
      )
  
}
