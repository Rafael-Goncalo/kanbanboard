
import React from 'react'
import { ItemCard } from './ItemCard'

export const ToDo = (props) => {
    const { kanbanData, deleteTask } = props
    
  return (
    <>
        <div className="toDo-container">
            <h2>To Do:</h2>
            {kanbanData.map( oneKanban => {
                if(oneKanban.status === 'To Do')
                {
                    return (
                      // we need the key after the map
                     <ItemCard key={oneKanban.id} oneKanban= {oneKanban} deleteTask={deleteTask}/>
                )
               
                }
                
            })}
            
        </div>
    </>
  )
}
