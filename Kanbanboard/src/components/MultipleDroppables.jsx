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
    backgroundColor: isOver ? '#1c5c33' : undefined,
    borderRadius: "20px",
    boxShadow: isOver ?"0 0 10px rgba(255, 255, 255, 0.3)": undefined,
    transform: isOver ?"scale(1.02)": undefined
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
  
}

export const  MultipleDroppables = (props) => {
  const { data, deleteTask, setTaskDataUpdate, setShowAddTask} = props
  
  const droppables = [
    {id:'To Do', element: <ToDo data = {data} deleteTask = {deleteTask} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask={setShowAddTask}/>},
    {id:'In Progress', element: <Doing data = {data} deleteTask = {deleteTask} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask={setShowAddTask}/>},
    {id:'Done', element: <Done data = {data} deleteTask = {deleteTask} setTaskDataUpdate={setTaskDataUpdate} setShowAddTask={setShowAddTask}/>},
  ]
 
    return (
        <>
            {droppables.map(droppable => (
                <Droppable id={droppable.id} key= {droppable.id} >
                    {droppable.element}  
                </Droppable>
            ))}
        </>
    )
  }