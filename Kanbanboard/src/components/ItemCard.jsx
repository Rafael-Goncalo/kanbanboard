import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDraggable } from "@dnd-kit/core";

export const ItemCard = (props) => {
  const { oneKanban, deleteTask, setTaskDataUpdate, setShowAddTask } = props;
  // console.log(oneKanban)

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: oneKanban.id,
  });

  const [bgColor, setBgColor] = useState('');

  const style = transform
    ? {
        // transform: `translate3d(${transform.x}px, ${transform.y}px, 0) rotate(-2deg)`,
        // pointerEvents: "auto",
        opacity: '0.2',
        
      }
    : undefined;
    useEffect(()=> {
      if(oneKanban.priority === "High"){
      setBgColor('bgRose') 
      }else if(oneKanban.priority === "Medium"){
      setBgColor('bgOrange') 
      }else{
       setBgColor('') 
    }
    })
    

  // console.log(oneKanban)
  return (
    <div ref={setNodeRef} style={style} className={`card-container ${bgColor}`}>
      <div className="card-container-draggable" {...listeners} {...attributes}>
        <h3>{oneKanban.title}</h3>

        <div className="date-container">
          <span>
            {typeof oneKanban.createdDate === "object"
              ? oneKanban.createdDate.toISOString().split("T")[0]
              : oneKanban.createdDate}
          </span>{" "}
          -{" "}
          <span>
            {typeof oneKanban.dueDate === "object"
              ? oneKanban.dueDate.toISOString().split("T")[0]
              : oneKanban.dueDate}
          </span>
        </div>
      </div>

      <section>
        <Link to={`/tasks/${oneKanban.id}`} className="btn-details">
          <i className="fa-solid fa-circle-info"></i>
        </Link>
        <Link
          to={"#"}
          className="btn-update"
          onClick={() => {
            setTaskDataUpdate(oneKanban);
            setShowAddTask(true)
          }}
        >
          <i className="fa-solid fa-arrows-rotate"></i>
        </Link>
        <Link
          to={"#"}
          className="btn-delete"
          onClick={() => {
            deleteTask(oneKanban.id);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </Link>
      </section>
      <div className="card-container-draggable" {...listeners} {...attributes}>To {oneKanban.assignee}</div>
    </div>
  );
};
