
import React, {useState, useEffect } from 'react'
import { ItemCard } from './ItemCard'



export const ToDo = (props) => {
    const {id, data, deleteTask, setTaskDataUpdate, setShowAddTask} = props
    // const{ tasksToDo, setTasksToDo} = useState([])
    // useEffect(()=> setTasksToDo(data.filter(taskToDo => taskToDo === )))
    // console.log("Data in ToDo:", data);
  return (
      
        <div className="toDo-container">
            <h2>To Do:</h2>
            {data.map( oneKanban => {
                if(oneKanban.status === 'To Do')
                {
                    return (
                      // we need the key after the map
                     
                     <ItemCard key={oneKanban.id} oneKanban= {oneKanban} deleteTask={deleteTask} setTaskDataUpdate= {setTaskDataUpdate} setShowAddTask={setShowAddTask}/>
                )
                
                }return null
                
            })}
           
        </div>
    
  )
}
