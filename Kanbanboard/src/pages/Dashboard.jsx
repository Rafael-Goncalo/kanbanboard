import { useState } from 'react'
// import { Doing } from '../components/Doing'
// import { Done } from '../components/Done'
// import { ToDo } from '../components/ToDo'
import { FormTask } from '../components/FormTask'
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import {DndContext} from '@dnd-kit/core';

import {ItemCard} from '../components/ItemCard';
import {MultipleDroppables} from '../components/MultipleDroppables';



export const Dashboard = (props) => {
    const {data, setKanbanData, showAddTask, setTaskDataUpdate , setShowAddTask, taskDataUpdate, deleteTask} = props
    
    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (
      <ItemCard>Drag me</ItemCard>
    );
 
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
      <DndContext onDragEnd={handleDragEnd}>
      <div className="list-container">
              {/* {!isDropped ? draggableMarkup : null}
              <ToDo data = {data} deleteTask = {deleteTask} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask={setShowAddTask}>  
              {isDropped ? draggableMarkup : 'Drop here'}
              </ToDo>
              <Doing data = {data} deleteTask = {deleteTask} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask={setShowAddTask}> 
              {isDropped ? draggableMarkup : 'Drop here'}
              </Doing>
              <Done data = {data} deleteTask = {deleteTask} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask={setShowAddTask}>
              {isDropped ? draggableMarkup : 'Drop here'}  
              </Done> */}
              {!isDropped ? draggableMarkup : null}
              <MultipleDroppables data = {data} deleteTask = {deleteTask} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask={setShowAddTask}>
              {isDropped ? draggableMarkup : 'Drop here'}
              </MultipleDroppables>
      </div>
      </DndContext>
    </>
  )
  function handleDragEnd(event) {
    const {over} = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
}