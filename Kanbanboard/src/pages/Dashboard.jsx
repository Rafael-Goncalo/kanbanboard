
import { Doing } from '../components/Doing'
import { Done } from '../components/Done'
import { ToDo } from '../components/ToDo'
import { FormTask } from '../components/FormTask'
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';


export const Dashboard = (props) => {
    const {data, setKanbanData, showAddTask, setTaskDataUpdate , setShowAddTask, taskDataUpdate} = props
    const deleteTask = taskId => {
      // ! i need to use data here and not kanbanData because its new variable and i update this one not kanbanData after
      const taskFiltered = data.filter(oneKanban => {
          return taskId !== oneKanban.id
      })
      setKanbanData(taskFiltered);
    
    }
  return (
    <>
    {
      showAddTask && (
      <div className="form-container">
      <MantineProvider>
        <DatesProvider>
          <FormTask data={data} setKanbanData= {setKanbanData} taskDataUpdate={taskDataUpdate} setTaskDataUpdate= {setTaskDataUpdate} setShowAddTask = {setShowAddTask}/>
        </DatesProvider>
      </MantineProvider>
          
      </div>)
    }
      
      <div className="list-container">
              <ToDo data = {data} deleteTask = {deleteTask} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask={setShowAddTask}/>  
              <Doing data = {data} deleteTask = {deleteTask} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask={setShowAddTask}/>
              <Done data = {data} deleteTask = {deleteTask} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask={setShowAddTask}/>
      </div>
    </>
  )
}