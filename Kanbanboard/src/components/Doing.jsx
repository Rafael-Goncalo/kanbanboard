import React from 'react'
import { ItemCard } from './ItemCard'


export const Doing = (props) => {
    const { data, deleteTask , setTaskDataUpdate, setShowAddTask} = props
    
  return (
    
    <div  className="doing-container">
        <h2>Doing:</h2>
        {data.map( oneKanban => {
            if(oneKanban.status === 'In Progress') 
                {
                    return (
                      
                        <ItemCard key={oneKanban.id} oneKanban= {oneKanban} deleteTask={deleteTask} setTaskDataUpdate= {setTaskDataUpdate} setShowAddTask={setShowAddTask}/>
                    )

                 }return null
            })
            }
           
    </div>
  )
}
