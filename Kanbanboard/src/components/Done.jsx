import React from 'react'
import { ItemCard } from './ItemCard'
import { Drag } from './Drag'


export const Done = (props) => {
    const { data, deleteTask, setTaskDataUpdate, setShowAddTask} = props
    

  return (
       
            <div className="done-container">
                <h2>Done:</h2>
                {data.map( oneKanban => {
                    if(oneKanban.status === 'Done')
                    {
                        return (
                            
                         <ItemCard key={oneKanban.id} oneKanban= {oneKanban} deleteTask={deleteTask} setTaskDataUpdate= {setTaskDataUpdate} setShowAddTask={setShowAddTask}/>   
                    )
                   
                    }return null
                    
                })}
                <Drag/>
            </div>
        
      )
  
}
