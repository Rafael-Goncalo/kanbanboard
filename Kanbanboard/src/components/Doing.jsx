import React from 'react'
import { ItemCard } from './ItemCard'

export const Doing = (props) => {
    const { kanbanData, deleteTask } = props
  return (
    <>
    <div className="doing-container">
        <h2>Doing:</h2>
        {kanbanData.map( oneKanban => {
            if(oneKanban.status === 'In Progress') 
                {
                    return (
                        <ItemCard key={oneKanban.id} oneKanban= {oneKanban} deleteTask={deleteTask}/>
                    )

                 }
            })
            }
    </div></>
  )
}
