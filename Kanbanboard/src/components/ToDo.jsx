
import React from 'react'
import { ItemCard } from './ItemCard'

export const ToDo = (props) => {
    const { data, deleteTask, setTaskDataUpdate, setShowAddTask} = props
    
  return (
    <>
        <div className="toDo-container">
            <h2>To Do:</h2>
            {data.map( oneKanban => {
                if(oneKanban.status === 'To Do')
                {
                    return (
                      // we need the key after the map
                     <ItemCard key={oneKanban.id} oneKanban= {oneKanban} deleteTask={deleteTask} setTaskDataUpdate= {setTaskDataUpdate} setShowAddTask={setShowAddTask}/>
                )
               
                }
                
            })}
            
        </div>
    </>
  )
}
