import React, {useState} from 'react'
import {DatePickerInput} from '@mantine/dates';

export const FormTask = (props) => {
  const {data, setKanbanData} = props;
  const [newTask, setNewTask] = useState({
    "id": data.length,
    "title": "",
    "description": "",
    "assignee": "",
    "status": "To Do",
    "priority": "Low",
    "createdDate": new Date(),
    "dueDate": new Date()
  })
// e.preventDefault() // Somewhere here.
  function handleOnChange(e){
    const name= e.target.name;
    const value = e.target.value;
    setNewTask({...newTask, [name] : value})
  }
  function handleFormSubmit(e ) {
    e.preventDefault();
    setKanbanData([...data, newTask]);

  }
  return (
    <form className='form-container' onSubmit={handleFormSubmit}>
      <div> 

        <label> Title 
          <input type="text" name="title" placeholder="task title" value={newTask.title} onChange={handleOnChange}/>
        </label>
        <label> assignee
            <input type="text" name="assignee" placeholder="name assignee" value={newTask.assignee} onChange={handleOnChange}/>
        </label>
        <DatePickerInput value={newTask.dueDate} onChange={(date) => setNewTask({...newTask, dueDate: date || new Date()})}  label="Deadline" placeholder='Due date' />
    
    </div>

      <div>

        <label>Status
          <select name="status" value={newTask.status} onChange={handleOnChange}>
            <option value="To Do">To Do</option>
            <option value="In Progress">Doing</option>
            <option value="Done">Done</option>
          </select>
        </label>

        <label>Priority
          <select name="priority" value={newTask.priority} onChange={handleOnChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

      </div>

      <div>
        <label>
            <input type="textarea" name="description" placeholder="describe your task here" value={newTask.description} onChange={handleOnChange}/>
        </label>
      </div>

      <button type="submit"> Create </button>
      
    </form>
  )
}
