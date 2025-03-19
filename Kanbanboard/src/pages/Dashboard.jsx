import { useState, useEffect } from "react";
// import { Doing } from '../components/Doing'
// import { Done } from '../components/Done'
// import { ToDo } from '../components/ToDo'
import { FormTask } from "../components/FormTask";
import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { DndContext, DragOverlay } from "@dnd-kit/core";

import { MultipleDroppables } from "../components/MultipleDroppables";
import { ItemCard } from "../components/ItemCard";

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

  // to clean taskDataUpdate Variable when u close the form or come from other page with form open
  useEffect(() => {
    if (taskDataUpdate) {
      setTaskDataUpdate(null);
    }
    if (showAddTask) {
      setShowAddTask(false);
    }
  }, []);

  const [activeId, setActiveId] = useState(null);

  function handleDragStart(event) {
    console.log(event.active.id);
    // When drag starts, set the active task ID
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    // active = task i drag
    //over = container where i drop
    const { active, over } = event;

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
    // setActiveId(null);
  }

  return (
    <>
      <div className="list-container">
        {/* if U want to show form */}
        {showAddTask ? (
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
        ) : (
          // else if u want to hide form check if u have something insade taskDataUpdate and set to null because u dont need to update the task if u close the form without submit
          taskDataUpdate && setTaskDataUpdate(null)
        )}
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
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

          {/* Drag Overlay */}
          <DragOverlay
            dropAnimation={{
              duration: 500,
              easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
            }}
            style={{
              cursor: "grabbing",
              opacity: "0.9",
              zIndex: 4,
            }}
          >
            {activeId ? (
              <ItemCard oneKanban={data.find((task) => task.id === activeId)} />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </>
  );
};
