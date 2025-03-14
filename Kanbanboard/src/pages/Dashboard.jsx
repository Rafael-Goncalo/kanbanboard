import React, {useState} from 'react'
import { Doing } from '../components/Doing'
import { Done } from '../components/Done'
import { ToDo } from '../components/ToDo'
import kanbanData from '../assets/kanban.json'
import { FormTask } from '../components/FormTask'
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';


export const Dashboard = () => {
    const [data, setKanbanData] = useState(kanbanData)
    const deleteTask = taskId => {
      // ! i need to use data here and not kanbanData because its new variable and i update this one not kanbanData after
      const taskFiltered = data.filter(oneKanban => {
          return taskId !== oneKanban.id
      })
      setKanbanData(taskFiltered);
    
    }
  return (
    <>
      <div className="form-container">
      <MantineProvider>
        <DatesProvider>
          <FormTask data={data} setKanbanData= {setKanbanData}/>
        </DatesProvider>
      </MantineProvider>
          
      </div>
      <div className="list-container">
              <ToDo kanbanData = {data} deleteTask = {deleteTask}/>  
              <Doing kanbanData = {data} deleteTask = {deleteTask}/>
              <Done kanbanData = {data} deleteTask = {deleteTask}/>
      </div>
    </>
  )
}