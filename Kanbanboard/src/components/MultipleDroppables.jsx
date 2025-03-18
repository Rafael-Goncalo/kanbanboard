import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import { Doing } from '../components/Doing'
import { Done } from '../components/Done'
import { ToDo } from '../components/ToDo'

function Droppable(props) {
    
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
  
}

export const  MultipleDroppables = (props) => {
  const { data, deleteTask, setTaskDataUpdate, setShowAddTask} = props
  console.log("Data in MultipleDroppables:", data);
  const droppables = [
    {id:'To Do', element: <ToDo data = {data} deleteTask = {deleteTask} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask={setShowAddTask}/>},
    {id:'Doing', element: <Doing data = {data} deleteTask = {deleteTask} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask={setShowAddTask}/>},
    {id:'Done', element: <Done data = {data} deleteTask = {deleteTask} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask={setShowAddTask}/>},
  ]
  console.log(droppables)
    return (
        <section>
            {droppables.map(droppable => (
                <Droppable id={droppable.id} key= {droppable.id} >
                    {droppable.element}  
                </Droppable>
            ))}
        </section>
    )
  }