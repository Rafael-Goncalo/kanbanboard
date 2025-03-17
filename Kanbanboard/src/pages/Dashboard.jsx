
import { Doing } from '../components/Doing'
import { Done } from '../components/Done'
import { ToDo } from '../components/ToDo'
import { FormTask } from '../components/FormTask'
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';


export const Dashboard = (props) => {
    const {data, setKanbanData, showAddTask, setTaskDataUpdate , setShowAddTask, taskDataUpdate, deleteTask} = props
    // are u here ???? did u see my code ? 
    // R
    //  A
    //   F
    //    A
    // R
    //   A
    //    F
    //     A
    // R
    //   A
    //     F
    //       A DO u see my code?
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