import { useState } from "react";
// import { Doing } from '../components/Doing'
// import { Done } from '../components/Done'
// import { ToDo } from '../components/ToDo'
import { FormTask } from "../components/FormTask";
import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { DndContext } from "@dnd-kit/core";


import { MultipleDroppables } from "../components/MultipleDroppables";


export const Dashboard = (props) => {
  const {
    data,
    setKanbanData,
    showAddTask,
    setTaskDataUpdate,
    setShowAddTask,
    taskDataUpdate,
    deleteTask,
  } = props;

  function handleDragEnd(event) {
    // active = task i drag
    //over = container where i drop
    const { active, over } = event;
    console.log(active, over);
    // if the task is not over a container stop the function
    if (!over) return;
    // else

    const taskId = active.id;
    const newStatus = over.id;
    // change data with setter
    setKanbanData(() =>
      // map data
      data.map((task) =>
        // find task i drag
        task.id === taskId
          ? // if it is the task i drag change the status with the newStatus
            {
              ...task,
              status: newStatus,
            }
          : // else change nothing
            task
      )
    );
  }

  return (
    <>
      {showAddTask && (
        <div className="form-container">
          <MantineProvider>
            <DatesProvider>
              <FormTask
                data={data}
                setKanbanData={setKanbanData}
                taskDataUpdate={taskDataUpdate}
                setTaskDataUpdate={setTaskDataUpdate}
                setShowAddTask={setShowAddTask}
              />
            </DatesProvider>
          </MantineProvider>
        </div>
      )}
      <div className="list-container">
        <DndContext onDragEnd={handleDragEnd}>
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

          <MultipleDroppables
            data={data}
            deleteTask={deleteTask}
            setTaskDataUpdate={setTaskDataUpdate}
            setShowAddTask={setShowAddTask}
          />
        </DndContext>{" "}
      </div>
    </>
  );
};
